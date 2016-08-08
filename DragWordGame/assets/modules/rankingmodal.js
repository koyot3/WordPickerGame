// Saving Game Modal
var rakingModal = document.getElementById('rakingModal');
// p tag containing Rank Info
var resultTag = document.getElementById('result');
// rows of Top Ten
var topTenRows = document.querySelectorAll('#rank-table tbody');
// Another
var restartGameRankBtn = document.getElementById('restart-game-ranking');

// click retry
restartGameRankBtn.onclick = function () {
    startGame();
}

// When the user finishes his/her game, the Result Modal displays
function displayRankModal(rankInfo) {
    rakingModal.style.display = "block";
    // Display your rank
    resultTag.innerHTML = 'You are at Rank ' + rankInfo.MyRank.RankNo + '. Are you genius?\n';
    // Populate rank data to table 
    populateDataToTables(rankInfo);
}

// When the user finishes his/her game, the Result Modal displays
function hideRankModal() {
    rakingModal.style.display = "none";
    resultTag.innerHTML = "";
    topTenRows[0].innerHTML = "";
}

// 
function populateDataToTables(rankInfo) {
    var i = 0;
    [].forEach.call(rankInfo.TopTenRanks, function (row) {

        var tr = document.createElement('TR');

        var tdRankNo = document.createElement('TD');
        tdRankNo.appendChild(document.createTextNode(++i));
        tr.appendChild(tdRankNo);

        var tdPlayer = document.createElement('TD');
        tdPlayer.appendChild(document.createTextNode(row.Player));
        tr.appendChild(tdPlayer)

        var tdAsAt = document.createElement('TD');
        tdAsAt.appendChild(document.createTextNode(Math.round(row.TimeRange * 0.001 * 1000) / 1000));
        tr.appendChild(tdAsAt)
        topTenRows[0].appendChild(tr);
    });
}