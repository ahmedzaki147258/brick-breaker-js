export function lives(lives) {
<<<<<<< HEAD
  let src =
    "https://www.shutterstock.com/image-vector/pixel-heart-icon-8-bit-260nw-2145047623.jpg";

  let livesContainer = document.querySelector(".lives-container");
  if (!livesContainer) {
    livesContainer = document.createElement("div");
    livesContainer.className = "lives-container";
    document.body.appendChild(livesContainer);
  }

=======
  let src = "../../assets/heart.png";
  let livesContainer = document.querySelector(".lives-container");
  if (!livesContainer) {
    livesContainer = document.createElement("div");
    livesContainer.className = "lives-container";
    document.body.appendChild(livesContainer);
  }

>>>>>>> testing
  livesContainer.innerHTML = "";
  for (let i = 0; i < lives; i++) {
    const img = document.createElement("img");
    img.src = src;
<<<<<<< HEAD
    img.width = 50;
=======
    img.width = 30;
>>>>>>> testing
    img.className = "img-container";
    livesContainer.appendChild(img);
  }
}
