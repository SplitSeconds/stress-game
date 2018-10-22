var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var gravity = 10
// var minHeight = 20;
// var maxHeight= 100;
// var minWidth = 10;
// var maxWidth = 20;
// var minGap = 200;
// var maxGap = 500;
var frames = 0;

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
  frames +=1;
  bg.update()
  bgCloud.update()
  bgCloudTwo.update()
  character.update()
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].update()
  }
  // this.obstacles.createObstacle()
  //coffee.update()
}

function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw()
  bgCloud.draw()
  bgCloudTwo.draw()
  character.draw()
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].draw()
  }
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

function createObstacle () {
  if (frames % 120 === 0) {
    var x = 100;
    var minHeight = 20;
    var maxHeight = 200;
    var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    obstacles.push(new Obstacle(ctx, 10, height, "green", x, 650));
  }
  for (let i = 0; i < obstacles.length; i += 1) {
    obstacles[i].x += -1;
    obstacles[i].update();
  }
}

var test = new Obstacle(ctx,50,100,"red", 100, 100)
console.log('Obstacle', createObstacle())