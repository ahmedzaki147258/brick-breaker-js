import { start } from "./scripts/startGame/start.js";
import { setDifficulty } from "./scripts/startGame/setDiffculty.js";
import { startPage } from "./scripts/startGame/startedPage.js";
import { BricksContainer } from "./scripts/bricks/bricksContainer.js";

let selectedDifficulty = "easy";
const difficultyButtons = document.querySelectorAll(".dif");

// difficultyButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         selectedDifficulty = button.getAttribute("data-difficulty");
//         console.log("Selected difficulty:", selectedDifficulty);
//     });
// });

// Add this to your play.js
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
  const bricks = new BricksContainer(selectedDifficulty);
  startPage();
  start(bricks);
});
