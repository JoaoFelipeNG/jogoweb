const startBtn = document.getElementById("start-btn");
const targetBtn = document.getElementById("target-btn");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const resultSection = document.getElementById("result-section");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-game");
const gameContainer = document.getElementById("game-container");
const startContainer = document.getElementById("start-container");

let score = 0;
let timeLeft = 10;
let gameInterval;
let targetInterval;

function moveButton() {
    const container = document.getElementById("game-container");
    const maxX = container.offsetWidth - targetBtn.offsetWidth;
    const maxY = container.offsetHeight - targetBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    targetBtn.style.left = randomX + "px";
    targetBtn.style.top = randomY + "px";
}

function startGame() {
    startContainer.classList.add("d-none");
    gameContainer.classList.remove("d-none");

    gameInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            clearInterval(targetInterval);
            endGame();
        }
    }, 1000);

    targetInterval = setInterval(moveButton, 1000);
}

targetBtn.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveButton();
});

function endGame() {
    finalScore.textContent = `Você fez ${score} pontos!`;
    resultSection.classList.remove("d-none");
}

restartButton.addEventListener("click", () => {
    location.reload();
});

startBtn.addEventListener("click", startGame);
