"use strict";
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
const react_1 = __importStar(require("react"));
const react_2 = require("@headlessui/react");
const solid_1 = require("@heroicons/react/solid");
const AuthContext_1 = require("./AuthContext");
const AccountManagementPopup_1 = __importDefault(require("./AccountManagementPopup"));
const ProProUserButton = ({ afterSignOutUrl = "/", }) => {
    var _a;
    const { user, signOut } = (0, AuthContext_1.useAuth)();
    const [showAccountPopup, setShowAccountPopup] = (0, react_1.useState)(false);
    // Sign out handler
    const handleSignOut = () => {
        signOut();
        window.location.href = afterSignOutUrl;
    };
    // Toggle account popup visibility
    const toggleAccountPopup = () => {
        setShowAccountPopup((prev) => !prev);
    };
    // Close account popup
    const closeAccountPopup = () => {
        setShowAccountPopup(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "relative inline-block text-left" },
            react_1.default.createElement(react_2.Menu, { as: "div" },
                react_1.default.createElement(react_2.Menu.Button, { className: "flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" },
                    react_1.default.createElement("img", { src: (_a = user === null || user === void 0 ? void 0 : user.avatar) !== null && _a !== void 0 ? _a : "default-avatar.png", alt: "User Avatar", className: "h-8 w-8 rounded-full" }),
                    react_1.default.createElement(solid_1.ChevronDownIcon, { className: "-mr-1 ml-2 h-5 w-5", "aria-hidden": "true" })),
                react_1.default.createElement(react_2.Transition, { as: react_1.default.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                    react_1.default.createElement(react_2.Menu.Items, { className: "absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" },
                        react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { type: "button", className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm w-full text-left`, onClick: toggleAccountPopup }, "Manage account"))),
                        react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { type: "button", className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm w-full text-left`, onClick: handleSignOut }, "Sign out"))))))),
        showAccountPopup && (react_1.default.createElement(AccountManagementPopup_1.default, { user: user, onClose: closeAccountPopup }))));
};
exports.default = ProProUserButton;
