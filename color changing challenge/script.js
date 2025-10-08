let timeLeft = 10;
let score = 0;

let TimeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");
let colorBox = document.getElementById("colorBox");

const restartBtn = document.getElementById("restartBtn");
const gameOverMessage = document.getElementById("gameOverMessage");

let gameInterval = setInterval(function () {
  timeLeft -= 1;
  TimeDisplay.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(gameInterval);
    colorBox.style.pointerEvents = "none";


    gameOverMessage.style.display = "block";
    restartBtn.style.display = "inline-block";
  }
}, 1000);

colorBox.addEventListener("click", function () {
  score += 1;
  scoreDisplay.textContent = score;

  let randomLeft = Math.floor(Math.random() * 300);
  let randomTop = Math.floor(Math.random() * 300);

  colorBox.style.left = randomLeft + "px";
  colorBox.style.top = randomTop + "px";

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

restartBtn.addEventListener("click", function () {
  clearInterval(gameInterval); 

  timeLeft = 10;
  score = 0;
  TimeDisplay.textContent = timeLeft;
  scoreDisplay.textContent = score;
  gameOverMessage.style.display = "none";
  restartBtn.style.display = "none";
  colorBox.style.pointerEvents = "auto";

  colorBox.style.left = "100px";
  colorBox.style.top = "100px";
  colorBox.style.backgroundColor = "red";

  gameInterval = setInterval(function () {
    timeLeft -= 1;
    TimeDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      colorBox.style.pointerEvents = "none";
      gameOverMessage.style.display = "block";
      restartBtn.style.display = "inline-block";
    }
  }, 1000);
});
