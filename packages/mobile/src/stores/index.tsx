import React, { FunctionComponent, useEffect, useState } from "react";

import { createRootStore, RootStore } from "./root";
import { Keplr } from "@keplr-wallet/provider";
import { RNMessageRequesterInternal } from "../router";

const storeContext = React.createContext<RootStore | null>(null);

/*
 I don't know why react native works that way.
 But, react native clears all view and create new views when window size changes of the app exits by back button on android.
 So, rootStore can be made multiple times if it handles on the provider.
 To prevent this problem, handle the root store statically.
 */
let rootStore: RootStore | undefined;

export const StoreProvider: FunctionComponent = ({ children }) => {
  const [stores] = useState(() => {
    if (rootStore) {
      return rootStore;
    }

    rootStore = createRootStore();
    return rootStore;
  });

  useEffect(() => {
    return () => {
      // Check the comment of `_isAndroidActivityKilled` field on `WalletConnectStore`
      stores.walletConnectStore.onAndroidActivityKilled();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [keplr] = useState(
    () => new Keplr("", "core", new RNMessageRequesterInternal())
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Analytics id is loaded asynchronously on background.
      // So there is no guarantee when it succeeds.
      // Simply, fetch it until success by interval.
      keplr.__core__getAnalyticsId().then((id) => {
        if (id) {
          stores.analyticsStore.setUserId(id);
          clearInterval(intervalId);
        }
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [keplr, stores.analyticsStore]);

  return (
    <storeContext.Provider value={stores}>{children}</storeContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("You have forgot to use StoreProvider");
  }
  return store;
};
