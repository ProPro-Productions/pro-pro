import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  ReactElement,
} from "react";
import { User } from "../interface/User.interface";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function withAuth<T>(Component: React.ComponentType<T>) {
  return function WithAuth(props: T): ReactElement {
    const authContext = useAuth();
    // Pass the auth context as a prop to the wrapped component
    return <Component {...props} proproAuth={authContext} />;
  };
}

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
