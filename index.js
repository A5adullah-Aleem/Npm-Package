// userModule.js

function fetchUserData(userId, callback) {
    console.log(`Fetching user data for user ID: ${userId}`);
    setTimeout(function () {
        const userData = {
            userId: userId,
            username: "john_doe",
            email: "john@example.com"
        };
        callback(null, userData);
    }, 2000);
}

function processUserData(error, userData) {
    if (error) {
        console.error("Error fetching user data:", error);
    } else {
        console.log("User data retrieved successfully:", userData);
    }
}

// Export the functions
module.exports = {
    fetchUserData,
    processUserData
};
