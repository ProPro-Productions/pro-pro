// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XLogoIcon(props: XLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#6yVZaw51A69oa)"}>
        <path
          d={
            "M12.581 17.935L1.008 31.109H3.75l10.053-11.437 8.024 11.437h9.256L18.947 13.813 31.083 0h-2.741l-10.61 12.08L9.257 0H0m27.352 29.084H23.14L3.752 1.925h4.213"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"6yVZaw51A69oa"}
          x={"-6.011"}
          y={"-6.011"}
          width={"43.106"}
          height={"43.132"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feGaussianBlur
            in={"BackgroundImageFix"}
            stdDeviation={"3.006"}
          ></feGaussianBlur>

          <feComposite
            in2={"SourceAlpha"}
            operator={"in"}
            result={"effect1_backgroundBlur_5524_45677"}
          ></feComposite>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_backgroundBlur_5524_45677"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default XLogoIcon;
/* prettier-ignore-end */
