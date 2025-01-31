import { Brick } from "./brick";
export class BricksContainer {
    static BRICK_WIDTH = 70;
    static BRICK_HEIGHT = 40;
    static PADDING = 5;
    static OFFSET_X = 25;
    static OFFSET_Y = 30;

    constructor(difficulty = "medium") {
        this.difficultySettings = {
            easy: { rows: 4, cols: 8, unbreakableRatio: 0.1 },
            medium: { rows: 6, cols: 10, unbreakableRatio: 0.3 },
            hard: { rows: 8, cols: 12, unbreakableRatio: 0.5 },
        };

        this.setDifficulty(difficulty);
        this.generateBricks();
    }

    setDifficulty(difficulty) {
        const settings =
            this.difficultySettings[difficulty] ||
            this.difficultySettings.medium;
        this.rows = settings.rows;
        this.cols = settings.cols;
        this.unbreakableRatio = settings.unbreakableRatio;
    }

    generateBricks() {
        this.bricks = [];
        for (let row = 0; row < this.rows; row++) {
            const brickRow = [];
            for (let col = 0; col < this.cols; col++) {
                const isBreakable = Math.random() > this.unbreakableRatio;
                const x =
                    col *
                        (BricksContainer.BRICK_WIDTH +
                            BricksContainer.PADDING) +
                    BricksContainer.OFFSET_X;
                const y =
                    row *
                        (BricksContainer.BRICK_HEIGHT +
                            BricksContainer.PADDING) +
                    BricksContainer.OFFSET_Y;

                brickRow.push(
                    new Brick(
                        x,
                        y,
                        BricksContainer.BRICK_WIDTH,
                        BricksContainer.BRICK_HEIGHT,
                        isBreakable
                    )
                );
            }
            this.bricks.push(brickRow);
        }
    }

    draw(ctx) {
        this.bricks.forEach((row) => {
            row.forEach((brick) => {
                if (brick.visible) {
                    ctx.fillStyle = this.getBrickColor(brick);
                    ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
                }
            });
        });
    }

    getBrickColor(brick) {
        if (!brick.isBreakable) return "#ff4444";
        return brick.lives === 2 ? "#4CAF50" : "#FFEB3B";
    }

    checkCollision(ball) {
        for (const row of this.bricks) {
            for (const brick of row) {
                if (brick.visible && this.isColliding(ball, brick)) {
                    this.handleCollision(ball, brick);
                    return true;
                }
            }
        }
        return false;
    }

    isColliding(ball, brick) {
        return (
            ball.x + ball.radius > brick.x &&
            ball.x - ball.radius < brick.x + brick.width &&
            ball.y + ball.radius > brick.y &&
            ball.y - ball.radius < brick.y + brick.height
        );
    }

    handleCollision(ball, brick) {
        brick.hit();
        ball.speedY *= -1;
    }

    reset() {
        this.generateBricks();
    }
}
