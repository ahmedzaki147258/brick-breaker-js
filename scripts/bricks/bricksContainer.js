import { Brick } from "./brick.js";
export class BricksContainer {
  static BRICK_WIDTH = 70;
  static BRICK_HEIGHT = 40;
  static PADDING = 5;
  static OFFSET_X = 35;
  static OFFSET_Y = 20;

  constructor(difficulty = "medium") {
    this.difficultySettings = {
      easy: { rows: 3, cols: 10, pattern: "sparse", lifeDropRate: 0.4 },
      medium: {
        rows: 5,
        cols: 10,
        pattern: "vertical",
        lifeDropRate: 0.3,
      },
      hard: { rows: 7, cols: 10, pattern: "zegzag", lifeDropRate: 0.2 },
    };

    this.setDifficulty(difficulty);
    this.generateBricks();
  }

  setDifficulty(difficulty) {
    const settings =
      this.difficultySettings[difficulty] || this.difficultySettings.medium;
    this.rows = settings.rows;
    this.cols = settings.cols;
    this.pattern = settings.pattern;
    this.lifeDropRate = settings.lifeDropRate;
  }

  generateBricks() {
    this.bricks = [];
    this.brickPaths = new Map();

    for (let row = 0; row < this.rows; row++) {
      const brickRow = [];
      for (let col = 0; col < this.cols; col++) {
        let isBreakable = this.shouldBeBreakable(row, col);

        const x =
          col * (BricksContainer.BRICK_WIDTH + BricksContainer.PADDING) +
          BricksContainer.OFFSET_X;
        const y =
          row * (BricksContainer.BRICK_HEIGHT + BricksContainer.PADDING) +
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

    this.createPath2DObjects();
  }

  shouldBeBreakable(row, col) {
    if (row === this.rows - 1) return true;

    switch (this.pattern) {
      case "sparse":
        return row !== 0 || col % 4 !== 0;

      case "vertical":
        return col % 3 !== 0;

      case "zegzag":
        return (row + col) % (this.rows > 6 ? 3 : 4) !== 0;

      default:
        return true;
    }
  }

  createPath2DObjects() {
    this.bricks.forEach((row, rowIndex) => {
      row.forEach((brick, colIndex) => {
        const path = new Path2D();
        path.roundRect(
          brick.x,
          brick.y,
          BricksContainer.BRICK_WIDTH,
          BricksContainer.BRICK_HEIGHT,
          8 // Border radius value
        );
        this.brickPaths.set(`${rowIndex}-${colIndex}`, path);
      });
    });
  }

  getBrickColor(brick, ctx) {
    const gradient = ctx.createLinearGradient(
      brick.x,
      brick.y,
      brick.x + brick.width,
      brick.y + brick.height
    );

    if (!brick.isBreakable) {
      gradient.addColorStop(0, "rgba(123, 31, 162, 0.95)");
      gradient.addColorStop(0.5, "rgba(103, 58, 183, 0.95)");
      gradient.addColorStop(1, "rgba(81, 45, 168, 0.95)");
    } else if (brick.lives === 2) {
      gradient.addColorStop(0, "rgba(0, 150, 136, 0.9)");
      gradient.addColorStop(0.5, "rgba(0, 121, 107, 0.9)");
      gradient.addColorStop(1, "rgba(0, 105, 92, 0.9)");
    } else {
      gradient.addColorStop(0, "rgba(255, 112, 67, 0.9)");
      gradient.addColorStop(0.5, "rgba(255, 87, 34, 0.9)");
      gradient.addColorStop(1, "rgba(230, 74, 25, 0.9)");
    }

    return gradient;
  }

  draw(ctx) {
    this.bricks.forEach((row, rowIndex) => {
      row.forEach((brick, colIndex) => {
        if (brick.visible) {
          ctx.fillStyle = this.getBrickColor(brick, ctx);
          ctx.fill(this.brickPaths.get(`${rowIndex}-${colIndex}`));
        }
      });
    });
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
    const closestX = Math.max(brick.x, Math.min(ball.x, brick.x + brick.width));
    const closestY = Math.max(
      brick.y,
      Math.min(ball.y, brick.y + brick.height)
    );
    const dx = ball.x - closestX;
    const dy = ball.y - closestY;
    return dx * dx + dy * dy < ball.radius * ball.radius;
  }

  handleCollision(ball, brick) {
    brick.hit(this.lifeDropRate);

    const closestX = Math.max(brick.x, Math.min(ball.x, brick.x + brick.width));
    const closestY = Math.max(
      brick.y,
      Math.min(ball.y, brick.y + brick.height)
    );
    const dx = ball.x - closestX;
    const dy = ball.y - closestY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) return;

    const nx = dx / distance;
    const ny = dy / distance;
    const absNX = Math.abs(nx);
    const absNY = Math.abs(ny);

    if (absNX > absNY) {
      ball.speedX *= -1;
      ball.x +=
        nx > 0
          ? brick.x + brick.width + ball.radius - ball.x
          : brick.x - ball.radius - ball.x;
    } else {
      ball.speedY *= -1;
      ball.y +=
        ny > 0
          ? brick.y + brick.height + ball.radius - ball.y
          : brick.y - ball.radius - ball.y;
    }
  }

  areAllBricksBroken() {
    for (let row of this.bricks) {
      for (let brick of row) {
        if (brick.visible && brick.isBreakable) {
          return false;
        }
      }
    }
    return true;
  }

  reset() {
    this.generateBricks();
  }
}
