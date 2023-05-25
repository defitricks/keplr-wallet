import React, { FunctionComponent } from "react";
import { IconProps } from "../../../../../components/icon/types";

export const CustomIcon: FunctionComponent<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
  color,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 59 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_31)">
        <path
          d="M28.8799 40C22.8149 40 17.8799 35.065 17.8799 29C17.8799 22.935 22.8149 18 28.8799 18C34.9449 18 39.8799 22.935 39.8799 29C39.8799 35.065 34.9449 40 28.8799 40ZM28.8799 20C23.9169 20 19.8799 24.037 19.8799 29C19.8799 33.963 23.9169 38 28.8799 38C33.8429 38 37.8799 33.963 37.8799 29C37.8799 24.037 33.8429 20 28.8799 20Z"
          fill={color || "currentColor"}
        />
        <path
          d="M46.686 19.918C46.644 19.918 46.6 19.915 46.557 19.91C46.009 19.839 45.622 19.338 45.693 18.79L46.971 8.872C47.042 8.325 47.542 7.947 48.09 8.008L58.008 9.285C58.556 9.356 58.943 9.857 58.872 10.405C58.801 10.952 58.299 11.329 57.753 11.269L48.827 10.119L47.677 19.046C47.611 19.55 47.181 19.918 46.686 19.918Z"
          fill={color || "currentColor"}
        />
        <path
          d="M6.04004 45.164C5.72304 45.164 5.41204 45.015 5.21804 44.734C4.46304 43.647 3.78004 42.536 3.18904 41.433C2.92804 40.946 3.11104 40.34 3.59804 40.079C4.08504 39.819 4.69104 40.002 4.95204 40.488C5.50704 41.524 6.15004 42.569 6.86104 43.593C7.17604 44.046 7.06404 44.669 6.61004 44.985C6.43604 45.106 6.23704 45.164 6.04004 45.164ZM1.92504 36.755C1.49204 36.755 1.09204 36.472 0.96504 36.034C0.60004 34.777 0.33004 33.489 0.16504 32.204C0.0950401 31.657 0.48204 31.155 1.03004 31.085C1.57904 31.023 2.07904 31.402 2.14904 31.95C2.30104 33.132 2.54804 34.318 2.88504 35.475C3.03904 36.005 2.73404 36.56 2.20404 36.714C2.11204 36.742 2.01804 36.755 1.92504 36.755Z"
          fill={color || "currentColor"}
        />
        <path
          d="M1.07905 27.436C1.04905 27.436 1.01805 27.435 0.987055 27.432C0.437055 27.382 0.0320547 26.896 0.0820547 26.345C0.199055 25.053 0.405055 23.76 0.693055 22.501C0.817055 21.963 1.35405 21.625 1.89105 21.75C2.42905 21.873 2.76605 22.409 2.64305 22.948C2.37505 24.119 2.18305 25.323 2.07405 26.526C2.02705 27.045 1.59005 27.436 1.07905 27.436ZM3.47505 18.39C3.33605 18.39 3.19505 18.361 3.06005 18.3C2.55805 18.071 2.33605 17.477 2.56605 16.975C3.10305 15.799 3.72505 14.647 4.41705 13.549C4.71105 13.081 5.32905 12.942 5.79605 13.237C6.26305 13.531 6.40306 14.148 6.10906 14.616C5.46506 15.637 4.88506 16.711 4.38506 17.805C4.21706 18.173 3.85405 18.39 3.47505 18.39ZM8.73005 10.644C8.48105 10.644 8.23305 10.552 8.03905 10.367C7.64005 9.984 7.62606 9.352 8.00806 8.952C8.90506 8.014 9.87205 7.132 10.8801 6.327C11.3121 5.98 11.9411 6.054 12.2851 6.484C12.6291 6.916 12.5591 7.546 12.1271 7.889C11.1881 8.639 10.2881 9.461 9.45205 10.334C9.25605 10.54 8.99305 10.644 8.73005 10.644ZM16.2351 5.054C15.8711 5.054 15.5211 4.855 15.3441 4.509C15.0931 4.018 15.2871 3.415 15.7791 3.163C16.9291 2.575 18.1321 2.059 19.3541 1.63C19.8751 1.445 20.4461 1.721 20.6291 2.241C20.8121 2.762 20.5381 3.333 20.0171 3.516C18.8801 3.916 17.7601 4.396 16.6901 4.944C16.5431 5.019 16.3881 5.054 16.2351 5.054ZM38.1441 3.529C38.0361 3.529 37.9261 3.511 37.8181 3.474C36.6771 3.081 35.5001 2.763 34.3201 2.526C33.7781 2.418 33.4271 1.891 33.5351 1.349C33.6441 0.807 34.1701 0.454 34.7121 0.565C35.9801 0.818 37.2441 1.161 38.4701 1.584C38.9921 1.764 39.2701 2.333 39.0891 2.855C38.9461 3.27 38.5581 3.529 38.1441 3.529ZM25.1581 2.256C24.6651 2.256 24.2361 1.892 24.1681 1.39C24.0941 0.843 24.4781 0.339 25.0251 0.265C26.3021 0.092 27.6071 0.003 28.9061 0H28.9081C29.4591 0 29.9071 0.446 29.9081 0.998C29.9091 1.55 29.4631 1.999 28.9111 2C27.7001 2.003 26.4831 2.086 25.2941 2.247C25.2481 2.253 25.2031 2.256 25.1581 2.256Z"
          fill={color || "currentColor"}
        />
        <path
          d="M44.9611 7C44.7631 7 44.5641 6.941 44.3901 6.82C43.8691 6.457 43.3241 6.104 42.7711 5.775C42.2971 5.492 42.1411 4.878 42.4241 4.404C42.7071 3.929 43.3201 3.773 43.7951 4.056C44.3891 4.41 44.9741 4.788 45.5351 5.179C45.9881 5.495 46.0991 6.118 45.7831 6.572C45.5881 6.851 45.2771 7 44.9611 7Z"
          fill={color || "currentColor"}
        />
        <path
          d="M28.9621 58C23.4391 58 18.0661 56.441 13.4251 53.491C12.9591 53.195 12.8211 52.577 13.1171 52.111C13.4141 51.645 14.0321 51.508 14.4971 51.803C18.8181 54.549 23.8191 56 28.9621 56C43.8501 56 55.9621 43.888 55.9621 29C55.9621 22.062 53.1101 15.747 47.2441 9.696C46.8601 9.3 46.8691 8.666 47.2661 8.282C47.6621 7.898 48.2961 7.908 48.6801 8.303C54.9261 14.745 57.9621 21.515 57.9621 28.999C57.9621 44.99 44.9531 58 28.9621 58Z"
          fill={color || "currentColor"}
        />
        <path
          d="M10.962 51C10.933 51 10.904 50.999 10.875 50.996L0.912967 50.123C0.362967 50.075 -0.0440331 49.59 0.00396695 49.04C0.051967 48.49 0.535967 48.076 1.08697 48.131L10.053 48.917L10.839 39.951C10.887 39.4 11.372 38.988 11.922 39.042C12.472 39.09 12.879 39.575 12.831 40.125L11.958 50.087C11.935 50.352 11.808 50.596 11.604 50.767C11.424 50.918 11.196 51 10.962 51Z"
          fill={color || "currentColor"}
        />
      </g>
      <defs>
        <clipPath id="clip0_101_31">
          <rect width="58.88" height="58" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
