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
    this.vx = 50;
    this.vy = 2;
    this.speedX = 0;
    this.speedY = 0;
  }

  update(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY + gravity;

    if (this.y > 650) {
      this.y = 650
    }
    if (this.y < 450) {
      this.y = this.y + (gravity * 2)
    }
    if (this.x > 1100) {
      this.x = 1100
    }
    if (this.x < 0) {
      this.x = 0
    }
  }
  
  moveLeft(){
    this.speedX -= 10;
  }

  moveRight(){
    this.speedX += 10;
  }

  jump(){
    this.speedY -= 20
  }
  
  stopMove(){
    this.speedX = 0;
    this.speedY = 0;
  }

  crashLeft() {
    this.left   = function() { return this.x                 };
  }
  
  crashRight() {
    this.left   = function() { return this.x                 };
  }
  crashTop() {
    this.top    = function() { return this.y                 };
  }
  crashBottom() {
    this.bottom = function() { return this.y + (this.height) };
  }

  // crashCheck() {
  //   this.left   = function() { return this.x                 };
  //   this.right  = function() { return (this.x + this.width)  };
  //   this.top    = function() { return this.y                 };
  //   this.bottom = function() { return this.y + (this.height) };
  
  // }
  
  crashWith (obstacle) {
    return !((this.bottom() < obstacle.top())    ||
             (this.top()    > obstacle.bottom()) ||
             (this.right()  < obstacle.left())   ||
             (this.left()   > obstacle.right()))
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y,150,150)
  }

}
