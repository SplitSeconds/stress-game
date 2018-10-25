class Obstacle {
  constructor(ctx, width, height, url, x, y) {
    this.width = width;
    this.height = height;
    this.img = new Image();
    this.img.src = url;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    // this.ctx.fillStyle = color;
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.x -= 2
  }
  draw() {
    if (debug) {
      this.ctx.fillStyle = "red"
      this.ctx.globalAlpha = 0.5
      this.ctx.fillRect(this.x, this.y, this.width, this.height)
      this.ctx.globalAlpha = 1
    }

    this.ctx.drawImage(this.img,this.x-10,this.y,this.width+20,this.height)
  }
}

