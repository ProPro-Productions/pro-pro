"use strict";
// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
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
exports.useScreenVariants = exports.ScreenVariantProvider = exports.ScreenContext = void 0;
const React = __importStar(require("react"));
const p = __importStar(require("@plasmicapp/react-web"));
exports.ScreenContext = React.createContext("PLEASE_RENDER_INSIDE_PROVIDER");
/**
 *  @deprecated Plasmic now uses a custom hook for Screen variants, which is
 *  automatically included in your components. Please remove this provider
 *  from your code.
 */
function ScreenVariantProvider(props) {
    console.warn("DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code.");
    return props.children;
}
exports.ScreenVariantProvider = ScreenVariantProvider;
exports.useScreenVariants = p.createUseScreenVariants(true, {
    mobileOnly: "(min-width:0px) and (max-width:768px)",
    smartphonePortrait: "(max-width:480px)",
    smallDesktop: "(max-width:2400px)",
    desktop: "(max-width:1400px)",
});
exports.default = exports.ScreenContext;
/* prettier-ignore-end */
