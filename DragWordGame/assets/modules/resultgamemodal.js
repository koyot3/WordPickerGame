// Saving Game Modal
var saveGameModal = document.getElementById('saveGameModal');

// Player Name
var playerField = document.getElementById('playerField');

// Pikachu sound
var pikachuHappySound = document.getElementById('pikachu-happy-sound');

// When the user finishes his/her game, the Result Modal displays
function displaySaveModal(record) {
    saveGameModal.style.display = "block";
}

// When the user finishes his/her game, the Result Modal displays
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

// Click Save
saveGameBtn.onclick = function () {
    if (playerField.value != '') {
        var newRank = { player: playerField.value, timeRange: timer.time(), playedTime: new Date().toString() }
        var httpRequest = new HttpClient();
        httpRequest.post(newRank, '/api/game/savegame?player=' + playerField.value + '&timeRange=' + timer.time() + '&playedTime=' + new Date().toJSON(), function (response) {
            var result = JSON.parse(response);
            if (result.MyRank != undefined) {
                // Save game successfully
                // 1. Hide Saving Modal
                hideSaveModal();
                // 2. Clear the form
                clearSavedGameForm();
                // 3. Display Start Game
                //displayModal();
                // 4. Alert the result 
                //alert('You are at Rank ' + result.MyRank.RankNo + '. Are you genius?\n' + populateTopTen(result.TopTenRanks));
                pikachuHappySound.play();
                displayRankModal(result);
            } else {
                // Oops there's something wrong
                alert('There\'s something wrong, let\'s have a one more round!');
            }
        });
    } else {
        alert('Everyone can\'t wait for knowing who you are!!!');
    }
}

function clearSavedGameForm() {
    playerField.value = "";
}

function populateTopTen(topTenRanks) {
    var result = '';
    var rankNo = 0;
    [].forEach.call(topTenRanks, function (rank) {
        result = result.concat(++rankNo, '. ', rank.Player, ' at ', rank.TimeRange, '\n');
    });
    return result;
}
