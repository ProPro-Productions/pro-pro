"use strict";
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
class AuthApi {
    constructor() {
        this.baseUrl = "/api/v1/auth";
    }
    // Helper function to perform the API call
    request(endpoint, method, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            };
            const response = yield fetch(`${this.baseUrl}${endpoint}`, {
                method,
                headers,
                body: body ? JSON.stringify(body) : undefined,
            });
            const data = yield response.json();
            if (!response.ok) {
                throw new Error(data.message || "An error occurred during the API request");
            }
            return data;
        });
    }
    // Sign in
    signIn(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.request("/login", "POST", { email, password });
            return data.user;
        });
    }
    // Sign out
    signOut() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.request("/logout", "POST");
        });
    }
    // Sign up
    signUp(email, password, otherParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.request("/signup", "POST", Object.assign({ email,
                password }, otherParams));
            return data.user;
        });
    }
    // Forgot password
    forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.request("/forgot-password", "POST", { email });
        });
    }
    // Refresh Tokens
    refreshTokens(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.request("/refresh-tokens", "POST", {
                refreshToken,
            });
            return data;
        });
    }
    // Verify Email
    verifyEmail(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.request("/verify-email", "POST", { token });
        });
    }
    // Check Email
    checkEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.request("/check-email", "GET", { email });
            return data.exists;
        });
    }
    // Check Username
    checkUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.request("/check-username", "GET", { username });
            return data.exists;
        });
    }
}
const authApi = new AuthApi();
exports.default = authApi;
