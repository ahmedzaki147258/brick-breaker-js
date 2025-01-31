import { start } from "./scripts/startGame/start.js";
import { setDifficulty } from "./scripts/startGame/setDiffculty.js";
import { startPage } from "./scripts/startGame/startedPage.js";
import { BricksContainer } from "./scripts/bricks/bricksContainer.js";

let selectedDifficulty = "easy";
const difficultyButtons = document.querySelectorAll(".dif");

difficultyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedDifficulty = button.getAttribute("data-difficulty");
        console.log("Selected difficulty:", selectedDifficulty);
    });
});

document.getElementById("startGame").addEventListener("click", () => {
    setDifficulty(selectedDifficulty);
    const bricks = new BricksContainer(selectedDifficulty);
    startPage();
    start(bricks);
});
