import { dropLifeIcon } from "../startGame/lifeicon.js";

export class Brick {
    constructor(x, y, width, height, isBreakable) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isBreakable = isBreakable;
        this.lives = isBreakable ? 2 : Infinity;
        this.visible = true;
    }

    hit(lifeDropRate = 0.2) {
        if (this.isBreakable && this.visible) {
            setTimeout(() => {
                this.lives = Math.max(0, this.lives - 1);
                if (this.lives === 0) {
                    this.visible = false;
                    if (Math.random() < lifeDropRate) {
                        dropLifeIcon(this.x, this.y);
                    }
                }
            }, 1);
        }
    }
}
