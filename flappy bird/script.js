let gameArea = document.querySelector(".game-container");
let bird = document.querySelector(".bird");
let startButton = document.querySelector(".start-btn");
let scoreBox = document.querySelector(".score");
let jumpSound = new Audio("jump.mp3");
let hitSound = new Audio("hit.mp3");
let dieSound = new Audio("die.mp3");

let birdPositionY = 300;
let birdSpeed = 0;
let gravity = 0.3;
let allPipes = [];
let gameOn = false;
let pipeIntervalId;
let animationFrameId;
let score = 0;

startButton.addEventListener("click", function () {
  gameOn = true;
  startButton.style.display = "none";
  birdPositionY = 300;
  birdSpeed = 0;
  score = 0;
  scoreBox.textContent = "Score: 0";
  bird.style.top = birdPositionY + "px";
  for (let i = 0; i < allPipes.length; i++) {
    allPipes[i].remove();
  }
  allPipes = [];
  pipeIntervalId = setInterval(function () {
    let gap = 190;
    let pipeTopHeight = Math.floor(Math.random() * 200) + 50;
    let pipeBottomHeight = 800 - pipeTopHeight - gap;
    let pipeTop = document.createElement("div");
    pipeTop.classList.add("pipe", "top-pipe");
    pipeTop.style.height = pipeTopHeight + "px";
    pipeTop.style.left = "600px";
    pipeTop.style.top = "0px";

    let pipeBottom = document.createElement("div");
    pipeBottom.classList.add("pipe", "bottom-pipe");
    pipeBottom.style.height = pipeBottomHeight + "px";
    pipeBottom.style.left = "600px";
    pipeBottom.style.bottom = "0px";

    gameArea.appendChild(pipeTop);
    gameArea.appendChild(pipeBottom);
    allPipes.push(pipeTop);
    allPipes.push(pipeBottom);
  }, 2000);

  function updateGame() {
    birdSpeed = birdSpeed + gravity;
    birdPositionY = birdPositionY + birdSpeed;
    bird.style.top = birdPositionY + "px";

    if (birdPositionY > 730 || birdPositionY < 0) {
      dieSound.play();
      gameOn = false;
      clearInterval(pipeIntervalId);
      cancelAnimationFrame(animationFrameId);
      startButton.style.display = "block";
      return;
    }

    for (let i = 0; i < allPipes.length; i++) {
      let pipe = allPipes[i];
      let currentLeft = parseInt(pipe.style.left);
      let newLeft = currentLeft - 2;
      pipe.style.left = newLeft + "px";

      let birdRect = bird.getBoundingClientRect();
      let pipeRect = pipe.getBoundingClientRect();

      if (
        birdRect.left < pipeRect.right &&
        birdRect.right > pipeRect.left &&
        birdRect.top < pipeRect.bottom &&
        birdRect.bottom > pipeRect.top
      ) {
        hitSound.play();
        gameOn = false;
        clearInterval(pipeIntervalId);
        cancelAnimationFrame(animationFrameId);
        startButton.style.display = "block";
        return;
      }

      if (
        pipe.classList.contains("top-pipe") &&
        !pipe.scored &&
        pipe.getBoundingClientRect().right < bird.getBoundingClientRect().left
      ) {
        score++;
        scoreBox.textContent = "Score: " + score;
        pipe.scored = true;
      }

      if (newLeft + pipe.offsetWidth < 0) {
        pipe.remove();
        allPipes.splice(i, 1);
        i = i - 1;
      }
    }

    animationFrameId = requestAnimationFrame(updateGame);
  }

  animationFrameId = requestAnimationFrame(updateGame);
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && gameOn === true) {
    birdSpeed = -6;
    jumpSound.play();
  }
});

document.addEventListener("click", function (event) {
    birdSpeed = -6;
});
