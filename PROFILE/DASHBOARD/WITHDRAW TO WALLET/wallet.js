document.getElementById("withdraw-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mock current balance
    const currentBalance = 5000; // Example balance
    const walletAddress = document.getElementById("wallet-address").value;
    const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
    const messageDiv = document.getElementById("message");

    // Clear previous message
    messageDiv.textContent = "";

    // Validate wallet address
    if (!walletAddress) {
        messageDiv.textContent = "Please enter a valid wallet address.";
        return;
    }

    // Validate withdraw amount
    if (withdrawAmount < 50 || withdrawAmount > 10000) {
        messageDiv.textContent = "Withdrawal amount must be between $50 and $10,000.";
        return;
    }

    // Check if the user has enough balance
    if (withdrawAmount > currentBalance) {
        messageDiv.textContent = "Insufficient balance for this withdrawal.";
        return;
    }

    // If all checks pass
    messageDiv.style.color = "green";
    messageDiv.textContent = 'Success! $${withdrawAmount.toFixed(2)} will be sent to wallet ${walletAddress}.';

    // Reset the form
    document.getElementById("withdraw-form").reset();
});