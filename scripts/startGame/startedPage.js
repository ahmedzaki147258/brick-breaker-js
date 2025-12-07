import { startBallMovement } from "./animate.js";
import { initPaddle, paddle } from "./paddle.js";
import { ball } from "./animate.js";

export function startPage() {
    // Hide the difficulty selection screen
    const startedDiv = document.getElementById("started");
    if (startedDiv) {
        startedDiv.style.display = "none";
    }

    // Add game-active class to body and html for full-screen styling
    document.body.classList.add("game-active");
    document.documentElement.classList.add("game-active");

    // Create canvas if it doesn't exist
    let canvas = document.getElementById("myCanvas");
    if (!canvas) {
        canvas = document.createElement("canvas");
        canvas.id = "myCanvas";
        
        // Make canvas larger for better full-screen experience
        // Use viewport dimensions but maintain aspect ratio
        const maxWidth = Math.min(window.innerWidth * 0.95, 1200);
        const maxHeight = Math.min(window.innerHeight * 0.95, 800);
        const aspectRatio = 700 / 600; // Original aspect ratio
        
        if (maxWidth / maxHeight > aspectRatio) {
            canvas.height = maxHeight;
            canvas.width = maxHeight * aspectRatio;
        } else {
            canvas.width = maxWidth;
            canvas.height = maxWidth / aspectRatio;
        }
        
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
