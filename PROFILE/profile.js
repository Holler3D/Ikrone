// Mock data for user
const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    totalEarnings: 1000.50,
    transactions: [
        { type: "Deposit", amount: 500, date: "2023-01-15" },
        { type: "Withdrawal", amount: 100, date: "2023-01-20" },
        { type: "Deposit", amount: 300, date: "2023-02-01" }
    ]
};

// Load profile data on page load
document.addEventListener("DOMContentLoaded", function() {
    loadUserProfile();
    loadTransactions();
});

function loadUserProfile() {
    const userInfoDiv = document.getElementById("user-info");
    userInfoDiv.innerHTML}