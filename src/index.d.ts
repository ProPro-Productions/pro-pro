import { ObjectId } from "mongodb";

type UserStatus = "active" | "suspended" | "deactivated" | "locked";
type TwoFactorMethod = "sms" | "email" | "totp";

export interface User {
  id: ObjectId;
  accountId: string;
  name: string;
  hasEmail: boolean;
  username?: string;
  lockUntil?: Date;
  is2FAEnabled: boolean;
  twoFactorMethod: TwoFactorMethod;
  twoFactorPhone?: string;
  twoFactorEmail?: string;
  status: UserStatus;
  preferences: {
    theme: "light" | "dark";
  };
  email?: string;
  isEmailVerified: boolean;
  bio?: string;
  avatar?: string;
  birthdate?: Date;
}

export interface ProProUserButtonProps {
  afterSignOutUrl?: string;
}

export class AuthApi {
  signIn(email: string, password: string): Promise<User>;
  signOut(): Promise<void>;
}

export function useAuth(): AuthContextType;
export function withAuth<T>(
  Component: React.ComponentType<T>
): React.ComponentType<T>;

export const AuthProvider: React.ComponentType<{ children: React.ReactNode }>;

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

declare module "propro-components" {
  export {
    ProProUserButton,
    AuthProvider,
    useAuth,
    withAuth,
    AuthApi as proproAuth,
  };
}
