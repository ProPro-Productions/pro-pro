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
exports.PlasmicButton = exports.PlasmicButton__ArgProps = exports.PlasmicButton__VariantProps = void 0;
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qtWvXH8Uhh67sc1TY2MZeK
// Component: 5mSzAv6LmD41
const React = __importStar(require("react"));
const p = __importStar(require("@plasmicapp/react-web"));
const ph = __importStar(require("@plasmicapp/react-web/lib/host"));
const pp = __importStar(require("@plasmicapp/react-web"));
const react_web_1 = require("@plasmicapp/react-web");
const PlasmicGlobalVariant__Theme_1 = require("./PlasmicGlobalVariant__Theme"); // plasmic-import: ROqE-xVeeGeS/globalVariant
require("@plasmicapp/react-web/lib/plasmic.css");
const plasmic_antd_5_hostless_module_css_1 = __importDefault(require("../antd_5_hostless/plasmic_antd_5_hostless.module.css")); // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
const plasmic_plasmic_rich_components_module_css_1 = __importDefault(require("../plasmic_rich_components/plasmic_plasmic_rich_components.module.css")); // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
const plasmic_pro_pro_module_css_1 = __importDefault(require("./plasmic_pro_pro.module.css")); // plasmic-import: qtWvXH8Uhh67sc1TY2MZeK/projectcss
const PlasmicButton_module_css_1 = __importDefault(require("./PlasmicButton.module.css")); // plasmic-import: 5mSzAv6LmD41/css
const PlasmicIcon__Checksvg_1 = __importDefault(require("./icons/PlasmicIcon__Checksvg")); // plasmic-import: 4aDWqHkWfWe2/icon
const PlasmicIcon__Icon6_1 = __importDefault(require("./icons/PlasmicIcon__Icon6")); // plasmic-import: uyexNrJzq8td/icon
react_web_1.createPlasmicElementProxy;
exports.PlasmicButton__VariantProps = new Array("showStartIcon", "showEndIcon", "isDisabled", "shape", "size", "color", "dropshadow");
exports.PlasmicButton__ArgProps = new Array("children", "startIcon", "endIcon", "link", "submitsForm", "target");
const $$ = {};
function PlasmicButton__RenderFunc(props) {
    var _a, _b;
    const { variants, overrides, forNode } = props;
    const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
    const $props = Object.assign(Object.assign({}, args), variants);
    const $ctx = ((_a = ph.useDataEnv) === null || _a === void 0 ? void 0 : _a.call(ph)) || {};
    const refsRef = React.useRef({});
    const $refs = refsRef.current;
    const currentUser = ((_b = p.useCurrentUser) === null || _b === void 0 ? void 0 : _b.call(p)) || {};
    const stateSpecs = React.useMemo(() => [
        {
            path: "showStartIcon",
            type: "private",
            variableType: "variant",
            initFunc: ({ $props, $state, $queries, $ctx }) => $props.showStartIcon
        },
        {
            path: "showEndIcon",
            type: "private",
            variableType: "variant",
            initFunc: ({ $props, $state, $queries, $ctx }) => $props.showEndIcon
        },
        {
            path: "isDisabled",
            type: "private",
            variableType: "variant",
            initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
        },
        {
            path: "shape",
            type: "private",
            variableType: "variant",
            initFunc: ({ $props, $state, $queries, $ctx }) => $props.shape
        },
        {
            path: "size",
            type: "private",
            variableType: "variant",
            initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
        },
        {
            path: "color",
            type: "private",
            variableType: "variant",
            initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
        },
        {
            path: "dropshadow",
            type: "private",
            variableType: "variant",
            initFunc: ({ $props, $state, $queries, $ctx }) => $props.dropshadow
        }
    ], [$props, $ctx, $refs]);
    const $state = p.useDollarState(stateSpecs, {
        $props,
        $ctx,
        $queries: {},
        $refs
    });
    const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] = (0, react_web_1.useTrigger)("useFocusVisibleWithin", {
        isTextInput: false
    });
    const triggers = {
        focusVisibleWithin_root: isRootFocusVisibleWithin
    };
    const globalVariants = (0, react_web_1.ensureGlobalVariants)({
        theme: (0, PlasmicGlobalVariant__Theme_1.useTheme)()
    });
    return ((0, react_web_1.createPlasmicElementProxy)(p.Stack, { as: "button", "data-plasmic-name": "root", "data-plasmic-override": overrides.root, "data-plasmic-root": true, "data-plasmic-for-node": forNode, hasGap: true, className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, plasmic_pro_pro_module_css_1.default.button, plasmic_pro_pro_module_css_1.default.root_reset, plasmic_pro_pro_module_css_1.default.plasmic_default_styles, plasmic_pro_pro_module_css_1.default.plasmic_mixins, plasmic_pro_pro_module_css_1.default.plasmic_tokens, plasmic_antd_5_hostless_module_css_1.default.plasmic_tokens, plasmic_plasmic_rich_components_module_css_1.default.plasmic_tokens, PlasmicButton_module_css_1.default.root, {
            [plasmic_pro_pro_module_css_1.default.global_theme_dark]: (0, react_web_1.hasVariant)(globalVariants, "theme", "dark"),
            [PlasmicButton_module_css_1.default.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [PlasmicButton_module_css_1.default.rootcolor_blue]: (0, react_web_1.hasVariant)($state, "color", "blue"),
            [PlasmicButton_module_css_1.default.rootcolor_clear]: (0, react_web_1.hasVariant)($state, "color", "clear"),
            [PlasmicButton_module_css_1.default.rootcolor_darkBlue]: (0, react_web_1.hasVariant)($state, "color", "darkBlue"),
            [PlasmicButton_module_css_1.default.rootcolor_green]: (0, react_web_1.hasVariant)($state, "color", "green"),
            [PlasmicButton_module_css_1.default.rootcolor_lightBlue]: (0, react_web_1.hasVariant)($state, "color", "lightBlue"),
            [PlasmicButton_module_css_1.default.rootcolor_link]: (0, react_web_1.hasVariant)($state, "color", "link"),
            [PlasmicButton_module_css_1.default.rootcolor_proRed]: (0, react_web_1.hasVariant)($state, "color", "proRed"),
            [PlasmicButton_module_css_1.default.rootcolor_red]: (0, react_web_1.hasVariant)($state, "color", "red"),
            [PlasmicButton_module_css_1.default.rootcolor_sand]: (0, react_web_1.hasVariant)($state, "color", "sand"),
            [PlasmicButton_module_css_1.default.rootcolor_softBlue]: (0, react_web_1.hasVariant)($state, "color", "softBlue"),
            [PlasmicButton_module_css_1.default.rootcolor_softGreen]: (0, react_web_1.hasVariant)($state, "color", "softGreen"),
            [PlasmicButton_module_css_1.default.rootcolor_softRed]: (0, react_web_1.hasVariant)($state, "color", "softRed"),
            [PlasmicButton_module_css_1.default.rootcolor_softSand]: (0, react_web_1.hasVariant)($state, "color", "softSand"),
            [PlasmicButton_module_css_1.default.rootcolor_softYellow]: (0, react_web_1.hasVariant)($state, "color", "softYellow"),
            [PlasmicButton_module_css_1.default.rootcolor_white]: (0, react_web_1.hasVariant)($state, "color", "white"),
            [PlasmicButton_module_css_1.default.rootcolor_yellow]: (0, react_web_1.hasVariant)($state, "color", "yellow"),
            [PlasmicButton_module_css_1.default.rootdropshadow_basic]: (0, react_web_1.hasVariant)($state, "dropshadow", "basic"),
            [PlasmicButton_module_css_1.default.rootisDisabled]: (0, react_web_1.hasVariant)($state, "isDisabled", "isDisabled"),
            [PlasmicButton_module_css_1.default.rootshape_round]: (0, react_web_1.hasVariant)($state, "shape", "round"),
            [PlasmicButton_module_css_1.default.rootshape_rounded]: (0, react_web_1.hasVariant)($state, "shape", "rounded"),
            [PlasmicButton_module_css_1.default.rootshape_sharp]: (0, react_web_1.hasVariant)($state, "shape", "sharp"),
            [PlasmicButton_module_css_1.default.rootshowEndIcon]: (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon"),
            [PlasmicButton_module_css_1.default.rootshowEndIcon_shape_rounded]: (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon") &&
                (0, react_web_1.hasVariant)($state, "shape", "rounded"),
            [PlasmicButton_module_css_1.default.rootshowStartIcon]: (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon"),
            [PlasmicButton_module_css_1.default.rootshowStartIcon_shape_rounded]: (0, react_web_1.hasVariant)($state, "shape", "rounded") &&
                (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon"),
            [PlasmicButton_module_css_1.default.rootsize_compact]: (0, react_web_1.hasVariant)($state, "size", "compact"),
            [PlasmicButton_module_css_1.default.rootsize_compact_shape_round]: (0, react_web_1.hasVariant)($state, "shape", "round") &&
                (0, react_web_1.hasVariant)($state, "size", "compact"),
            [PlasmicButton_module_css_1.default.rootsize_compact_shape_rounded]: (0, react_web_1.hasVariant)($state, "size", "compact") &&
                (0, react_web_1.hasVariant)($state, "shape", "rounded"),
            [PlasmicButton_module_css_1.default.rootsize_compact_showEndIcon]: (0, react_web_1.hasVariant)($state, "size", "compact") &&
                (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon"),
            [PlasmicButton_module_css_1.default.rootsize_compact_showStartIcon]: (0, react_web_1.hasVariant)($state, "size", "compact") &&
                (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon"),
            [PlasmicButton_module_css_1.default.rootsize_compact_showStartIcon_showEndIcon]: (0, react_web_1.hasVariant)($state, "size", "compact") &&
                (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon") &&
                (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon"),
            [PlasmicButton_module_css_1.default.rootsize_minimal]: (0, react_web_1.hasVariant)($state, "size", "minimal"),
            [PlasmicButton_module_css_1.default.rootsize_minimal_color_link]: (0, react_web_1.hasVariant)($state, "color", "link") &&
                (0, react_web_1.hasVariant)($state, "size", "minimal")
        }), "data-plasmic-trigger-props": [triggerRootFocusVisibleWithinProps] },
        ((0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon") ? true : false) ? ((0, react_web_1.createPlasmicElementProxy)("div", { "data-plasmic-name": "startIconContainer", "data-plasmic-override": overrides.startIconContainer, className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicButton_module_css_1.default.startIconContainer, {
                [PlasmicButton_module_css_1.default.startIconContainercolor_blue]: (0, react_web_1.hasVariant)($state, "color", "blue"),
                [PlasmicButton_module_css_1.default.startIconContainershowStartIcon]: (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon"),
                [PlasmicButton_module_css_1.default.startIconContainershowStartIcon_shape_rounded]: (0, react_web_1.hasVariant)($state, "shape", "rounded") &&
                    (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon")
            }) }, p.renderPlasmicSlot({
            defaultContents: ((0, react_web_1.createPlasmicElementProxy)(PlasmicIcon__Checksvg_1.default, { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicButton_module_css_1.default.svg__bh7P), role: "img" })),
            value: args.startIcon,
            className: (0, react_web_1.classNames)(PlasmicButton_module_css_1.default.slotTargetStartIcon, {
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_blue]: (0, react_web_1.hasVariant)($state, "color", "blue"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_clear]: (0, react_web_1.hasVariant)($state, "color", "clear"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_link]: (0, react_web_1.hasVariant)($state, "color", "link"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_softBlue]: (0, react_web_1.hasVariant)($state, "color", "softBlue"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_softGreen]: (0, react_web_1.hasVariant)($state, "color", "softGreen"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_softRed]: (0, react_web_1.hasVariant)($state, "color", "softRed"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_softSand]: (0, react_web_1.hasVariant)($state, "color", "softSand"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_softYellow]: (0, react_web_1.hasVariant)($state, "color", "softYellow"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_white]: (0, react_web_1.hasVariant)($state, "color", "white"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconcolor_yellow]: (0, react_web_1.hasVariant)($state, "color", "yellow"),
                [PlasmicButton_module_css_1.default.slotTargetStartIconshowStartIcon]: (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon")
            })
        }))) : null,
        (0, react_web_1.createPlasmicElementProxy)("div", { "data-plasmic-name": "contentContainer", "data-plasmic-override": overrides.contentContainer, className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicButton_module_css_1.default.contentContainer, {
                [PlasmicButton_module_css_1.default.contentContainer___focusVisibleWithin]: triggers.focusVisibleWithin_root,
                [PlasmicButton_module_css_1.default.contentContainercolor_darkBlue]: (0, react_web_1.hasVariant)($state, "color", "darkBlue"),
                [PlasmicButton_module_css_1.default.contentContainercolor_lightBlue]: (0, react_web_1.hasVariant)($state, "color", "lightBlue"),
                [PlasmicButton_module_css_1.default.contentContainerisDisabled]: (0, react_web_1.hasVariant)($state, "isDisabled", "isDisabled"),
                [PlasmicButton_module_css_1.default.contentContainershape_rounded]: (0, react_web_1.hasVariant)($state, "shape", "rounded"),
                [PlasmicButton_module_css_1.default.contentContainershowEndIcon]: (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon"),
                [PlasmicButton_module_css_1.default.contentContainersize_minimal]: (0, react_web_1.hasVariant)($state, "size", "minimal")
            }) }, p.renderPlasmicSlot({
            defaultContents: "Button",
            value: args.children,
            className: (0, react_web_1.classNames)(PlasmicButton_module_css_1.default.slotTargetChildren, {
                [PlasmicButton_module_css_1.default.slotTargetChildren___focusVisibleWithin]: triggers.focusVisibleWithin_root,
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_blue]: (0, react_web_1.hasVariant)($state, "color", "blue"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_clear]: (0, react_web_1.hasVariant)($state, "color", "clear"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_darkBlue]: (0, react_web_1.hasVariant)($state, "color", "darkBlue"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_green]: (0, react_web_1.hasVariant)($state, "color", "green"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_lightBlue]: (0, react_web_1.hasVariant)($state, "color", "lightBlue"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_link]: (0, react_web_1.hasVariant)($state, "color", "link"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_red]: (0, react_web_1.hasVariant)($state, "color", "red"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_sand]: (0, react_web_1.hasVariant)($state, "color", "sand"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_softBlue]: (0, react_web_1.hasVariant)($state, "color", "softBlue"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_softGreen]: (0, react_web_1.hasVariant)($state, "color", "softGreen"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_softRed]: (0, react_web_1.hasVariant)($state, "color", "softRed"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_softSand]: (0, react_web_1.hasVariant)($state, "color", "softSand"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_softYellow]: (0, react_web_1.hasVariant)($state, "color", "softYellow"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_white]: (0, react_web_1.hasVariant)($state, "color", "white"),
                [PlasmicButton_module_css_1.default.slotTargetChildrencolor_yellow]: (0, react_web_1.hasVariant)($state, "color", "yellow"),
                [PlasmicButton_module_css_1.default.slotTargetChildrenisDisabled]: (0, react_web_1.hasVariant)($state, "isDisabled", "isDisabled"),
                [PlasmicButton_module_css_1.default.slotTargetChildrenshape_rounded]: (0, react_web_1.hasVariant)($state, "shape", "rounded"),
                [PlasmicButton_module_css_1.default.slotTargetChildrenshowEndIcon]: (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon"),
                [PlasmicButton_module_css_1.default.slotTargetChildrenshowStartIcon]: (0, react_web_1.hasVariant)($state, "showStartIcon", "showStartIcon"),
                [PlasmicButton_module_css_1.default.slotTargetChildrensize_compact]: (0, react_web_1.hasVariant)($state, "size", "compact"),
                [PlasmicButton_module_css_1.default.slotTargetChildrensize_minimal]: (0, react_web_1.hasVariant)($state, "size", "minimal"),
                [PlasmicButton_module_css_1.default.slotTargetChildrensize_minimal_color_link]: (0, react_web_1.hasVariant)($state, "color", "link") &&
                    (0, react_web_1.hasVariant)($state, "size", "minimal")
            })
        })),
        ((0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon") ? true : false) ? ((0, react_web_1.createPlasmicElementProxy)("div", { "data-plasmic-name": "endIconContainer", "data-plasmic-override": overrides.endIconContainer, className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicButton_module_css_1.default.endIconContainer, {
                [PlasmicButton_module_css_1.default.endIconContainercolor_white]: (0, react_web_1.hasVariant)($state, "color", "white"),
                [PlasmicButton_module_css_1.default.endIconContainercolor_yellow]: (0, react_web_1.hasVariant)($state, "color", "yellow"),
                [PlasmicButton_module_css_1.default.endIconContainershowEndIcon]: (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon")
            }) }, p.renderPlasmicSlot({
            defaultContents: ((0, react_web_1.createPlasmicElementProxy)(PlasmicIcon__Icon6_1.default, { className: (0, react_web_1.classNames)(plasmic_pro_pro_module_css_1.default.all, PlasmicButton_module_css_1.default.svg__vqZxt), role: "img" })),
            value: args.endIcon,
            className: (0, react_web_1.classNames)(PlasmicButton_module_css_1.default.slotTargetEndIcon, {
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_clear]: (0, react_web_1.hasVariant)($state, "color", "clear"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_link]: (0, react_web_1.hasVariant)($state, "color", "link"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_softBlue]: (0, react_web_1.hasVariant)($state, "color", "softBlue"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_softGreen]: (0, react_web_1.hasVariant)($state, "color", "softGreen"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_softRed]: (0, react_web_1.hasVariant)($state, "color", "softRed"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_softSand]: (0, react_web_1.hasVariant)($state, "color", "softSand"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_softYellow]: (0, react_web_1.hasVariant)($state, "color", "softYellow"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_white]: (0, react_web_1.hasVariant)($state, "color", "white"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconcolor_yellow]: (0, react_web_1.hasVariant)($state, "color", "yellow"),
                [PlasmicButton_module_css_1.default.slotTargetEndIconshowEndIcon]: (0, react_web_1.hasVariant)($state, "showEndIcon", "showEndIcon")
            })
        }))) : null));
}
function useBehavior(props, ref) {
    const b = pp.useButton(exports.PlasmicButton, props, {
        showStartIconVariant: {
            group: "showStartIcon",
            variant: "showStartIcon"
        },
        showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
        isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
        contentSlot: "children",
        startIconSlot: "startIcon",
        endIconSlot: "endIcon",
        root: "root"
    }, ref);
    return b;
}
const PlasmicDescendants = {
    root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
    startIconContainer: ["startIconContainer"],
    contentContainer: ["contentContainer"],
    endIconContainer: ["endIconContainer"]
};
function makeNodeComponent(nodeName) {
    const func = function (props) {
        const { variants, args, overrides } = React.useMemo(() => (0, react_web_1.deriveRenderOpts)(props, {
            name: nodeName,
            descendantNames: PlasmicDescendants[nodeName],
            internalArgPropNames: exports.PlasmicButton__ArgProps,
            internalVariantPropNames: exports.PlasmicButton__VariantProps
        }), [props, nodeName]);
        return PlasmicButton__RenderFunc({
            variants,
            args,
            overrides,
            forNode: nodeName
        });
    };
    if (nodeName === "root") {
        func.displayName = "PlasmicButton";
    }
    else {
        func.displayName = `PlasmicButton.${nodeName}`;
    }
    return func;
}
exports.PlasmicButton = Object.assign(
// Top-level PlasmicButton renders the root element
makeNodeComponent("root"), {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),
    // Metadata about props expected for PlasmicButton
    internalVariantProps: exports.PlasmicButton__VariantProps,
    internalArgProps: exports.PlasmicButton__ArgProps,
    useBehavior
});
exports.default = exports.PlasmicButton;
/* prettier-ignore-end */
