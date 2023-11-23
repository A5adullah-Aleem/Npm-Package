// main.js

// Import the module
const userModule = require('./index');

// Use the functions from the module
const userIdToFetch = 123;
userModule.fetchUserData(userIdToFetch, userModule.processUserData);

console.log("Request initiated. Waiting for response...");
