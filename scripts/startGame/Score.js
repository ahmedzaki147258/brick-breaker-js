export function gameResult(state) {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

 
  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, "lightblue");
  grad.addColorStop(1, "darkblue");

 
  const text = state ? "Congratulations" : "Game Over";
  ctx.font = "50px Arial bold";


  const metrics = ctx.measureText(text);
  const x = (canvas.width - metrics.width) / 2;
  const y = canvas.height / 2;


  ctx.fillStyle = grad;
  ctx.fillText(text, x, y);
}
