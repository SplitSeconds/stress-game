class Coffee {
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
    //this.ctx.fillRect(this.img,this.x,this.y,this.width, this.height)
    this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
  }
  
}