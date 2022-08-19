export class Player {
  x = 10;
  y = 10;
  width = 40;
  height = 40;
  targetX = this.x;
  targetY = this.y;
  speed = 10;

  interval;

  setTarget(targetX, targetY) {
    this.targetX = targetX - this.width / 2;
    this.targetY = targetY - this.height / 2;

    clearInterval(this.interval);

    this.interval = setInterval(() => {
      if (this.x < this.targetX) {
        this.x++;
      } else if (this.x > this.targetX) {
        this.x--;
      }

      if (this.y < this.targetY) {
        this.y++;
      } else if (this.y > this.targetY) {
        this.y--;
      }

      if (this.targetX === this.x && this.targetY === this.y) {
        clearInterval(this.interval);
      }
    }, 100 / this.speed);
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
