# pro-pro

ProPro is a suite of reusable React components and authentication hooks, designed to integrate seamlessly with our custom authentication system. It provides a consistent UI and logic for user authentication across different parts of our application ( HubHub, MapMap, ProPro-Admin, StreamBreak, StampStamp, etc.).

## Features

- `ProProUserButton`: A customizable button for user sign-in and sign-out.
- `proproAuth`: A set of hooks and utilities to manage authentication state and logic.

## Installation

Install `propro-components` using yarn:

```bash
yarn add propro-components
```

```bash
npm install propro-components
```

## Usage

### `ProProUserButton`

`ProProUserButton` is a customizable button for user sign-in and sign-out. It can be used as a standalone component or as a child component of `ProProUserMenu`.

#### Props

| Name              | Type       | Default    | Description                                                              |
| ----------------- | ---------- | ---------- | ------------------------------------------------------------------------ |
| `className`       | `string`   | `''`       | Additional class name for the button.                                    |
| `onSignIn`        | `function` | `() => {}` | Callback function to be called when the user clicks the sign-in button.  |
| `onSignOut`       | `function` | `() => {}` | Callback function to be called when the user clicks the sign-out button. |
| `user`            | `object`   | `null`     | The user object returned by `proproAuth`.                                |
| `afterSignOutUrl` | `string`   | `null`     | The URL to redirect to after the user signs out.                         |

#### Example

```jsx
import React from "react";
import { ProProUserButton } from "propro";

import { ProProUserButton } from "propro";

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

#### `useProProAuth()`

`useProProAuth()` is a React hook that returns an object with the following properties:

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
import { useProProAuth } from "propro";

const Header = ({ afterSignOutUrl }) => {
  const { user, isAuthenticated, isLoading, signIn, signOut } = useProProAuth();

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

#### `withProProAuth()`

`withProProAuth()` is a higher-order component that injects the `proproAuth` object into a component's props.

#### Example

```jsx
import React from "react";
import { withProProAuth } from "propro";

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
