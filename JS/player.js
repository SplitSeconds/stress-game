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
    this.crash = true;
    this.nbOfJumps = 2

    this.gravity = 3; // variables to dermine
    this.jumpForce = 40; // variables to dermine
  }

  update(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    this.speedY += this.gravity;

    // touch the ground
    if (this.y > 650) {
      this.y = 650
      this.nbOfJumps = 2
    }
    // if (this.y < 450) {
    //   this.y = this.y + (gravity * 2)
    // }
    if (this.x > 1100) {
      this.x = 1100
    }
    if (this.x < 0) {
      this.x = 0
    }
  }
  
  moveLeft(){
    this.speedX = -10;
  }
  moveRight(){
    this.speedX = 10;
  }
  jump(){
    if (this.nbOfJumps > 0) {
      this.speedY = -this.jumpForce
      this.nbOfJumps--
    }
  }
  stopMove(){
    this.speedX = 0;
    // this.speedY = 0;
  }
  collide(obstacle){
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = obstacle.x;
    var otherright = obstacle.x + obstacle.width;
    var othertop = obstacle.y;
    var otherbottom = obstacle.y + obstacle.height;
    var crash = true;
    if (mybottom < othertop || mytop > otherbottom || myright < otherleft || myleft > otherright) {
      crash = false;
    }
    return crash;
  }
  
  draw() {
    this.ctx.save()
    if (debug) {
      this.ctx.fillStyle = "red"
      this.ctx.globalAlpha = 0.5
      this.ctx.fillRect(this.x, this.y, this.width, this.height)
      this.ctx.globalAlpha = 1
    }
    this.ctx.drawImage(this.img, this.x-30, this.y-45, this.width+74, this.height+60)
    this.ctx.restore()
  }

}
