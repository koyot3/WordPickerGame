﻿var dragElement = null;

function handleDragStart(e) {
    dragElement = this;
    this.style.opacity = '0.4';  // this / e.target is the source node.

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
}

function handleDrop(e) {
    // this / e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

    // See the section on the DataTransfer object.

    return false;
}

function handleDragEnd(e) {
    // this/e.target is the source node.
    [].forEach.call(words, function (col) {
        col.classList.remove('over');
        col.style.opacity = '1';
    });
}

var words = document.querySelectorAll('#game-board .word');

[].forEach.call(words, function (word) {
    word.addEventListener('dragstart', handleDragStart, false);
    word.addEventListener('dragend', handleDragEnd, false);
});

function resetWords() {
    [].forEach.call(words, function (word) {
        word.classList.remove('disappear');
    });
    shuffleWords()
}

function shuffleWords() {
    // get the board
    var board = document.querySelector('#game-board');
    for (var i = board.children.length; i >= 0; i--) {
        // every loop I'm shuffling
        board.appendChild(board.children[Math.random() * i | 0]);
    }
    // Randomize words
    var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
    [].forEach.call(words, function (word) {
        word.classList.remove('disappear');
        word.style.removeProperty('position');
        var randomX = (Math.random() * w) + 'px';
        var randomY = (Math.random() * h) + 'px';
        word.style.top = randomY;
        word.style.right = randomX;
    });
}

// 
function showHintWords() {
    [].forEach.call(words, function (word) {
        word.style.position = 'initial';
    });
}