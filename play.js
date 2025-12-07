import { start } from "./scripts/startGame/start.js";
import { setDifficulty } from "./scripts/startGame/setDiffculty.js";
import { startPage } from "./scripts/startGame/startedPage.js";
import { BricksContainer } from "./scripts/bricks/bricksContainer.js";

let selectedDifficulty = "easy";
const difficultyButtons = document.querySelectorAll(".dif");

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove selected class from all buttons
    difficultyButtons.forEach((btn) => btn.classList.remove("selected"));
    // Add selected class to clicked button
    button.classList.add("selected");
    selectedDifficulty = button.getAttribute("data-difficulty");
  });
});

document.getElementById("startGame").addEventListener("click", () => {
  setDifficulty(selectedDifficulty);
  // Create canvas first by calling startPage
  startPage();
  // Now create bricks with canvas dimensions
  const bricks = new BricksContainer(selectedDifficulty);
  start(bricks);
});
