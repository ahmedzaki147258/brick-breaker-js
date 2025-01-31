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

    hit() {
        if (this.isBreakable && this.visible) {
            this.lives = Math.max(0, this.lives - 1);
            if (this.lives === 0) {
                this.visible = false;
            }
        }
    }
}
