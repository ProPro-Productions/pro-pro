import React from "react";
import { useAuth } from "./AuthContext";

interface ProProUserButtonProps {
  afterSignOutUrl?: string;
}

const ProProUserButton: React.FC<ProProUserButtonProps> = ({
  afterSignOutUrl = "/",
}) => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    window.location.href = afterSignOutUrl;
  };

  return (
    <button onClick={handleSignOut} className="sign-out-button">
      Sign Out {user?.name}
    </button>
  );
};

export default ProProUserButton;
