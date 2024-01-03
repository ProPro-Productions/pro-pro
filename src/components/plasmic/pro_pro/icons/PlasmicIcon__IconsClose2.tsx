// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsClose2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsClose2Icon(props: IconsClose2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M8.943 7.947l2.862-2.843a.658.658 0 000-.936.669.669 0 00-.943 0L8 7.011 5.138 4.168a.67.67 0 00-.943 0 .658.658 0 000 .936l2.862 2.843-2.862 2.843a.658.658 0 000 .937.667.667 0 00.943 0L8 8.884l2.862 2.843a.667.667 0 00.943 0 .658.658 0 000-.937L8.943 7.947z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsClose2Icon;
/* prettier-ignore-end */
