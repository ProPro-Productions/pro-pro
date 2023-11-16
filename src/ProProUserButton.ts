import React from "react";

interface ProProUserButtonProps {
  afterSignOutUrl: string;
}

const ProProUserButton: React.FC<ProProUserButtonProps> = ({
  afterSignOutUrl,
}) => {
  const handleSignOut = () => {
    // TODO: Implement sign out
    window.location.href = afterSignOutUrl;
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default ProProUserButton;
