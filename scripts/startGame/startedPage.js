import { startBallMovement } from "./animate.js";
import { initPaddle, paddle } from "./paddle.js";
import { ball } from "./animate.js";

export function startPage() {
    // Hide the difficulty selection screen
    const startedDiv = document.getElementById("started");
    if (startedDiv) {
        startedDiv.style.display = "none";
    }

    // Create canvas if it doesn't exist
    let canvas = document.getElementById("myCanvas");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "myCanvas";
        canvas.width = 700;
        canvas.height = 600;
        document.body.appendChild(canvas);
    }

    // Initialize paddle position
    initPaddle(canvas);

    // Set up keyboard controls for paddle
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
            if (paddle.x > 0) {
                paddle.x -= paddle.speed;
            }
        }
        if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
            const canvas = document.getElementById("myCanvas");
            if (canvas && paddle.x + paddle.width < canvas.width) {
                paddle.x += paddle.speed;
            }
        }
        if (e.key === " " || e.key === "Spacebar") {
            startBallMovement();
        }
    });

    // Set up mouse/touch controls for paddle
    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        paddle.x = Math.max(0, Math.min(x - paddle.width / 2, canvas.width - paddle.width));
    });

    canvas.addEventListener("click", () => {
        startBallMovement();
    });
}
