class Coffee {
  constructor(ctx, size, url, x, y) {
    this.ctx = ctx
    this.size = size
    this.img = new Image();
    this.img.src = url;
    this.canvasWidth = ctx.canvas.width
    this.canvasHeight = ctx.canvas.height
    this.x = Math.floor(Math.random()*this.canvasWidth - size)
    this.y = Math.floor(Math.random()*this.canvasHeight - size)
  }
  update(){

  }
}