import { User } from "./interface/User.interface";

class AuthApi {
  async signIn(email: string, password: string): Promise<User> {
    const response = await fetch("/api/v1/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to sign in");
    }
    return data.user;
  }

  async signOut(): Promise<void> {
    await fetch("/api/v1/auth/signout", { method: "POST" });
  }
}

const authApi = new AuthApi();
export default authApi;
