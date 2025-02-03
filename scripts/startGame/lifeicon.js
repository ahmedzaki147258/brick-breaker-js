import { revive } from "./dead.js";
export let score = 0;
export let lifeIcons = [];

// drop lifeicon
export function dropLifeIcon(x, y) {
    let lifeIcon = new LifeIcon(x, y);
    lifeIcons.push(lifeIcon);
}

export class LifeIcon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 2;
    }

    update() {
        this.y += this.speedY; // moveing icon to bootom
    }

    // sure the icon crush with paddle
    checkCollision(paddle) {
        if (
            paddle.x < this.x + 20 &&
            paddle.x + paddle.width > this.x &&
            paddle.y < this.y + 20 &&
            paddle.y + paddle.height > this.y
        ) {
            revive();
            lifeIcons = lifeIcons.filter((icon) => icon !== this);
        }
    }

    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}
