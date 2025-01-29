import { Dead } from "./dead.js";

export var ball = {
    x: 600 / 2,
    y: 40,
    color: "red",
    radius: 20,
    speedX: 2,
    speedY: 2
}
export function animate() {
    const canvas = document.getElementById("myCanvas");
    const object = canvas.getContext("2d");
    object.clearRect(0, 0, canvas.width, canvas.height)
    object.beginPath();
    object.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    object.fillStyle = ball.color
    object.fill()
    object.closePath()

    ball.x += ball.speedX
    ball.y += ball.speedY

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.speedX = -ball.speedX;
    }
    if (ball.y - ball.radius < 0) {
        ball.speedY = -ball.speedY;
    }
    if (ball.y + ball.radius > canvas.height /* ومش لمست البادل */) {
        Dead()
        ball.x = 300;
        ball.y = 40;
    }
    requestAnimationFrame(animate);

}
