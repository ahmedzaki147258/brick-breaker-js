import { lives } from "./lives.js";

export let live = 3;
export function Dead() {
  if (live === 1) {
    alert("Game Over");
    live = 3;

    // Remove all event listeners
    document.removeEventListener("mousemove", null);
    const canvas = document.getElementById("myCanvas");
    if (canvas) {
      canvas.removeEventListener("mousedown", null);
      canvas.remove();
    }

    // Remove lives container and hearts
    const livesContainer = document.querySelector(".lives-container");
    if (livesContainer) {
      // First remove all hearts
      const hearts = document.querySelectorAll(".heart");
      hearts.forEach((heart) => heart.remove());

      // Then remove the container itself
      livesContainer.innerHTML = ""; // Clear contents
      livesContainer.remove(); // Remove the container
    }

    // Show difficulty selection modal
    const container = document.getElementById("started");
    container.innerHTML = `
            <h2>Choose Game Difficulty</h2>
            <button class="dif" data-difficulty="easy">Easy</button>
            <button class="dif" data-difficulty="medium">Medium</button>
            <button class="dif" data-difficulty="hard">Hard</button>
            <button id="startGame">Start Game</button>
        `;

    const difficultyButtons = document.querySelectorAll(".dif");
    let selectedDifficulty = "easy";

    difficultyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectedDifficulty = button.getAttribute("data-difficulty");
      });
    });

    document.getElementById("startGame").addEventListener("click", async () => {
      container.innerHTML = ""; // Clear container

      // Import and execute in sequence
      const difficultyModule = await import("./setDiffculty.js");
      difficultyModule.setDifficulty(selectedDifficulty);

      const pageModule = await import("./startedPage.js");
      pageModule.startPage();

      const startModule = await import("./start.js");
      startModule.start();
    });
  } else {
    --live;
    lives(live);
  }
}
