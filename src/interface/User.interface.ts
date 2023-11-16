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
