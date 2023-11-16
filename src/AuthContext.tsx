import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { User } from "./interface/User.interface";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Token validation logic or initial load
    // We can check local storage or make an API call to validate the current user's token
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    // After successful sign-in, we need to update the user state
    setLoading(false);
  };

  const signOut = () => {
    // After successful sign-out, we need to clear the user state
    setUser(null);
  };

  const authContextValue = useMemo(() => {
    return { user, isAuthenticated: !!user, isLoading, signIn, signOut };
  }, [user, isLoading, signIn, signOut]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
