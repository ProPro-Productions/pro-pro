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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlasmicPageLayout = exports.PlasmicPageLayout__ArgProps = exports.PlasmicPageLayout__VariantProps = void 0;
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtWvXH8Uhh67sc1TY2MZeK
// Component: YMVJUwUaKqUA
const React = __importStar(require("react"));
const p = __importStar(require("@plasmicapp/react-web"));
const ph = __importStar(require("@plasmicapp/react-web/lib/host"));
const react_web_1 = require("@plasmicapp/react-web");
const rich_layout_1 = require("@plasmicpkgs/plasmic-rich-components/skinny/rich-layout");
const plasmic_basic_components_1 = require("@plasmicpkgs/plasmic-basic-components");
require("@plasmicapp/react-web/lib/plasmic.css");
const plasmic_antd_5_hostless_module_css_1 = __importDefault(require("../antd_5_hostless/plasmic_antd_5_hostless.module.css")); // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
const plasmic_plasmic_rich_components_module_css_1 = __importDefault(require("../plasmic_rich_components/plasmic_plasmic_rich_components.module.css")); // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
const plasmic_pro_pro_module_css_1 = __importDefault(require("./plasmic_pro_pro.module.css")); // plasmic-import: qtWvXH8Uhh67sc1TY2MZeK/projectcss
const PlasmicPageLayout_module_css_1 = __importDefault(require("./PlasmicPageLayout.module.css")); // plasmic-import: YMVJUwUaKqUA/css
const PlasmicIcon__Icon_1 = __importDefault(require("./icons/PlasmicIcon__Icon")); // plasmic-import: razNr1MlG8g-/icon
const PlasmicIcon__Icon2_1 = __importDefault(require("./icons/PlasmicIcon__Icon2")); // plasmic-import: N20p8KRGtE_5/icon
react_web_1.createPlasmicElementProxy;
exports.PlasmicPageLayout__VariantProps = new Array();
exports.PlasmicPageLayout__ArgProps = new Array("children");
const $$ = {};
function PlasmicPageLayout__RenderFunc(props) {
    var _a, _b;
    const { variants, overrides, forNode } = props;
    const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
    const $props = Object.assign(Object.assign({}, args), variants);
    const $ctx = ((_a = ph.useDataEnv) === null || _a === void 0 ? void 0 : _a.call(ph)) || {};
    const refsRef = React.useRef({});
    const $refs = refsRef.current;
    const currentUser = ((_b = p.useCurrentUser) === null || _b === void 0 ? void 0 : _b.call(p)) || {};
    return ((0, react_web_1.createPlasmicElementProxy)(rich_layout_1.RichLayout, { "data-plasmic-name": "root", "data-plasmic-override": overrides.root, "data-plasmic-root": true, "data-plasmic-for-node": forNode, className: (0, react_web_1.classNames)("__wab_instance", plasmic_pro_pro_module_css_1.default.root_reset, plasmic_pro_pro_module_css_1.default.plasmic_default_styles, plasmic_pro_pro_module_css_1.default.plasmic_mixins, plasmic_pro_pro_module_css_1.default.plasmic_tokens, plasmic_antd_5_hostless_module_css_1.default.plasmic_tokens, plasmic_plasmic_rich_components_module_css_1.default.plasmic_tokens, PlasmicPageLayout_module_css_1.default.root), logoElement: (0, react_web_1.createPlasmicElementProxy)(PlasmicIcon__Icon2_1.default, { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicPageLayout_module_css_1.default.svg__hlvoA), role: "img" }), navMenuItems: (() => {
            const __composite = [{ path: null, name: null }];
            __composite["0"]["path"] = `/`;
            __composite["0"]["name"] = "Home";
            return __composite;
        })(), simpleNavTheme: (() => {
            const __composite = { scheme: null };
            __composite["scheme"] = "primary";
            return __composite;
        })(), title: "App title" },
        (0, react_web_1.createPlasmicElementProxy)(plasmic_basic_components_1.LoadingBoundary, { "data-plasmic-name": "loadingBoundary", "data-plasmic-override": overrides.loadingBoundary, className: (0, react_web_1.classNames)("__wab_instance", PlasmicPageLayout_module_css_1.default.loadingBoundary), loadingState: (0, react_web_1.createPlasmicElementProxy)(ph.DataCtxReader, null, $ctx => ((0, react_web_1.createPlasmicElementProxy)("div", { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicPageLayout_module_css_1.default.freeBox__qgwG3) },
                (0, react_web_1.createPlasmicElementProxy)(PlasmicIcon__Icon_1.default, { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicPageLayout_module_css_1.default.svg__wkdMe), role: "img" })))) },
            (0, react_web_1.createPlasmicElementProxy)(ph.DataCtxReader, null, $ctx => ((0, react_web_1.createPlasmicElementProxy)("div", { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicPageLayout_module_css_1.default.freeBox__pjMhB) }, p.renderPlasmicSlot({
                defaultContents: ((0, react_web_1.createPlasmicElementProxy)("section", { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicPageLayout_module_css_1.default.section__fhB6C) },
                    (0, react_web_1.createPlasmicElementProxy)("h1", { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, plasmic_pro_pro_module_css_1.default.h1, plasmic_pro_pro_module_css_1.default.__wab_text, PlasmicPageLayout_module_css_1.default.h1__rS2Lh) }, "Untitled page"),
                    (0, react_web_1.createPlasmicElementProxy)("div", { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, plasmic_pro_pro_module_css_1.default.__wab_text, PlasmicPageLayout_module_css_1.default.text__yzUDp) }, "Press the big blue + button to insert components like Tables, Text, Buttons, and Forms.\n\nJoin our Slack Community (icon in bottom left) for help!"))),
                value: args.children
            })))))));
}
const PlasmicDescendants = {
    root: ["root", "loadingBoundary"],
    loadingBoundary: ["loadingBoundary"]
};
function makeNodeComponent(nodeName) {
    const func = function (props) {
        const { variants, args, overrides } = React.useMemo(() => (0, react_web_1.deriveRenderOpts)(props, {
            name: nodeName,
            descendantNames: PlasmicDescendants[nodeName],
            internalArgPropNames: exports.PlasmicPageLayout__ArgProps,
            internalVariantPropNames: exports.PlasmicPageLayout__VariantProps
        }), [props, nodeName]);
        return PlasmicPageLayout__RenderFunc({
            variants,
            args,
            overrides,
            forNode: nodeName
        });
    };
    if (nodeName === "root") {
        func.displayName = "PlasmicPageLayout";
    }
    else {
        func.displayName = `PlasmicPageLayout.${nodeName}`;
    }
    return func;
}
exports.PlasmicPageLayout = Object.assign(
// Top-level PlasmicPageLayout renders the root element
makeNodeComponent("root"), {
    // Helper components rendering sub-elements
    loadingBoundary: makeNodeComponent("loadingBoundary"),
    // Metadata about props expected for PlasmicPageLayout
    internalVariantProps: exports.PlasmicPageLayout__VariantProps,
    internalArgProps: exports.PlasmicPageLayout__ArgProps
});
exports.default = exports.PlasmicPageLayout;
/* prettier-ignore-end */
