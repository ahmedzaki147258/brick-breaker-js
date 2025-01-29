export function lives(lives) {
    let src = "https://www.shutterstock.com/image-vector/pixel-heart-icon-8-bit-260nw-2145047623.jpg";

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
        img.width = 50;
        img.className = "img-container";
        livesContainer.appendChild(img);
    }
}
