// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsCloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsCloseIcon(props: IconsCloseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.723 5.086l1.831-1.82a.421.421 0 000-.599.428.428 0 00-.603 0L5.12 4.487l-1.832-1.82a.428.428 0 00-.603 0 .421.421 0 000 .6l1.831 1.819-1.831 1.819a.421.421 0 000 .6.427.427 0 00.603 0l1.832-1.82 1.831 1.82a.427.427 0 00.603 0 .421.421 0 000-.6l-1.831-1.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsCloseIcon;
/* prettier-ignore-end */
