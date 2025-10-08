let timeLeft = 20;
let score = 0;

let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");
let holes = document.querySelectorAll(".hole");
const restartBtn = document.getElementById("resetBtn");


let gameInterval = setInterval(function showRandomMoles() {
  timeLeft = timeLeft - 1;
  timeDisplay.textContent = timeLeft;
  restartBtn.style.display="none";
  let i = 0;
  while (i < holes.length) {
    holes[i].textContent = "";
    i = i + 1;
  }

  let randomIndex = Math.floor(Math.random() * holes.length);
  let selectHole = holes[randomIndex];
  selectHole.textContent = "🐭";

  if (timeLeft === 0) {
    clearInterval(gameInterval);
    timeDisplay.textContent = timeLeft;
    scoreDisplay.textContent = score;
    restartBtn.style.display = "inline-block";
  }
}, 500);


let j = 0;
while (j < holes.length) {
  let currentHole = holes[j];

  currentHole.addEventListener("click", function () {
    if (currentHole.textContent === "🐭") {
      score = score + 1;
      scoreDisplay.textContent = score;
      currentHole.textContent = "";
    }
  });

  j = j + 1;
}


restartBtn.addEventListener("click", function () {
  clearInterval(gameInterval);
  timeLeft = 20;
  score = 0;
  timeDisplay.textContent = timeLeft;
  scoreDisplay.textContent = score;
  restartBtn.style.display = "none";

  gameInterval = setInterval(function () {
    timeLeft = timeLeft - 1;
    timeDisplay.textContent = timeLeft;

    let i = 0;
    while (i < holes.length) {
      holes[i].textContent = "";
      i = i + 1;
    }

    let randomIndex = Math.floor(Math.random() * holes.length);
    let selectHole = holes[randomIndex];
    selectHole.textContent = "🐭";

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      restartBtn.style.display = "inline-block";
    }
  }, 500);
});
