"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AuthContext_1 = require("./AuthContext");
const react_2 = require("@headlessui/react");
const solid_1 = require("@heroicons/react/solid");
const ProProUserButton = ({ afterSignOutUrl = "/", }) => {
    var _a;
    const { user, signOut } = (0, AuthContext_1.useAuth)();
    const handleSignOut = () => {
        signOut();
        window.location.href = afterSignOutUrl;
    };
    return (react_1.default.createElement(react_2.Menu, { as: "div", className: "relative inline-block text-left" },
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_2.Menu.Button, { className: "inline-flex w-full justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" },
                react_1.default.createElement("img", { src: (_a = user === null || user === void 0 ? void 0 : user.avatar) !== null && _a !== void 0 ? _a : "default-avatar.png", alt: "User Avatar", className: "h-8 w-8 rounded-full" }),
                react_1.default.createElement(solid_1.ChevronDownIcon, { className: "-mr-1 ml-2 h-5 w-5", "aria-hidden": "true" }))),
        react_1.default.createElement(react_2.Transition, { as: react_1.default.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
            react_1.default.createElement(react_2.Menu.Items, { className: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" },
                react_1.default.createElement("div", { className: "py-1" },
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("a", { href: "/account", className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm` }, "Manage account"))),
                    react_1.default.createElement(react_2.Menu.Item, null, ({ active }) => (react_1.default.createElement("button", { type: "button", className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block w-full text-left px-4 py-2 text-sm`, onClick: handleSignOut }, "Sign out"))))))));
};
exports.default = ProProUserButton;
