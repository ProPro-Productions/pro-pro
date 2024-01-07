import React from "react";
import { User } from "./interface/User.interface";

interface AccountManagementPopupProps {
  user: User;
  onClose: () => void;
}

const AccountManagementPopup: React.FC<AccountManagementPopupProps> = ({
  user,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="relative p-8 bg-white w-full max-w-2xl m-auto flex-col flex rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-600"
        >
          <span className="text-2xl">&times;</span>
        </button>

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Account</h2>
          <p className="text-sm text-gray-600">
            Manage your account information
          </p>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-semibold">Profile</h3>
          <div className="flex items-center space-x-4 my-2">
            <img
              src={user?.avatar ?? "default-avatar.png"}
              alt="User Avatar"
              className="h-16 w-16 rounded-full"
            />
            <div>
              <p className="font-semibold">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.username}</p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-semibold">Connected accounts</h3>
          <div className="flex items-center space-x-4 my-2">
            <span className="text-2xl">🐙</span>
            <div>
              <p className="font-semibold">{user?.username}</p>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                Connect account
              </button>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-lg font-semibold">Security</h3>
          <p className="text-sm text-gray-600 mb-2">
            Manage your security preferences
          </p>
          <div className="flex items-center space-x-4 my-2">
            <span className="text-2xl">💻</span>
            <div>
              <p className="font-semibold">Active devices</p>
              <p className="text-sm text-gray-500">
                Macintosh - Chrome - Today at 3:04 PM
              </p>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm">
                See all devices
              </button>
            </div>
          </div>
        </div>

        <div className="text-right mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountManagementPopup;
