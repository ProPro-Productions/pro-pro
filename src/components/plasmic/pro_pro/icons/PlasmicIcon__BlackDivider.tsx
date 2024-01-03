// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BlackDividerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BlackDividerIcon(props: BlackDividerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 150 2"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"1.44"}
        strokeLinecap={"round"}
        d={"M.72 1.28h147.974"}
      ></path>
    </svg>
  );
}

export default BlackDividerIcon;
/* prettier-ignore-end */
