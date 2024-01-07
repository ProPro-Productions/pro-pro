# Helpers

# 1. Custom Logging Functions Documentation

## Overview

This document provides detailed information on custom logging functions designed for JavaScript applications. These functions enhance the standard `console.log` and `console.table` functionalities with additional features like emoji support and improved formatting for objects.

## Functions

### 1. `logAsTable`

#### Description

Logs the properties of an object as a table, allowing for optional emoji decorations. If the property is an object, it logs the object above the table and references it in the table.

#### Syntax

```javascript
logAsTable(`variableObj`: Record<string, any>, emojis?: string[] | string): void
```

#### Parameters

- `variableObj`: An object containing the properties to log.
- `emojis`: (Optional) An array or comma-separated string of emojis to prepend to the property names.

#### Behavior

- If `variableObj` is not an object, or emojis is not an array or string, an error is logged.
- For properties that are objects, the object is logged separately, and the table contains a placeholder text.

#### Example

```javascript
const variableA = "Hello";
const variableB = 42;
const variableC = true;

logAsTable({ variableA, variableB, variableC }); // Without emojis
logAsTable({ variableA, variableB, variableC }, ["👋", "🤷‍♂️"]); // With emoji array
logAsTable({ variableA, variableB, variableC }, "👋, 🤷‍♂️"); // With emoji string
```

More Docs: [logAsTable](obsidian://open?vault=ProPro%20Productions&file=HubHub%20Documentation%2FGuides%20%F0%9F%97%BA%EF%B8%8F%2FTools%2FCustom%20Logging%20Functions%20for%20the%20client)
