let diceNumber;

function rollDice() {
    diceNumber = Math.floor(Math.random() * 6) + 1;
    const dice = document.getElementById("dice");

    dice.classList.add("roll");

    setTimeout(() => {
        dice.textContent = diceNumber;
        dice.classList.remove("roll");
    }, 600);
}

function checkGuess() {
    const userGuess = document.getElementById("userInput").value;
    const result = document.getElementById("result");
    const tryAgainBtn = document.getElementById("tryAgain");

    if (userGuess < 1 || userGuess > 6) {
        result.textContent = "⚠ Enter number between 1 and 6";
        return;
    }

    rollDice();

    setTimeout(() => {
        if (userGuess == diceNumber) {
            result.textContent = "🎉 You Win!";
            tryAgainBtn.style.display = "none";
        } else {
            result.textContent = "❌ Wrong Guess!";
            tryAgainBtn.style.display = "inline";
        }
    }, 650);
}

function resetGame() {
    document.getElementById("dice").textContent = "?";
    document.getElementById("userInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("tryAgain").style.display = "none";
}
