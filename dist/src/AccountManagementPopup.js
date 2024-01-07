"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AccountManagementPopup = ({ user, onClose, }) => {
    var _a;
    return (react_1.default.createElement("div", { className: "fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center" },
        react_1.default.createElement("div", { className: "relative p-8 bg-white w-full max-w-2xl m-auto flex-col flex rounded-lg shadow-lg" },
            react_1.default.createElement("button", { onClick: onClose, className: "absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600" },
                react_1.default.createElement("span", { className: "text-2xl" }, "\u00D7")),
            react_1.default.createElement("div", { className: "flex justify-between items-center" },
                react_1.default.createElement("h2", { className: "text-xl font-bold" }, "Account"),
                react_1.default.createElement("p", { className: "text-sm text-gray-600" }, "Manage your account information")),
            react_1.default.createElement("div", { className: "my-4" },
                react_1.default.createElement("h3", { className: "text-lg font-semibold" }, "Profile"),
                react_1.default.createElement("div", { className: "flex items-center space-x-4 my-2" },
                    react_1.default.createElement("img", { src: (_a = user === null || user === void 0 ? void 0 : user.avatar) !== null && _a !== void 0 ? _a : "default-avatar.png", alt: "User Avatar", className: "h-16 w-16 rounded-full" }),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("p", { className: "font-semibold" }, user === null || user === void 0 ? void 0 : user.name),
                        react_1.default.createElement("p", { className: "text-sm text-gray-500" }, user === null || user === void 0 ? void 0 : user.username)))),
            react_1.default.createElement("div", { className: "my-4" },
                react_1.default.createElement("h3", { className: "text-lg font-semibold" }, "Connected accounts"),
                react_1.default.createElement("div", { className: "flex items-center space-x-4 my-2" },
                    react_1.default.createElement("span", { className: "text-2xl" }, "\uD83D\uDC19"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("p", { className: "font-semibold" }, user === null || user === void 0 ? void 0 : user.username),
                        react_1.default.createElement("button", { className: "text-indigo-600 hover:text-indigo-800 text-sm" }, "Connect account")))),
            react_1.default.createElement("div", { className: "my-4" },
                react_1.default.createElement("h3", { className: "text-lg font-semibold" }, "Security"),
                react_1.default.createElement("p", { className: "text-sm text-gray-600 mb-2" }, "Manage your security preferences"),
                react_1.default.createElement("div", { className: "flex items-center space-x-4 my-2" },
                    react_1.default.createElement("span", { className: "text-2xl" }, "\uD83D\uDCBB"),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("p", { className: "font-semibold" }, "Active devices"),
                        react_1.default.createElement("p", { className: "text-sm text-gray-500" }, "Macintosh - Chrome - Today at 3:04 PM"),
                        react_1.default.createElement("button", { className: "text-indigo-600 hover:text-indigo-800 text-sm" }, "See all devices")))),
            react_1.default.createElement("div", { className: "text-right mt-6" },
                react_1.default.createElement("button", { onClick: onClose, className: "px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" }, "Close")))));
};
exports.default = AccountManagementPopup;
