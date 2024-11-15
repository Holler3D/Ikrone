// Initial values
let tapCount = 0;
let currentBalance = 5230.50; // Starting balance

// Get the elements
const tappingBot = document.getElementById('tapping-bot');
const tapCountDisplay = document.getElementById('tap-count');
const currentBalanceDisplay = document.getElementById('current-balance');

// Function to handle tapping on the bot
tappingBot.addEventListener('click', () => {
    // Increment tap count and balance
    tapCount += 1;
    currentBalance += 1.00; // Each tap adds $1.00 to the current balance
    
    // Update the display
    tapCountDisplay.textContent = tapCount;
    currentBalanceDisplay.textContent = '$${currentBalance.toFixed(2)}';
});