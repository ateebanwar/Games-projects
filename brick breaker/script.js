// // let canvas = document.getElementById("gameCanvas");
// // let ctx = canvas.getContext("2d");

// // let startBtn = document.getElementById("startBtn");
// // let scoreDisplay = document.getElementById("score");
// // let livesDisplay = document.getElementById("lives");

// // let ballX = canvas.width / 2;
// // let ballY = canvas.height - 30;
// // let ballDX = 10;
// // let ballDY = -10;
// // let ballRadius = 10;

// // let paddleHeight = 15;
// // let paddleWidth = 150;
// // let paddleX = (canvas.width - paddleWidth) / 2;

// // let rightPressed = false;
// // let leftPressed = false;

// // let brickRowCount = 5;
// // let brickColumnCount = 10;
// // let brickWidth = 100;
// // let brickHeight = 30;
// // let brickPadding = 10;
// // let brickOffsetTop = 50;
// // let brickOffsetLeft = 60;

// // let score = 0;
// // let lives = 3;
// // let isGameRunning = false;

// // let brickColors = ["#ff4e50", "#f9d423", "#24fe41", "#4286f4", "#d94cff"];

// // let bricks = [];

// // for (let c = 0; c < brickColumnCount; c++) {
// //   bricks[c] = [];
// //   for (let r = 0; r < brickRowCount; r++) {
// //     bricks[c][r] = { x: 0, y: 0, status: 1, color: brickColors[r] };
// //   }
// // }

// // document.addEventListener("keydown", function (e) {
// //   if (e.key === "Right" || e.key === "ArrowRight") {
// //     rightPressed = true;
// //   } else if (e.key === "Left" || e.key === "ArrowLeft") {
// //     leftPressed = true;
// //   }
// // });

// // document.addEventListener("keyup", function (e) {
// //   if (e.key === "Right" || e.key === "ArrowRight") {
// //     rightPressed = false;
// //   } else if (e.key === "Left" || e.key === "ArrowLeft") {
// //     leftPressed = false;
// //   }
// // });

// // startBtn.addEventListener("click", function () {
// //   if (!isGameRunning) {
// //     isGameRunning = true;
// //     draw();
// //   }
// // });

// // function drawBall() {
// //   ctx.beginPath();
// //   ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
// //   ctx.fillStyle = "#f9d423";
// //   ctx.fill();
// //   ctx.closePath();
// // }

// // function drawPaddle() {
// //   ctx.beginPath();
// //   ctx.rect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
// //   ctx.fillStyle = "#ff4e50";
// //   ctx.fill();
// //   ctx.closePath();
// // }

// // function drawBricks() {
// //   for (let c = 0; c < brickColumnCount; c++) {
// //     for (let r = 0; r < brickRowCount; r++) {
// //       if (bricks[c][r].status === 1) {
// //         let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
// //         let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
// //         bricks[c][r].x = brickX;
// //         bricks[c][r].y = brickY;
// //         ctx.beginPath();
// //         ctx.rect(brickX, brickY, brickWidth, brickHeight);
// //         ctx.fillStyle = bricks[c][r].color;
// //         ctx.fill();
// //         ctx.closePath();
// //       }
// //     }
// //   }
// // }

// // function collision() {
// //   for (let c = 0; c < brickColumnCount; c++) {
// //     for (let r = 0; r < brickRowCount; r++) {
// //       let b = bricks[c][r];
// //       if (b.status === 1) {
// //         if (
// //           ballX + ballRadius > b.x &&
// //           ballX - ballRadius < b.x + brickWidth &&
// //           ballY + ballRadius > b.y &&
// //           ballY - ballRadius < b.y + brickHeight
// //           )
// //         {
// //           ballDY = -ballDY;
// //           b.status = 0;
// //           score++;
// //           scoreDisplay.textContent = score;
// //           if (score === brickRowCount * brickColumnCount) {
// //             alert("You Win!");
// //             document.location.reload();
// //           }
// //         }
// //       }
// //     }
// //   }
// // }

// // function draw() {
// //   if (!isGameRunning) return;

// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   drawBricks();
// //   drawBall();
// //   drawPaddle();
// //   collision();

// //   if (ballX + ballDX > canvas.width - ballRadius || ballX + ballDX < ballRadius) {
// //     ballDX = -ballDX;
// //   }

// //   if (ballY + ballDY < ballRadius) {
// //     ballDY = -ballDY;
// //   } else if (ballY + ballDY > canvas.height - ballRadius) {
// //     let paddleTop = canvas.height - paddleHeight - 10;
// //     if (ballX > paddleX && ballX < paddleX + paddleWidth && ballY + ballRadius >= paddleTop) {
// //       ballDY = -ballDY;
// //     } else {
// //       lives--;
// //       livesDisplay.textContent = lives;
// //       if (lives === 0) {
// //         alert("Game Over");
// //         document.location.reload();
// //       } else {
// //         ballX = canvas.width / 2;
// //         ballY = canvas.height - 30;
// //         ballDX = 4;
// //         ballDY = -4;
// //         paddleX = (canvas.width - paddleWidth) / 2;
// //       }
// //     }
// //   }

