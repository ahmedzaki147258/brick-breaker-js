// Global variable to track if game is over
let gameOver = false;
let gameWon = false;

// Getter function to check game over state
export function isGameOver() {
    return gameOver || gameWon;
}

// Getter function to check if game is won
export function isGameWon() {
    return gameWon;
}

export function endGame() {
    gameOver = true;
    
    // Remove game-active class when game ends
    document.body.classList.remove("game-active");
    document.documentElement.classList.remove("game-active");
    
    // Create Game Over overlay
    const gameOverOverlay = document.createElement("div");
    gameOverOverlay.id = "game-over-overlay";
    gameOverOverlay.className = "game-over-overlay";
    
    // Create Game Over content
    const gameOverContent = document.createElement("div");
    gameOverContent.className = "game-over-content";
    
    // Game Over title
    const title = document.createElement("h1");
    title.className = "game-over-title";
    title.textContent = "Game Over";
    
    // Game Over subtitle
    const subtitle = document.createElement("p");
    subtitle.className = "game-over-subtitle";
    subtitle.textContent = "You ran out of lives!";
    
    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "game-over-buttons";
    
    // Play Again button
    const playAgainBtn = document.createElement("button");
    playAgainBtn.className = "game-over-btn play-again-btn";
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.onclick = function () {
        location.reload();
    };
    
    // Go Back button
    const goBackBtn = document.createElement("button");
    goBackBtn.className = "game-over-btn go-back-btn";
    goBackBtn.textContent = "Go Back";
    goBackBtn.onclick = function () {
        window.history.back();
    };
    
    // Assemble the overlay
    buttonContainer.appendChild(playAgainBtn);
    buttonContainer.appendChild(goBackBtn);
    gameOverContent.appendChild(title);
    gameOverContent.appendChild(subtitle);
    gameOverContent.appendChild(buttonContainer);
    gameOverOverlay.appendChild(gameOverContent);
    
    document.body.appendChild(gameOverOverlay);
    
    // Animate in
    setTimeout(() => {
        gameOverOverlay.classList.add("show");
    }, 10);
}

export function winGame() {
    gameWon = true;
    
    // Remove game-active class when game ends
    document.body.classList.remove("game-active");
    document.documentElement.classList.remove("game-active");
    
    // Create Win overlay
    const winOverlay = document.createElement("div");
    winOverlay.id = "win-overlay";
    winOverlay.className = "win-overlay";
    
    // Create Win content
    const winContent = document.createElement("div");
    winContent.className = "win-content";
    
    // Win title
    const title = document.createElement("h1");
    title.className = "win-title";
    title.textContent = "You Win!";
    
    // Win subtitle
    const subtitle = document.createElement("p");
    subtitle.className = "win-subtitle";
    subtitle.textContent = "Congratulations! You cleared all the bricks!";
    
    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "win-buttons";
    
    // Play Again button
    const playAgainBtn = document.createElement("button");
    playAgainBtn.className = "win-btn play-again-win-btn";
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.onclick = function () {
        location.reload();
    };
    
    // Go Back button
    const goBackBtn = document.createElement("button");
    goBackBtn.className = "win-btn go-back-win-btn";
    goBackBtn.textContent = "Go Back";
    goBackBtn.onclick = function () {
        window.history.back();
    };
    
    // Assemble the overlay
    buttonContainer.appendChild(playAgainBtn);
    buttonContainer.appendChild(goBackBtn);
    winContent.appendChild(title);
    winContent.appendChild(subtitle);
    winContent.appendChild(buttonContainer);
    winOverlay.appendChild(winContent);
    
    document.body.appendChild(winOverlay);
    
    // Animate in
    setTimeout(() => {
        winOverlay.classList.add("show");
    }, 10);
}