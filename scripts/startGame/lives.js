export function lives(lives) {
  let src = "../../assets/heart.png";
  let livesContainer = document.querySelector(".lives-container");
  if (!livesContainer) {
    livesContainer = document.createElement("div");
    livesContainer.className = "lives-container";
    document.body.appendChild(livesContainer);
  }

  livesContainer.innerHTML = "";
  for (let i = 0; i < lives; i++) {
    const img = document.createElement("img");
    img.src = src;
    img.width = 30;
    img.className = "img-container";
    livesContainer.appendChild(img);
  }
}