// //   if (rightPressed && paddleX < canvas.width - paddleWidth) {
// //     paddleX += 14;
// //   } else if (leftPressed && paddleX > 0) {
// //     paddleX -= 14;
// //   }

// //   ballX += ballDX;
// //   ballY += ballDY;

// //   requestAnimationFrame(draw);
// // }


// let canvas = document.getElementById("gameCanvas");
// let ctx = canvas.getContext("2d");

// let startBtn = document.getElementById("startBtn");
// let scoreDisplay = document.getElementById("score");
// let livesDisplay = document.getElementById("lives");

// let ballX = canvas.width / 2;
// let ballY = canvas.height - 30;
// let ballDX = 10;
// let ballDY = -10;
// let ballRadius = 10;

// let paddleHeight = 15;
// let paddleWidth = 150;
// let paddleX = (canvas.width - paddleWidth) / 2;

// let rightPressed = false;
// let leftPressed = false;

// let brickRowCount = 5;
// let brickColumnCount = 10;
// let brickWidth = 100;
// let brickHeight = 30;
// let brickPadding = 10;
// let brickOffsetTop = 50;
// let brickOffsetLeft = 60;

// let score = 0;
// let lives = 3;
// let isGameRunning = false;

// let brickColors = ["#ff4e50", "#f9d423", "#24fe41", "#4286f4", "#d94cff"];

// let bricks = [];

// for (let c = 0; c < brickColumnCount; c++) {
//   bricks[c] = [];
//   for (let r = 0; r < brickRowCount; r++) {
//     bricks[c][r] = { x: 0, y: 0, status: 1, color: brickColors[r] };
//   }
// }

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Right" || e.key === "ArrowRight") {
//     rightPressed = true;
//   } else if (e.key === "Left" || e.key === "ArrowLeft") {
//     leftPressed = true;
//   }
// });

// document.addEventListener("keyup", function (e) {
//   if (e.key === "Right" || e.key === "ArrowRight") {
//     rightPressed = false;
//   } else if (e.key === "Left" || e.key === "ArrowLeft") {
//     leftPressed = false;
//   }
// });

// startBtn.addEventListener("click", function () {
//   if (!isGameRunning) {
//     isGameRunning = true;
//     draw();
//   }
// });

// function drawBall() {
//   ctx.beginPath();
//   ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
//   ctx.fillStyle = "#f9d423";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawPaddle() {
//   ctx.beginPath();
//   ctx.rect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
//   ctx.fillStyle = "#ff4e50";
//   ctx.fill();
//   ctx.closePath();
// }

// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c++) {
//     for (let r = 0; r < brickRowCount; r++) {
//       if (bricks[c][r].status === 1) {
//         let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
//         let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         ctx.fillStyle = bricks[c][r].color;
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }

// function collision() {
//   for (let c = 0; c < brickColumnCount; c++) {
//     for (let r = 0; r < brickRowCount; r++) {
//       let b = bricks[c][r];
//       if (b.status === 1) {
//         if (
//           ballX + ballRadius > b.x &&
//           ballX - ballRadius < b.x + brickWidth &&
//           ballY + ballRadius > b.y &&
//           ballY - ballRadius < b.y + brickHeight
//         ) {
//           ballDY = -ballDY;
//           b.status = 0;
//           score++;
//           scoreDisplay.textContent = score;
//           if (score === brickRowCount * brickColumnCount) {
//             alert("You Win!");
//             document.location.reload();
//           }
//         }
//       }
//     }
//   }
// }

// function draw() {
//   if (!isGameRunning) return;

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawBricks();
//   drawBall();
//   drawPaddle();
//   collision();

//   if (ballX + ballDX > canvas.width - ballRadius || ballX + ballDX < ballRadius) {
//     ballDX = -ballDX;
//   }

//   if (ballY + ballDY < ballRadius) {
//     ballDY = -ballDY;
//   } else if (ballY + ballRadius + ballDY > canvas.height - paddleHeight - 10) {
//     let paddleTopY = canvas.height - paddleHeight - 10;
//     if (ballX > paddleX && ballX < paddleX + paddleWidth) {
//       if (ballY + ballRadius <= paddleTopY) {
//         ballDY = -ballDY;
//         ballY = paddleTopY - ballRadius;
//       } else {
//         lives--;
//         livesDisplay.textContent = lives;
//         if (lives === 0) {
//           alert("Game Over");
//           document.location.reload();
//         } else {
//           ballX = canvas.width / 2;
//           ballY = canvas.height - 30;
//           ballDX = 4;
//           ballDY = -4;
//           paddleX = (canvas.width - paddleWidth) / 2;
//         }
//       }
//     } else {
//       lives--;
//       livesDisplay.textContent = lives;
//       if (lives === 0) {
//         alert("Game Over");
//         document.location.reload();
//       } else {
//         ballX = canvas.width / 2;
//         ballY = canvas.height - 30;
//         ballDX = 4;
//         ballDY = -4;
//         paddleX = (canvas.width - paddleWidth) / 2;
//       }
//     }
//   }

