let cells = document.querySelectorAll(".cell");
let restartBtn = document.getElementById("restartBtn");
let mainDiv = document.querySelector(".container");
let currentPlayer = "X";
let isGameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

let winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

cells.forEach(function(cell, index) {
  cell.addEventListener("click", function() {
    if (isGameActive && cell.textContent === "") {
      cell.textContent = currentPlayer;
      board[index] = currentPlayer;

      if (currentPlayer === "X") {
        cell.classList.add("filled-x");
      }

      if (currentPlayer === "O") {
        cell.classList.add("filled-o");
      }

      checkWins();

      if (isGameActive === true) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWins() {
  winningCombo.forEach(function(combo) {
    let a = combo[0];
    let b = combo[1];
    let c = combo[2];

    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      isGameActive = false;
      gameOverMessage(`${currentPlayer} Wins`);
    }
  });

  if (!board.includes("") && isGameActive) {
    isGameActive = false;
    gameOverMessage("Game is Draw");
  }
}

function gameOverMessage(text) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("message");

  let innerDiv = document.createElement("div");
  innerDiv.style.display = "flex";
  innerDiv.style.flexDirection = "column";
  innerDiv.style.alignItems = "center";
  innerDiv.style.gap = "20px";

  let messageText = document.createElement("div");
  messageText.textContent = text;

  restartBtn.textContent = "Restart Game";

  innerDiv.appendChild(messageText);
  innerDiv.appendChild(restartBtn);
  newDiv.appendChild(innerDiv);
  mainDiv.appendChild(newDiv);
}

restartBtn.addEventListener("click", function() {
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  currentPlayer = "X";

  cells.forEach(function(cell) {
    cell.textContent = "";
    cell.classList.remove("filled-x", "filled-o");
  });

  let message = document.querySelector(".message");
  if (message) {
    message.remove();
  }
});
