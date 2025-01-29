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

export function movePaddle(event, canvas) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    
    paddle.x = mouseX - paddle.width / 2;
    
    if (paddle.x < 0) {
        paddle.x = 0;
    } else if (paddle.x + paddle.width > canvas.width) {
        paddle.x = canvas.width - paddle.width;
    }
}
