// Get the modal
var startGameModal = document.getElementById('startGameModal');

// Get the button that opens the modal
var startGameBtn = document.getElementById("startGameBtn");
// When the user clicks the button, open the modal
function displayModal() {
    startGameModal.style.display = "block";
}

function hideModal() {
    startGameModal.style.display = "none";
}
// Game start
startGameBtn.onclick = function () {
    startGame();
}