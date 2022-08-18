export class Player {
  x = 10;
  y = 10;
  width = 40;
  height = 40;

  constructor(canvas) {
    canvas.addEventListener("mousedown", (e) => {
      this.x = e.offsetX - this.width / 2;
      this.y = e.offsetY - this.height / 2;
    });
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
