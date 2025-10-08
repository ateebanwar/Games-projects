let timeLeft = 15;
let score = 0;
let speed = 2;
let balloonY = 0;

let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");
let balloon = document.getElementById("balloon");
let restartBtn = document.getElementById("restartBtn");
let gameOverMessage = document.getElementById("gameOverMessage");

let gameInterval = setInterval(function () {
  timeLeft = timeLeft - 1;
  timeDisplay.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(gameInterval);
    clearInterval(moveInterval);
    balloon.style.pointerEvents = "none";
    gameOverMessage.style.display = "block";
    restartBtn.style.display = "inline-block";
  }
}, 1000);

let moveInterval = setInterval(function () {
  balloonY = balloonY + speed;
  balloon.style.bottom = balloonY + "px";

  if (balloonY > 600) {
    balloonY = 0;
    let randomLeft = Math.floor(Math.random() * 300);
    balloon.style.left = randomLeft + "px";
  }
}, 30);

balloon.addEventListener("click", function () {
  score = score + 1;
  scoreDisplay.textContent = score;
  balloonY = 0;
  speed = speed + 0.2;
  let randomLeft = Math.floor(Math.random() * 300);
  balloon.style.left = randomLeft + "px";
});

restartBtn.addEventListener("click", function () {
  clearInterval(gameInterval);
  clearInterval(moveInterval);

  timeLeft = 15;
  score = 0;
  speed = 2;
  balloonY = 0;

  timeDisplay.textContent = timeLeft;
  scoreDisplay.textContent = score;

  restartBtn.style.display = "none";
  gameOverMessage.style.display = "none";
  balloon.style.pointerEvents = "auto";

  gameInterval = setInterval(function () {
    timeLeft = timeLeft - 1;
    timeDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      clearInterval(moveInterval);
      balloon.style.pointerEvents = "none";
      gameOverMessage.style.display = "block";
      restartBtn.style.display = "inline-block";
    }
  }, 1000);

  moveInterval = setInterval(function () {
    balloonY = balloonY + speed;
    balloon.style.bottom = balloonY + "px";

    if (balloonY > 600) {
      balloonY = 0;
      let randomLeft = Math.floor(Math.random() * 300);
      balloon.style.left = randomLeft + "px";
    }
  }, 30);
});
