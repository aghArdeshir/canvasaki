import { Base } from "./Base.mjs";
import { Creep } from "./Creep.mjs";
import { Player } from "./Player.mjs";

function createCanvas() {
  const canvas = document.createElement("canvas");

  const BORDER_WIDTH = 2;
  canvas.style.border = `${BORDER_WIDTH}px solid red`;

  function sizeCanvas() {
    const CANVAS_WIDTH = document.body.offsetWidth;
    const CANVAS_HEIGHT = document.body.offsetHeight;

    canvas.width = CANVAS_WIDTH - BORDER_WIDTH * 2;
    canvas.height = CANVAS_HEIGHT - BORDER_WIDTH * 2;
  }

  sizeCanvas();

  window.addEventListener("resize", (e) => {
    sizeCanvas();
  });

  return canvas;
}

const canvas = createCanvas();

document.body.prepend(canvas);

function disableContextMenuOnRightClick() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
}

disableContextMenuOnRightClick();

const player = new Player(canvas);
canvas.addEventListener("mousedown", (e) => {
  player.setTarget(e.offsetX, e.offsetY);
});

const creep = new Creep();
creep.setTarget(creep.width, window.innerHeight - creep.height * 2);

const base = new Base();
creep.setTarget(base.getCenter().x, base.getCenter().y);

function draw() {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.draw(ctx);
  creep.draw(ctx);
  base.draw(ctx);

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
