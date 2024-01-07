import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useAuth } from "./AuthContext";
import AccountManagementPopup from "./AccountManagementPopup";
import { User } from "../interface/User.interface";

interface ProProUserButtonProps {
  afterSignOutUrl?: string;
}

const ProProUserButton: React.FC<ProProUserButtonProps> = ({
  afterSignOutUrl = "/",
}) => {
  const { user, signOut } = useAuth();
  const [showAccountPopup, setShowAccountPopup] = useState(false);

  // Sign out handler
  const handleSignOut = () => {
    signOut();
    window.location.href = afterSignOutUrl;
  };

  // Toggle account popup visibility
  const toggleAccountPopup = () => {
    setShowAccountPopup((prev) => !prev);
  };

  // Close account popup
  const closeAccountPopup = () => {
    setShowAccountPopup(false);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <Menu as="div">
          <Menu.Button className="flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <img
              src={user?.avatar ?? "default-avatar.png"}
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm w-full text-left`}
                    onClick={toggleAccountPopup}
                  >
                    Manage account
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm w-full text-left`}
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {showAccountPopup && (
        <AccountManagementPopup
          user={user as User}
          onClose={closeAccountPopup}
        />
      )}
    </>
  );
};

export default ProProUserButton;
