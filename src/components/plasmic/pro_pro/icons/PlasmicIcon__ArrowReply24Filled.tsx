// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowReply24FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowReply24FilledIcon(props: ArrowReply24FilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.704 16.294a1 1 0 11-1.415 1.414l-4.997-5.004a1 1 0 010-1.413L8.29 6.293a1 1 0 011.415 1.414L6.41 11H13a8 8 0 017.996 7.75L21 19a1 1 0 11-2 0 6 6 0 00-5.775-5.996L13 13H6.414l3.29 3.294z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowReply24FilledIcon;
/* prettier-ignore-end */
