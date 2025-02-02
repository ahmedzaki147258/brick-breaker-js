
export function endGame() {
    var end = document.createElement("button");
    end.id = "end-button";
    end.textContent = "Go Back"
    end.onclick = function () {
        window.history.back();
    };
    document.body.appendChild(end)
}