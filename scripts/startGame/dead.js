import { lives } from "./lives.js";
import { startPage } from "./startedPage.js";
import { endGame } from "./end.js";
import { gameResult } from "./Score.js";

export let live = 3;

export function Dead() {
    live--;
    lives(live);
    
    if (live === 0) {
        // Don't call startPage() - keep the canvas visible
        // Just show the game over screen
        endGame();
        gameResult(false);
    }
}

export function revive() {
    if (live < 3) {
        live++;
        lives(live);
    }
}
