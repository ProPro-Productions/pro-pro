# pro-pro

ProPro is a comprehensive suite of reusable React components and authentication hooks, tailored for seamless integration with a custom authentication system. It provides a consistent user interface and authentication logic across various parts of your application, such as HubHub, MapMap, ProPro-Admin, StreamBreak, StampStamp, and others.

## Features

- `ProProUserButton`: A button component for handling user sign-in and sign-out actions.
- `proproAuth`: A collection of hooks and utilities for managing authentication state and logic.
- `AccountManagementPopup`: A component that provides a user interface for managing account details and security settings.

## Installation

Install `propro-components` with npm or yarn:

```bash
yarn add propro-components
# or
npm install propro-components

```

## Usage

Below are examples and descriptions of how to use the components and `hooks` provided by `propro-components`.

### `ProProUserButton`

`ProProUserButton` is a customizable button for user sign-in and sign-out. It can be used as a standalone component or as a child component of `ProProUserMenu`.

#### Props

| Name              | Type     | Default | Description                                      |
| ----------------- | -------- | ------- | ------------------------------------------------ |
| `afterSignOutUrl` | `string` | `null`  | The URL to redirect to after the user signs out. |

#### Example

```jsx
import React from "react";
import { ProProUserButton } from "propro-components";

import { ProProUserButton } from "propro-components";

const Header = ({ afterSignOutUrl }) => (
  <header>
    {/* ... our other header content ... */}
    <ProProUserButton afterSignOutUrl={afterSignOutUrl} />
  </header>
);

export default Header;
```

### `proproAuth`

`proproAuth` is a set of hooks and utilities to manage authentication state and logic.

#### `useAuth()`

`useAuth()` is a React hook that returns an object with the following properties:

| Name              | Type       | Description                               |
| ----------------- | ---------- | ----------------------------------------- |
| `user`            | `object`   | The user object returned by `proproAuth`. |
| `isAuthenticated` | `boolean`  | Whether the user is authenticated.        |
| `isLoading`       | `boolean`  | Whether the user is being loaded.         |
| `signIn`          | `function` | A function to sign in the user.           |
| `signOut`         | `function` | A function to sign out the user.          |
| `refreshUser`     | `function` | A function to refresh the user.           |

#### Example

```jsx
import React from "react";
import { useAuth } from "propro-components";

const Header = ({ afterSignOutUrl }) => {
  const { user, isAuthenticated, isLoading, signIn, signOut } = useAuth();

  return (
    <header>
      {/* ... our other header content ... */}
      {isAuthenticated ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
```

#### `withAuth()`

`withAuth()` is a higher-order component that injects the `proproAuth` object into a component's props.

#### Example

```jsx
import React from "react";
import { withAuth } from "propro-components";

const Header = ({ afterSignOutUrl, proproAuth }) => {
  const { user, isAuthenticated, isLoading, signIn, signOut } = proproAuth;

  return (
    <header>
      {/* ... our other header content ... */}
      {isAuthenticated ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </header>
  );
};

export default withProProAuth(Header);
```

### AccountManagementPopup

A component that displays a modal for users to manage their account and security settings.

#### Props

| Name      | Type       | Default | Description                                  |
| --------- | ---------- | ------- | -------------------------------------------- |
| `user`    | `object`   | `null`  | The user object returned by `proproAuth`.    |
| `onClose` | `function` | `null`  | A function to call when the modal is closed. |

#### Example

The `AccountManagementPopup` component can be used as a standalone component or as a child component of `ProProUserMenu`.

```jsx
import React from "react";
import { AccountManagementPopup } from "propro-components";

const Header = ({ afterSignOutUrl }) => {
  const { user, isAuthenticated, isLoading, signIn, signOut } = useAuth();
  const [showAccountManagement, setShowAccountManagement] = useState(false);

  return (
    <header>
      {/* ... our other header content ... */}
      {isAuthenticated ? (
        <>
          <button onClick={signOut}>Sign Out</button>
          <button onClick={() => setShowAccountManagement(true)}>
            Manage Account
          </button>
          {showAccountManagement && (
            <AccountManagementPopup
              user={user}
              onClose={() => setShowAccountManagement(false)}
            />
          )}
        </>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </header>
  );
};
```
