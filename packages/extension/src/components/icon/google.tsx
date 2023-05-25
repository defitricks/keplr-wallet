import React, { FunctionComponent } from "react";
import { IconProps } from "./types";

export const GoogleIcon: FunctionComponent<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
  color,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8531 10.5438H12.1628V13.6396H16.5561C16.3666 14.6403 15.7919 15.4866 14.9256 16.0537C14.1934 16.5332 13.259 16.8167 12.1607 16.8167C10.0343 16.8167 8.23573 15.4095 7.59292 13.5187C7.43116 13.0392 7.3375 12.5264 7.3375 11.999C7.3375 11.4715 7.43116 10.9587 7.59292 10.4792C8.23786 8.59049 10.0365 7.18332 12.1628 7.18332C13.3612 7.18332 14.4361 7.58775 15.2832 8.37993L17.6246 6.08469C16.2091 4.79218 14.3637 4 12.1628 4C8.9722 4 6.21152 5.79283 4.86843 8.40704C4.31502 9.48691 4 10.7085 4 12.001C4 13.2936 4.31502 14.5131 4.86843 15.593C6.21152 18.2072 8.9722 20 12.1628 20C14.368 20 16.2155 19.2829 17.565 18.0612C19.1082 16.6687 20 14.6173 20 12.1803C20 11.6133 19.9489 11.0692 19.8531 10.5438Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};
