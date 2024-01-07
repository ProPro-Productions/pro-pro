"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XLogoIcon = void 0;
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
const react_1 = __importDefault(require("react"));
const react_web_1 = require("@plasmicapp/react-web");
function XLogoIcon(props) {
    const { className, style, title } = props, restProps = __rest(props, ["className", "style", "title"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 32 32", height: "1em", width: "1em", className: (0, react_web_1.classNames)("plasmic-default__svg", className), style: style }, restProps),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { filter: "url(#6yVZaw51A69oa)" },
            react_1.default.createElement("path", { d: "M12.581 17.935L1.008 31.109H3.75l10.053-11.437 8.024 11.437h9.256L18.947 13.813 31.083 0h-2.741l-10.61 12.08L9.257 0H0m27.352 29.084H23.14L3.752 1.925h4.213", fill: "currentColor" })),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("filter", { id: "6yVZaw51A69oa", x: "-6.011", y: "-6.011", width: "43.106", height: "43.132", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                react_1.default.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                react_1.default.createElement("feGaussianBlur", { in: "BackgroundImageFix", stdDeviation: "3.006" }),
                react_1.default.createElement("feComposite", { in2: "SourceAlpha", operator: "in", result: "effect1_backgroundBlur_5524_45677" }),
                react_1.default.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_backgroundBlur_5524_45677", result: "shape" })))));
}
exports.XLogoIcon = XLogoIcon;
exports.default = XLogoIcon;
/* prettier-ignore-end */
