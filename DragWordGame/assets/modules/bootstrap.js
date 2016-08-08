﻿displayModal();
showHintWords();
function startGame() {
    pressButton(reset);

    // fix reset issue
    setTimeout(function () {
        // reset initial data
        correctAnswer = 0;
        resetWords();
        resetLine();
        hideModal();
        hideSaveModal();
        hideRankModal();
        pressButton(start);
        resetClock();
    }, 100);
}