export class Player {
  x = 10;
  y = 10;
  width = 40;
  height = 40;
  targetX = this.x;
  targetY = this.y;
  speed = 50;

  interval;

  setTarget(targetX, targetY) {
    this.targetX = targetX - this.width / 2;
    this.targetY = targetY - this.height / 2;

    // Pythagorean theorem
    const distanceX = Math.abs(this.targetX - this.x);
    const distanceY = Math.abs(this.targetY - this.y);
    const lypotenuseLength = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    clearInterval(this.interval);

    this.interval = setInterval(() => {
      const xTravel = distanceX / lypotenuseLength;
      const yTravel = distanceY / lypotenuseLength;

      if (this.x < this.targetX) {
        this.x += xTravel;
      } else if (this.x > this.targetX) {
        this.x -= xTravel;
      }

      if (this.y < this.targetY) {
        this.y += yTravel;
      } else if (this.y > this.targetY) {
        this.y -= yTravel;
      }

      // < 1 because all calculations above are using deciaml values
      if (
        Math.abs(this.targetX - this.x) < 1 &&
        Math.abs(this.targetY - this.y) < 1
      ) {
        clearInterval(this.interval);
      }
    }, 100 / this.speed);
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
