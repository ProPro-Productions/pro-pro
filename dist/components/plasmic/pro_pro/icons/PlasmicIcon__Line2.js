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
exports.Line2Icon = void 0;
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
const react_1 = __importDefault(require("react"));
const react_web_1 = require("@plasmicapp/react-web");
function Line2Icon(props) {
    const { className, style, title } = props, restProps = __rest(props, ["className", "style", "title"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 1067 1", height: "1em", width: "1em", style: Object.assign({ stroke: "currentcolor" }, (style || {})), className: (0, react_web_1.classNames)("plasmic-default__svg", className) }, restProps),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("path", { opacity: ".7", stroke: "currentColor", strokeWidth: ".5", d: "M0 .75h1067" })));
}
exports.Line2Icon = Line2Icon;
exports.default = Line2Icon;
/* prettier-ignore-end */
