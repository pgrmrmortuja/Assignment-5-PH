//Reusable function to handle donations for each card
function handleDonation(cardBalanceId, inputId, donationBtnId, cardName) {
    document.getElementById(donationBtnId).addEventListener('click', function() {
        const donationAmount = getInputValue(inputId);
        const totalBalance = getTotalBalance();
        const cardBalance = parseFloat(document.getElementById(cardBalanceId).innerText);

        // Input validation
        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount');
            return;
        }

        if (donationAmount > totalBalance) {
            alert('You do not have enough balance for this donation');
            return;
        }

        document.getElementById('no-donation').classList.add('hidden');
        // Update balance and card donation amount
        const newTotalBalance = totalBalance - donationAmount;
        setTotalBalance(newTotalBalance);

        const newCardBalance = cardBalance + donationAmount;
        document.getElementById(cardBalanceId).innerText = newCardBalance;

        // Add transaction to history
        addTransactionToHistory(donationAmount, cardName);

        // Show success modal
        showSuccessModal();
    });
}


// Function to set new total balance
function setTotalBalance(newBalance) {
    document.getElementById('total-balance').innerText = newBalance;
}

// Call the donation function for each card
handleDonation('card-balance1', 'dontion-input1', 'donate-btn1', 'Flood at Noakhali Issue');
handleDonation('card-balance2', 'dontion-input2', 'donate-btn2', 'Flood at Feni Issue');
handleDonation('card-balance3', 'dontion-input3', 'donate-btn3', 'Quota Movement Issue');

