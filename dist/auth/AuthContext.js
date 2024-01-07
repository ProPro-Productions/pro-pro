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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.withAuth = exports.useAuth = void 0;
const react_1 = __importStar(require("react"));
const AuthContext = (0, react_1.createContext)(null);
const useAuth = () => {
    const context = (0, react_1.useContext)(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
exports.useAuth = useAuth;
function withAuth(Component) {
    return function WithAuth(props) {
        const authContext = (0, exports.useAuth)();
        // Pass the auth context as a prop to the wrapped component
        return react_1.default.createElement(Component, Object.assign({}, props, { proproAuth: authContext }));
    };
}
exports.withAuth = withAuth;
const AuthProvider = ({ children }) => {
    const [user, setUser] = (0, react_1.useState)(null);
    const [isLoading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        // Token validation logic or initial load
        // We can check local storage or make an API call to validate the current user's token
        setLoading(false);
    }, []);
    const signIn = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        // After successful sign-in, we need to update the user state
        setLoading(false);
    });
    const signOut = () => {
        // After successful sign-out, we need to clear the user state
        setUser(null);
    };
    const authContextValue = (0, react_1.useMemo)(() => {
        return { user, isAuthenticated: !!user, isLoading, signIn, signOut };
    }, [user, isLoading, signIn, signOut]);
    return (react_1.default.createElement(AuthContext.Provider, { value: authContextValue }, children));
};
exports.AuthProvider = AuthProvider;
