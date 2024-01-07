"use strict";
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ohDidvG9XsCeFumugENU3J
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const registerConfigProvider_1 = require("@plasmicpkgs/antd5/skinny/registerConfigProvider");
function GlobalContextsProvider(props) {
    const { children, antdConfigProviderProps } = props;
    return (React.createElement(registerConfigProvider_1.AntdConfigProvider, Object.assign({}, antdConfigProviderProps, { borderRadius: antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
            ? antdConfigProviderProps.borderRadius
            : 6, colorBgBase: antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
            ? antdConfigProviderProps.colorBgBase
            : "#ffffff", colorError: antdConfigProviderProps && "colorError" in antdConfigProviderProps
            ? antdConfigProviderProps.colorError
            : "#ff4d4f", colorInfo: antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
            ? antdConfigProviderProps.colorInfo
            : "#1677ff", colorPrimary: antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
            ? antdConfigProviderProps.colorPrimary
            : "#1677ff", colorSuccess: antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
            ? antdConfigProviderProps.colorSuccess
            : "#52c41a", colorWarning: antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
            ? antdConfigProviderProps.colorWarning
            : "#faad14", controlHeight: antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
            ? antdConfigProviderProps.controlHeight
            : 32, defaultDark: antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
            ? antdConfigProviderProps.defaultDark
            : false, lineWidth: antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
            ? antdConfigProviderProps.lineWidth
            : 1, loadingText: antdConfigProviderProps && "loadingText" in antdConfigProviderProps
            ? antdConfigProviderProps.loadingText
            : undefined, removeLoading: antdConfigProviderProps && "removeLoading" in antdConfigProviderProps
            ? antdConfigProviderProps.removeLoading
            : undefined, sizeStep: antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeStep
            : 4, sizeUnit: antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeUnit
            : 4, themeStyles: antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
            ? antdConfigProviderProps.themeStyles
            : true
                ? {}
                : undefined, wireframe: antdConfigProviderProps && "wireframe" in antdConfigProviderProps
            ? antdConfigProviderProps.wireframe
            : false }), children));
}
exports.default = GlobalContextsProvider;