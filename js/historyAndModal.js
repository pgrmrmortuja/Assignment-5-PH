// Function to add a transaction to the history section
function addTransactionToHistory(donationAmount, donationName) {
    const historyContainer = document.getElementById('historyData');
    const date = new Date();

    const history = document.createElement('div');
    const historyEntry = document.createElement('h2');
    historyEntry.classList.add('font-bold', 'text-lg');
    const time = document.createElement('p');

    historyEntry.innerText = `Donation: ${donationAmount} BDT for ${donationName}`;

    time.innerText = `Time: ${date}`;

    history.classList.add('border-2', 'w-full', 'md:w-[800px]', 'mx-auto', 'p-5','rounded-lg');

    history.appendChild(historyEntry);
    history.appendChild(time);
    historyContainer.appendChild(history);
}

// Function to show the success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');

    document.getElementById('closeModal').addEventListener('click', function() {
        modal.classList.add('hidden');
    });
}
