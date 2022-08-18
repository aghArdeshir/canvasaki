function createCanvas() {
  const canvas = document.createElement("canvas");

  const BORDER_WIDTH = 10;
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
