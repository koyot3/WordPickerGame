// Get the modal
var saveGameModal = document.getElementById('saveGameModal');

// When the user clicks the button, open the modal
function displaySaveModal() {
    saveGameModal.style.display = "block";
}

function hideSaveModal() {
    saveGameModal.style.display = "none";
}
// Click save button
//saveGameModal.onclick = function () {
//    startGame();
//}

var restartGameBtn = document.getElementById('restartGame');
// click retry
restartGameBtn.onclick = function () {
    startGame();
}