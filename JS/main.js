var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  }
}

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var gravity = 2
var minHeight = 20;
var maxHeight= 100;
var minWidth = 10;
var maxWidth = 20;
var minGap = 200;
var maxGap = 500;

var bg = new Background(this.ctx, '../img/BG.png', 2)
var bgCloud = new CloudOne(ctx, '../img/Wolke1.png', 0.3)
var bgCloudTwo = new CloudTwo(ctx, '../img/Wolke2.png', 1)
var character = new Player(ctx, '../img/Tier.png')
//var coffee = new Coffee(ctx, '../img/coffee.png')
var obstacles = [];

//onclick on the start button we call startGame()


function startGame(){
  setInterval(function() {
    update()
    drawEverything()
  }, 1000/30)
}
function update() {
  bg.update()
  bgCloud.update()
  bgCloudTwo.update()
  character.update()
  //coffee.update()
}

function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw()
  bgCloud.draw()
  bgCloudTwo.draw()
  character.draw()
  //coffee.draw()
  //drawScore()
}



document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
    console.log('left');
    character.moveLeft();
    break;
    case 39:
    console.log('right');
    character.moveRight();
    break;
    case 32:
    console.log('jump');
    character.jump();
    break;
  }
} 

document.onkeyup = function(e) {
  character.stopMove();
}

startGame()