"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.logAsTableB = exports.logAsTable = void 0;
function logAsTable(variableObj, emojis) {
    if (typeof variableObj !== "object" ||
        (emojis && !Array.isArray(emojis) && typeof emojis !== "string")) {
        console.error("First argument should be an object and the second, if provided, should be an array or a string.");
        return;
    }
    // Convert the comma-separated string into an array if necessary
    if (typeof emojis === "string") {
        emojis = emojis.split(",").map((emoji) => emoji.trim());
    }
    let tableData = {};
    let variableNames = Object.keys(variableObj);
    for (let i = 0; i < variableNames.length; i++) {
        let key = `${emojis && emojis[i] ? emojis[i] : ""} ${variableNames[i]}`;
        // If the value is an object, log it separately and use a placeholder in the table
        if (typeof variableObj[variableNames[i]] === "object") {
            console.log(`${key} Object:`, variableObj[variableNames[i]]);
            tableData[key] = "[Object Logged Above]";
        }
        else {
            tableData[key] = variableObj[variableNames[i]];
        }
    }
    // Log the data as a table
    console.table(tableData);
}
exports.logAsTable = logAsTable;
function logAsTableB(variableObj, emojis) {
    if (typeof variableObj !== "object" ||
        (emojis && !Array.isArray(emojis) && typeof emojis !== "string")) {
        console.error("First argument should be an object and the second, if provided, should be an array or a string.");
        return;
    }
    // Convert the comma-separated string into an array if necessary
    if (typeof emojis === "string") {
        emojis = emojis.split(",").map((emoji) => emoji.trim());
    }
    let tableData = {};
    let variableNames = Object.keys(variableObj);
    for (let i = 0; i < variableNames.length; i++) {
        let key = `${emojis && emojis[i] ? emojis[i] : ""} ${variableNames[i]}`;
        // Convert non-primitive values to formatted string representations
        if (typeof variableObj[variableNames[i]] === "object") {
            tableData[key] = JSON.stringify(variableObj[variableNames[i]], null, 2);
        }
        else {
            tableData[key] = variableObj[variableNames[i]];
        }
    }
    // Log the data as a table
    console.table(tableData);
}
exports.logAsTableB = logAsTableB;
function log(variableObj, emojis) {
    if (typeof variableObj !== "object" ||
        (emojis && !Array.isArray(emojis) && typeof emojis !== "string")) {
        console.error("First argument should be an object and the second, if provided, should be an array or a string.");
        return;
    }
    // Convert the comma-separated string into an array if necessary
    if (typeof emojis === "string") {
        emojis = emojis.split(",").map((emoji) => emoji.trim());
    }
    let logArgs = [];
    let variableNames = Object.keys(variableObj);
    let variableValues = Object.values(variableObj);
    for (let i = 0; i < variableNames.length; i++) {
        // Add the emoji if it exists
        if (emojis && emojis[i]) {
            logArgs.push(emojis[i]);
        }
        // Add the variable name
        logArgs.push(variableNames[i]);
        // Add the actual variable value
        logArgs.push(variableValues[i]);
    }
    // Log the prepared arguments
    console.log(...logArgs);
}
exports.log = log;
