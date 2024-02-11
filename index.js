const box = document.getElementById("box");
const moveAmount = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown", () => {
  box.style.backgroundColor = "tomato";
  box.textContent = "🤬";
});

document.addEventListener("keyup", () => {
  box.style.backgroundColor = "lightblue";
  box.textContent = "😊";
});

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
  }
});
