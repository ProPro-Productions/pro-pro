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
exports.Icon6Icon = void 0;
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
const react_1 = __importDefault(require("react"));
const react_web_1 = require("@plasmicapp/react-web");
function Icon6Icon(props) {
    const { className, style, title } = props, restProps = __rest(props, ["className", "style", "title"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 16 16", height: "1em", width: "1em", className: (0, react_web_1.classNames)("plasmic-default__svg", className), style: style }, restProps),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("path", { fillRule: "evenodd", d: "M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z", stroke: "none" })));
}
exports.Icon6Icon = Icon6Icon;
exports.default = Icon6Icon;
/* prettier-ignore-end */
