var correctAnswer = 0;
var emptySlots = document.querySelectorAll('#word-line .word');

// handler for drag something and hover over line
function lineHandleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    if (correctAnswer < words.length && isValidWord(dragElement, e)) {
        e.currentTarget.classList.add('correct-word');
    }

    return false;
}

// handler for drag something and drop into line
function lineHandleDragEnter(e) {
    this.classList.add('right');
}

function lineHandleDrop(e) {
    // Remove correct state first 
    e.currentTarget.classList.remove('correct-word');
    if (correctAnswer < words.length && isValidWord(dragElement, e)) {
        // Append new  text to line
        e.currentTarget.innerHTML = e.dataTransfer.getData('text/html');
        // dragElement is a word and makes it disappeared
        dragElement.classList.add('disappear');
        dragElement = null;
        // 
        correctAnswer++;
    }
    
    if (correctAnswer == words.length) {
        // Stop the clock
        pressButton(stop);
        // Get clock data
        timer.stop();
        // Display save model
        displaySaveModal(timer.time());
    }
}

// Check is valid word drag into line?
function isValidWord(dragElement, emptySlot) {
    var result = false;
    if (dragElement.getAttribute("data-order") == emptySlot.currentTarget.getAttribute("data-order")) {
        result = true
    }
    return result;
}

var line = document.getElementById('word-line');
//line.addEventListener('dragenter', lineHandleDragEnter, false);
//line.addEventListener('dragover', lineHandleDragOver, false);
//line.addEventListener('drop', lineHandleDrop, false);
function initDragEvent() {
    [].forEach.call(emptySlots, function (slot) {
        slot.addEventListener('dragenter', lineHandleDragEnter, false);
        slot.addEventListener('dragover', lineHandleDragOver, false);
        slot.addEventListener('drop', lineHandleDrop, false);
    });
}
initDragEvent();

function resetLine() {
    [].forEach.call(emptySlots, function (slot) {
        slot.innerHTML = null;
        //slot.classList.add('disappear');
    });
}