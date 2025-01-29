import { ball } from "./animate.js";

export function setDifficulty(level) {
    ball.moving = false;
    if (level === 'easy') {
        ball.speedX = 4;
        ball.speedY = 4;
    } else if (level === 'medium') {
        ball.speedX = 5;
        ball.speedY = 5;
    } else if (level === 'hard') {
        ball.speedX = 6;
        ball.speedY = 6;
    }
}
