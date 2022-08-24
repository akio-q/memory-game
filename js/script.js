"use strict";

const moves = document.getElementById('moves-count'),
      timeValue = document.getElementById('time'),
      startButton = document.getElementById('start'),
      stopButton = document.getElementById('stop'),
      gameContainer = document.querySelector('.game-container'),
      result = document.getElementById('result'),
      controls = document.querySelector('.controls-container');

let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
    { name:'bee', image: '../img/bee.png' },
    { name: 'crocodile', image: '../img.crocodile.png' },
    { name: 'macaw', image: '../img.macaw.png' },
    { name: 'gorilla', image: '../img.gorilla.png' },
    { name: 'tiger', image: '../img.tiger.png' },
    { name: 'monkey', image: '../img.monkey.png' },
    { name: 'chameleon', image: '../img.chameleon.png' },
    { name: 'piranha', image: '../img.piranha.png' },
    { name: 'anaconda', image: '../img.anaconda.png' },
    { name: 'sloth', image: '../img.sloth.png' },
    { name: 'cockatoo', image: '../img.cockatoo.png' },
    { name: 'toucan', image: '../img.toucan.png' }
];

let seconds = 0,
    minutes = 0,
    movesCount = 0,
    winCount = 0;

const timeGenerator = () => {
    seconds += 1;

    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0{minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};