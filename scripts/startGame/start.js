import { animate } from "./animate.js";
import { lives } from "./lives.js";
import { live } from "./dead.js";
import { initPaddle } from "./paddle.js";

export function start(bricks) {
    // Initialize lives display
    lives(live);
    
    // Initialize canvas and paddle
    const canvas = document.getElementById("myCanvas");
    if (canvas) {
        initPaddle(canvas);
    }
    
    // Start the game animation loop
    animate(bricks);
}
