
class Background {
  constructor(ctx, url, speed) {
    this.ctx = ctx
    this.speed = speed
    this.img = new Image()
    this.img.src = url
    this.x = 0
    this.height = this.ctx.canvas.height
  }
  update() {
    this.x -= this.speed
    if (this.x < -this.width()) {
      this.x += this.width()
    }
  }
  stop(){
    this.x = 0

  }
  /*
  /  width() has to be a function because when you initially load the image
  /  `this.img.width` and `this.img.height` are both 0
  /  this leads to a division by 0 and width gets set to `NaN`
  /
  /  Another soluton could be to only set the width after the image has loaded
  */
  width() {
    return this.height*this.img.width/this.img.height;
  }
  draw() {
    for (var i = 0; this.x+i*this.width() < this.ctx.canvas.width; i++) {
      this.ctx.drawImage(this.img,this.x+i*this.width(),0,this.width(),this.height)
    }
  }
}
