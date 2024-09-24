// Reusable function to toggle visibility between two sections
function showSection(showId, hideId) {
    document.getElementById(showId).classList.remove('hidden');
    document.getElementById(hideId).classList.add('hidden');
}

// Reusable function to get input value
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

// Reusable function to get total balance from the DOM
function getTotalBalance() {
    return parseFloat(document.getElementById('total-balance').innerText);
}

