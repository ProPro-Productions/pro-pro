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
exports.IconIcon = void 0;
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
const react_1 = __importDefault(require("react"));
const react_web_1 = require("@plasmicapp/react-web");
function IconIcon(props) {
    const { className, style, title } = props, restProps = __rest(props, ["className", "style", "title"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", viewBox: "0 0 38 38", height: "1em", width: "1em", className: (0, react_web_1.classNames)("plasmic-default__svg", className), style: style }, restProps),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("g", { transform: "translate(1 1)", strokeWidth: "2", fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("circle", { strokeOpacity: ".5", cx: "18", cy: "18", r: "18" }),
            react_1.default.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" },
                react_1.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
exports.IconIcon = IconIcon;
exports.default = IconIcon;
/* prettier-ignore-end */
