// Toggle display between Donation and History sections
document.getElementById('historyBtn').addEventListener('click', function() {
    showSection('historyData', 'donationData');
});

document.getElementById('donationBtn').addEventListener('click', function() {
    showSection('donationData', 'historyData');
});

// Reusable function to toggle visibility between two sections
function showSection(showId, hideId, hideFoot) {
    document.getElementById(showId).classList.remove('hidden');
    document.getElementById(hideId).classList.add('hidden');
}
