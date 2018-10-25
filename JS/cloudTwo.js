
class CloudTwo {
  constructor(ctx, url, speed,x, y) {
    this.ctx = ctx
    this.speed = speed
    this.img = new Image()
    this.img.src = url
    this.x = 0
    this.y = 200
    this.height = 150
    this.width = 250
  }
  update() {
    this.x -= this.speed - 0.3
    if (this.x < -this.width) {
      this.x += this.width 
    }
  }
  draw() {
    for (var i = 0; this.x+i*this.width < this.ctx.canvas.width; i++) {
      this.ctx.drawImage(this.img,this.x+i*this.width,130,this.width,this.height)
    }
  }
}
