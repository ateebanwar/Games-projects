let gameArea = document.getElementById("gameArea");
let missedDisplay = document.getElementById("missed");
let gameOverMessage = document.getElementById("gameOverMessage");
let restartBtn = document.getElementById("restartBtn");
let startBtn = document.getElementById("startBtn");
let speedSlider = document.getElementById("speedSlider");
let speedValue = document.getElementById("speedValue");

let missedCount = 0;
let maxMissed = 5;
let balloons = [];

let alphabetArray = [
  "a", "b", "c", "d", "e", "f", "g",
  "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z"
];

let speed = 2;


let popSound = new Audio("pop-sound.mp3");
let gameOverSound = new Audio("pop.mp3");
let backgroundSound = new Audio("background.mp3");
backgroundSound.loop = true; 

let spawnInterval;
let moveInterval;

speedSlider.addEventListener("input", function () {
  speed = Number(speedSlider.value);
  speedValue.textContent = speed;
});

function createBalloon() {
  let newBalloon = document.createElement("div");
  newBalloon.classList.add("balloon");

  let randomIndex = Math.floor(Math.random() * alphabetArray.length);
  let randomChar = alphabetArray[randomIndex];
  newBalloon.textContent = randomChar;

  let randomLeft = Math.floor(Math.random() * 1400);
  newBalloon.style.left = randomLeft + "px";

  gameArea.appendChild(newBalloon);

  let balloonObject = {
    element: newBalloon,
    char: randomChar,
    bottom: 0
  };

  balloons.push(balloonObject);
}

function moveBalloons() {
  let i = 0;
  while (i < balloons.length) {
    let b = balloons[i];
    b.bottom += speed;
    b.element.style.bottom = b.bottom + "px";

    if (b.bottom > 470) {
      gameArea.removeChild(b.element);
      balloons.splice(i, 1);
      missedCount++;
      missedDisplay.textContent = missedCount;

      if (missedCount >= maxMissed) {
        clearInterval(spawnInterval);
        clearInterval(moveInterval);
        gameOverMessage.style.display = "block";
        restartBtn.style.display = "inline-block";
        document.removeEventListener("keydown", keyHandler);

        gameOverSound.currentTime = 0;
        gameOverSound.play();

        backgroundSound.pause();
        backgroundSound.currentTime = 0;
      }
    } else {
      i++;
    }
  }
}

function keyHandler(e) {
  let keyPressed = e.key.toLowerCase();
  let i = 0;
  while (i < balloons.length) {
    if (balloons[i].char === keyPressed) {
      gameArea.removeChild(balloons[i].element);
      balloons.splice(i, 1);

      popSound.currentTime = 0;
      popSound.play();
      break;
    } else {
      i++;
    }
  }
}

function startGame() {
  missedCount = 0;
  missedDisplay.textContent = missedCount;
  gameOverMessage.style.display = "none";
  restartBtn.style.display = "none";
  startBtn.style.display = "none";

  let i = 0;
  while (i < balloons.length) {
    gameArea.removeChild(balloons[i].element);
    i++;
  }
  balloons = [];

  document.addEventListener("keydown", keyHandler);
  spawnInterval = setInterval(createBalloon, 1000);
  moveInterval = setInterval(moveBalloons, 50);

  backgroundSound.currentTime = 0;
  backgroundSound.play();
}

restartBtn.addEventListener("click", startGame);
startBtn.addEventListener("click", startGame);
