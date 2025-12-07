export const paddle = {
    width: 100,
    height: 10,
    x: 350,
    y: 550,
    color: "blue",
    speed: 8
};

export function initPaddle(canvas) {
    paddle.x = (canvas.width - paddle.width) / 2;
    paddle.y = canvas.height - 50;
}

