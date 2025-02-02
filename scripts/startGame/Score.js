

export function gameResult() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const grad = ctx.createLinearGradient(0, 0, 950, 0);
    grad.addColorStop(0, "lightblue");
    grad.addColorStop(1, "darkblue");
    ctx.font = "50px Arial bold";
    ctx.fillStyle = grad;
    ctx.fillText("Game Over", 280, 300);
}