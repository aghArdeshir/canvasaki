export class Base {
  width = 200;
  height = 200;

  x = 100;
  y = window.innerHeight - this.height - 100;

  getCenter() {
    return {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2,
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#ff000080";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
