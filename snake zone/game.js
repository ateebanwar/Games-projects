const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 10;
let snake = [{ x: 100, y: 100 }];
let dx = boxSize;
let dy = 0;
let score = 0;

let food = {
  x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
  y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize
};

function drawSnake() {
  ctx.fillStyle = "red";
  snake.forEach(part => {
    ctx.fillRect(part.x, part.y, boxSize, boxSize);
  });
}

function drawFood() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

function snakeMove() {
  const Head = {
    x: snake[0].x + dx,
    y: snake[0].y + dy,
  };

restBtn.style.display = "none"; 
  snake.unshift(Head);

  console.log(`Head: ${Head.x},${Head.y} | Food: ${food.x},${food.y}`);

  if (Head.x === food.x && Head.y === food.y) {
    console.log("🍎 Food Eaten!");
    score++;
    food = {
      x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
      y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize
    };
  } else {
    snake.pop();
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snakeMove();
  const Head = snake[0];

  if (checkWallCollision(Head) || checkSelfCollision(Head)) {
    clearInterval(game);
      
restBtn.style.display = "block"; 
    // alert("Game Over!");
    return;
  }

  drawSnake();
  drawFood();
  drawScore();
}

const game = setInterval(update, 100);

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  const key = event.key;

  if (key === "ArrowUp" && dy === 0) {
    dx = 0;
    dy = -boxSize;
  } else if (key === "ArrowDown" && dy === 0) {
    dx = 0;
    dy = boxSize;
  } else if (key === "ArrowLeft" && dx === 0) {
    dx = -boxSize;
    dy = 0;
  } else if (key === "ArrowRight" && dx === 0) {
    dx = boxSize;
    dy = 0;
  }
}

function checkWallCollision(Head) {
  return (
    Head.x < 0 ||
    Head.y < 0 ||
    Head.x >= canvas.width ||
    Head.y >= canvas.height
  );
}

function checkSelfCollision(Head) {
  for (let i = 1; i < snake.length; i++) {
    if (Head.x === snake[i].x && Head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

const restBtn = document.getElementById("restartBtn");
restBtn.addEventListener("click", function () {
  snake = [{ x: 200, y: 200 }];
  dx = boxSize;
  dy = 0;

  score = 0;

  food = {
    x: Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize,
    y: Math.floor(Math.random() * (canvas.height / boxSize)) * boxSize
  };

  restartBtn.style.display = "none";

  game = setInterval(update, 100);
});


