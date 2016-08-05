// Get the modal
var saveGameModal = document.getElementById('saveGameModal');

// When the user clicks the button, open the modal
function displaySaveModal(record) {
    alert(record);
    saveGameModal.style.display = "block";
}

function hideSaveModal() {
    saveGameModal.style.display = "none";
}

var restartGameBtn = document.getElementById('restartGame');
// click retry
restartGameBtn.onclick = function () {
    startGame();
}

// Get the modal
var saveGameBtn = document.getElementById('saveGameBtn');

saveGameBtn.onclick = function () {
    var newRank = { player: 'Hoang', timeRange: timer.time(), playedTime: '2016-08-04' }
    var httpRequest = new HttpClient();
    httpRequest.post(newRank, '/api/game/savegame?player=hoang&timeRange=' + timer.time() + '&playedTime=2016-08-04', function (response) {
        console.log(response);
    });

}