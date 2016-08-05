var correctAnswer = 0;
var emptySlots = document.querySelectorAll('#word-line .word');

function lineHandleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
}

function lineHandleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('right');
}

function lineHandleDrop(e) {
    if (correctAnswer < words.length) {
        // Append new  text to line
        emptySlots[correctAnswer].innerHTML = e.dataTransfer.getData('text/html');
        emptySlots[correctAnswer].classList.remove('disappear');
        // dragElement is a word and makes it disappeared
        dragElement.classList.add('disappear');
        dragElement = null;
        // 
        correctAnswer++;
    }
    
    if (correctAnswer == words.length) {
        // If the phrase is complete show result modal
        pressButton(stop);
        // get clock data
        timer.stop();
        // 
        displaySaveModal(timer.time());
    }
}

var line = document.getElementById('word-line');
line.addEventListener('dragenter', lineHandleDragEnter, false);
line.addEventListener('dragover', lineHandleDragOver, false);
line.addEventListener('drop', lineHandleDrop, false);

function resetLine() {
    [].forEach.call(emptySlots, function (slot) {
        slot.innerHTML = null;
        slot.classList.add('disappear');
    });
}