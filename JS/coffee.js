class Coffee {
  constructor(ctx,width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.x -= 2
  }
  draw() {
    this.ctx.fillRect(this.x,this.y,this.width, this.height)
  }
  
}