//   if (rightPressed && paddleX < canvas.width - paddleWidth) {
//     paddleX += 14;
//   } else if (leftPressed && paddleX > 0) {
//     paddleX -= 14;
//   }

//   ballX += ballDX;
//   ballY += ballDY;

//   requestAnimationFrame(draw);
// }

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let startBtn = document.getElementById("startBtn");
let scoreDisplay = document.getElementById("score");
let livesDisplay = document.getElementById("lives");
let timerDisplay = document.getElementById("timer"); // Add an element for the timer

let ballX = canvas.width / 2;
let ballY = canvas.height - 30;
let ballDX = 10;
let ballDY = -10;
let initialBallSpeed = Math.abs(ballDX); // Store initial speed for reference
let ballRadius = 10;

let paddleHeight = 15;
let paddleWidth = 150;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

let brickRowCount = 5;
let brickColumnCount = 10;
let brickWidth = 100;
let brickHeight = 30;
let brickPadding = 10;
let brickOffsetTop = 50;
let brickOffsetLeft = 60;

let score = 0;
let lives = 3;
let isGameRunning = false;
let gameStartTime; // To store the time when the game started
let speedIncreased = false; // Flag to ensure speed increases only once

let brickColors = ["#ff4e50", "#f9d423", "#24fe41", "#4286f4", "#d94cff"];

let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1, color: brickColors[r] };
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
});

startBtn.addEventListener("click", function () {
  if (!isGameRunning) {
    isGameRunning = true;
    gameStartTime = Date.now(); // Record the start time
    draw();
  }
});

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#f9d423";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
  ctx.fillStyle = "#ff4e50";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = bricks[c][r].color;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collision() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status === 1) {
        if (
          ballX + ballRadius > b.x &&
          ballX - ballRadius < b.x + brickWidth &&
          ballY + ballRadius > b.y &&
          ballY - ballRadius < b.y + brickHeight
        ) {
          ballDY = -ballDY;
          b.status = 0;
          score++;
          scoreDisplay.textContent = score;
          if (score === brickRowCount * brickColumnCount) {
            alert("You Win!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function draw() {
  if (!isGameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collision();

  // Timer logic
  let currentTime = Date.now();
  let elapsedTime = (currentTime - gameStartTime) / 1000; // in seconds
  if (timerDisplay) { // Update timer display if the element exists
      timerDisplay.textContent = Math.floor(elapsedTime);
  }


  if (elapsedTime >= 15 && !speedIncreased) {
    ballDX *= 1.5; // Increase horizontal speed by 50%
    ballDY *= 1.5; // Increase vertical speed by 50%
    speedIncreased = true; // Set flag to true so it only increases once
    console.log("Ball speed increased!"); // For debugging
  }

  if (ballX + ballDX > canvas.width - ballRadius || ballX + ballDX < ballRadius) {
    ballDX = -ballDX;
  }

  if (ballY + ballDY < ballRadius) {
    ballDY = -ballDY;
  } else if (ballY + ballRadius + ballDY > canvas.height - paddleHeight - 10) {
    let paddleTopY = canvas.height - paddleHeight - 10;
    if (ballX > paddleX && ballX < paddleX + paddleWidth) {
      if (ballY + ballRadius <= paddleTopY) {
        ballDY = -ballDY;
        ballY = paddleTopY - ballRadius;
      } else {
        lives--;
        livesDisplay.textContent = lives;
        if (lives === 0) {
          alert("Game Over");
          document.location.reload();
        } else {
          ballX = canvas.width / 2;
          ballY = canvas.height - 30;
          // When resetting, use initial speed for a fresh start, or current increased speed
          ballDX = (ballDX > 0 ? 1 : -1) * initialBallSpeed; // Reset to initial speed direction
          ballDY = -initialBallSpeed;
          paddleX = (canvas.width - paddleWidth) / 2;
          speedIncreased = false; // Reset speed increase flag for the next life
          gameStartTime = Date.now(); // Reset timer for the new life
        }
      }
    } else {
      lives--;
      livesDisplay.textContent = lives;
      if (lives === 0) {
        alert("Game Over");
        document.location.reload();
      } else {
        ballX = canvas.width / 2;
        ballY = canvas.height - 30;
        // When resetting, use initial speed for a fresh start, or current increased speed
        ballDX = (ballDX > 0 ? 1 : -1) * initialBallSpeed; // Reset to initial speed direction
        ballDY = -initialBallSpeed;
        paddleX = (canvas.width - paddleWidth) / 2;
        speedIncreased = false; // Reset speed increase flag for the next life
        gameStartTime = Date.now(); // Reset timer for the new life
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 14;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 14;
  }

  ballX += ballDX;
  ballY += ballDY;

  requestAnimationFrame(draw);
}