class Player {
  constructor(ctx, url, width, height) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = url;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.y = 650;
    this.x = 0;
    this.speedX = 0;
    this.speedY = 0;
  }

  update(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }
  
  moveLeft(){
    this.speedX -= 10;
  }

  moveRight(){
    this.speedX += 10;
  }

  jump(){
    this.speedY -= 10
  }
  
  stopMove(){
    this.speedX = 0;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y,150,150)
  }

}