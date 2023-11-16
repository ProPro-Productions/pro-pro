import React, { useState } from "react";
import { useAuth } from "./AuthContext";

interface ProProUserButtonProps {
  afterSignOutUrl?: string;
}

const ProProUserButton: React.FC<ProProUserButtonProps> = ({
  afterSignOutUrl = "/",
}) => {
  const { user, signOut } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    signOut();
    window.location.href = afterSignOutUrl;
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="user-button-container">
      <button
        type="button"
        className="user-avatar-button"
        onClick={toggleMenu}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            toggleMenu();
          }
        }}
      >
        <img
          src={user?.avatar ?? "default-avatar.png"}
          alt="User Avatar"
          className="user-avatar"
        />
      </button>
      {showMenu && (
        <div className="user-menu-popup">
          <span className="username">{user?.username}</span>
          <span className="name">{user?.name}</span>
          <ul>
            <li>
              <button
                onClick={() => {
                  window.location.href = "/account";
                }}
              >
                Manage account
              </button>
            </li>
            <li>
              <button onClick={handleSignOut}>Sign out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProProUserButton;
