const moles = document.querySelectorAll(".mole");
const scoreboard = document.querySelector("#scoreboard");
const timer = document.querySelector("#timer");
const gameBoard = document.querySelector("#game-board");
let currentMole;
let score = 0;
let timeLeft = 30;
let moleIntervalId;
let timerId;
let timeoutId;

function randomPosition(mole) {
  const x = Math.floor(Math.random() * (gameBoard.clientWidth - mole.clientWidth));
  const y = Math.floor(Math.random() * (gameBoard.clientHeight - mole.clientHeight));
  mole.style.left = `${x}px`;
  mole.style.top = `${y}px`;
}

// Randomly select a mole and make it visible
function showMole() {
  if (timeLeft > 0) {
    const mole = moles[Math.floor(Math.random() * moles.length)];
    mole.style.visibility = "visible";
    randomPosition(mole);
    currentMole = mole;
  }
}

// Hide the current mole
function hideMole() {
  if(currentMole.style.visibility === "visible") {
    currentMole.style.visibility = "hidden";
    currentMole = null;
    clearTimeout(timeoutId);
  }
}

// Increase the score and hide the mole when clicked
function hitMole() {
  score++;
  updateScoreboard();
  timeoutId = setTimeout(hideMole, 500);
}

// Update the scoreboard
function updateScoreboard() {
  scoreboard.innerHTML = `Score: ${score}`;
}

// Start the game
function startGame() {
  moleIntervalId = setInterval(showMole, 2000);
  timerId = setInterval(updateTimer, 1000);
}

// Update the timer
function updateTimer() {
  timer.innerHTML = `Time Left: ${timeLeft}`;
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    endGame();
  }
}

// End the game and show the score
function endGame() {
  clearInterval(moleIntervalId);
  clearInterval(timerId);
  alert(`Game over! Your score is ${score}`);
}

moles.forEach(mole => mole.addEventListener("click", hitMole));
startGame();
