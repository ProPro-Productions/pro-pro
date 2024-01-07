// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line2Icon(props: Line2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1067 1"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".7"}
        stroke={"currentColor"}
        strokeWidth={".5"}
        d={"M0 .75h1067"}
      ></path>
    </svg>
  );
}

export default Line2Icon;
/* prettier-ignore-end */
