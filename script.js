const gameContainer = document.querySelector(".game");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

const mario = document.createElement("img");
mario.src = "img/mario.gif";
mario.classList.add("mario");
gameContainer.appendChild(mario);

const fogo = document.createElement("img");
fogo.src = "img/fogo.png";
fogo.classList.add("fogo");
gameContainer.appendChild(fogo);

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp" || e.code === "Space") && !alreadyJump) {
    jump();
  }
});

document.addEventListener("click", () => {
  if (!alreadyJump) {
    jump();
  }
});

document.addEventListener("touchstart", () => {
  if (!alreadyJump) {
    jump();
  }
});

function jump() {
  mario.classList.add("jump");
  alreadyJump = true;

  setTimeout(() => {
    mario.classList.remove("jump");
    alreadyJump = false;
  }, 1100);
}

setInterval(() => {
  const marioBottom = parseInt(
    window.getComputedStyle(mario).getPropertyValue("bottom")
  );
  const fogoLeft = parseInt(
    window.getComputedStyle(fogo).getPropertyValue("left")
  );

  if (fogoLeft > 40 && fogoLeft < 180 && marioBottom <= 50 && !alreadyJump) {
    alert(`Game Over! Seu score foi: ${count}`);
    count = 0;
  }

  count++;
  score.textContent = `SCORE: ${count}`;
}, 10);
 