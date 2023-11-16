import { User } from "./interface/User.interface";

class AuthApi {
  baseUrl = "/api/v1/auth";

  // Helper function to perform the API call
  async request(endpoint: string, method: string, body?: any): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || "An error occurred during the API request"
      );
    }
    return data;
  }

  // Sign in
  async signIn(email: string, password: string): Promise<User> {
    const data = await this.request("/login", "POST", { email, password });
    return data.user;
  }

  // Sign out
  async signOut(): Promise<void> {
    await this.request("/logout", "POST");
  }

  // Sign up
  async signUp(
    email: string,
    password: string,
    otherParams: object
  ): Promise<User> {
    const data = await this.request("/signup", "POST", {
      email,
      password,
      ...otherParams,
    });
    return data.user;
  }

  // Forgot password
  async forgotPassword(email: string): Promise<void> {
    await this.request("/forgot-password", "POST", { email });
  }

  // Refresh Tokens
  async refreshTokens(
    refreshToken: string
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const data = await this.request("/refresh-tokens", "POST", {
      refreshToken,
    });
    return data;
  }

  // Verify Email
  async verifyEmail(token: string): Promise<void> {
    await this.request("/verify-email", "POST", { token });
  }

  // Check Email
  async checkEmail(email: string): Promise<boolean> {
    const data = await this.request("/check-email", "GET", { email });
    return data.exists;
  }

  // Check Username
  async checkUsername(username: string): Promise<boolean> {
    const data = await this.request("/check-username", "GET", { username });
    return data.exists;
  }
}

const authApi = new AuthApi();
export default authApi;
