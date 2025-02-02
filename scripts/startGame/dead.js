import { lives } from "./lives.js";
import { startPage } from "./startedPage.js";
import { endGame } from "./end.js";
import { gameResult } from "./Score.js";

export let live = 3

export function Dead() {

    if (live == 0) {
        startPage();
        endGame()
        gameResult();
    }
    live--
    lives(live);
}

