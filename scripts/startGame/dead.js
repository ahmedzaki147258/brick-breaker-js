import { lives } from "./lives.js";

export let live = 3

export function Dead() {

    if (live === 1) {
        alert("Game Over");
        
    }

    else {
        --live
        lives(live);
    }

}