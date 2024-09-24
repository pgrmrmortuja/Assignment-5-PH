// Toggle display between Donation and History sections
document.getElementById('historyBtn').addEventListener('click', function() {
    showSection('historyData', 'donationData');
    toggleActiveButton('historyBtn', 'donationBtn'); // Toggle active button color
});

document.getElementById('donationBtn').addEventListener('click', function() {
    showSection('donationData', 'historyData');
    toggleActiveButton('donationBtn', 'historyBtn'); // Toggle active button color
});


// Function to toggle active button color
function toggleActiveButton(activeBtnId, inactiveBtnId) {
    const activeButton = document.getElementById(activeBtnId);
    const inactiveButton = document.getElementById(inactiveBtnId);

    // Add 'active' class to the clicked button and remove it from the other
    activeButton.classList.add('bg-[#B4F461]', 'text-black'); // Active state color
    inactiveButton.classList.remove('bg-[#B4F461]', 'text-black'); // Reset inactive state


}
