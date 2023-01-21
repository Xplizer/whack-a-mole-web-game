const moles = document.querySelectorAll(".mole");
let currentMole;
let score = 0;
let timeLeft = 30;
let moleIntervalId;
let timerId;

// Randomly select a mole and make it visible
function showMole() {
  const mole = moles[Math.floor(Math.random() * moles.length)];
  mole.style.visibility = "visible";
  currentMole = mole;
}

// Hide the current mole
function hideMole() {
  currentMole.style.visibility = "hidden";
}

// Increase the score and hide the mole when clicked
function hitMole() {
  score++;
  hideMole();
}

// Start the game
function startGame() {
  showMole();
  setTimeout(hideMole, 1000);
  moleIntervalId = setInterval(showMole, 2000);
  timerId = setInterval(updateTimer, 1000);
}

// Update the timer
function updateTimer() {
  timeLeft--;
  if (timeLeft === 0) {
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

