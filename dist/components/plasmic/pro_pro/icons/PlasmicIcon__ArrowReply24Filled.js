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
exports.ArrowReply24FilledIcon = void 0;
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
const react_1 = __importDefault(require("react"));
const react_web_1 = require("@plasmicapp/react-web");
function ArrowReply24FilledIcon(props) {
    const { className, style, title } = props, restProps = __rest(props, ["className", "style", "title"]);
    return (react_1.default.createElement("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", height: "1em", width: "1em", className: (0, react_web_1.classNames)("plasmic-default__svg", className), style: style }, restProps),
        title && react_1.default.createElement("title", null, title),
        react_1.default.createElement("path", { d: "M9.704 16.294a1 1 0 11-1.415 1.414l-4.997-5.004a1 1 0 010-1.413L8.29 6.293a1 1 0 011.415 1.414L6.41 11H13a8 8 0 017.996 7.75L21 19a1 1 0 11-2 0 6 6 0 00-5.775-5.996L13 13H6.414l3.29 3.294z", fill: "currentColor" })));
}
exports.ArrowReply24FilledIcon = ArrowReply24FilledIcon;
exports.default = ArrowReply24FilledIcon;
/* prettier-ignore-end */
