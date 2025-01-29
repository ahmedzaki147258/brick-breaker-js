
import { ball as balll } from "./inimate.js"

export function setDifficulty(level) {
    let difficulty = level;
    if (difficulty === 'easy') {
        balll.speedX = 1;
        balll.speedY = 1;
    } else if (difficulty === 'medium') {
        balll.speedX = 2;
        balll.speedY = 2;
    } else if (difficulty === 'hard') {
        balll.speedX = 3;
        balll.speedY = 3;
    }
}