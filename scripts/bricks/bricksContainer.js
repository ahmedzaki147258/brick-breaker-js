import { Brick } from "./brick.js";
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
        this.brickPaths = new Map();
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
            this.bricks.forEach((row, rowIndex) => {
                row.forEach((brick, colIndex) => {
                    const path = new Path2D();
                    path.rect(brick.x, brick.y, brick.width, brick.height);
                    this.brickPaths.set(`${rowIndex}-${colIndex}`, path);
                });
            });
        }
    }

    draw(ctx) {
        this.bricks.forEach((row, rowIndex) => {
            row.forEach((brick, colIndex) => {
                if (brick.visible) {
                    ctx.fillStyle = this.getBrickColor(brick);
                    ctx.fill(this.brickPaths.get(`${rowIndex}-${colIndex}`));
                }
            });
        });
    }

    getBrickColor(brick) {
        if (!brick.isBreakable) return "#ff4444";
        return brick.lives === 2 ? "#4CAF50" : "#FFEB3B";
    }

    checkCollision(ball) {
        const gridX = Math.floor(
            (ball.x - BricksContainer.OFFSET_X) /
                (BricksContainer.BRICK_WIDTH + BricksContainer.PADDING)
        );
        const gridY = Math.floor(
            (ball.y - BricksContainer.OFFSET_Y) /
                (BricksContainer.BRICK_HEIGHT + BricksContainer.PADDING)
        );

        for (
            let y = Math.max(0, gridY - 1);
            y <= Math.min(this.rows - 1, gridY + 1);
            y++
        ) {
            for (
                let x = Math.max(0, gridX - 1);
                x <= Math.min(this.cols - 1, gridX + 1);
                x++
            ) {
                const brick = this.bricks[y][x];
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

        const overlapX = ball.x - brick.x - brick.width / 2;
        const overlapY = ball.y - brick.y - brick.height / 2;

        if (Math.abs(overlapX) > Math.abs(overlapY)) {
            ball.speedX *= -1;
        } else {
            ball.speedY *= -1;
        }
    }

    reset() {
        this.generateBricks();
    }
}
