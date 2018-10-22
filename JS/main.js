var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var gravity = 10
var frames = 0;

var bg = new Background(this.ctx, '../img/BG.png', 2)
var bgCloud = new CloudOne(ctx, '../img/Wolke1.png', 0.3)
var bgCloudTwo = new CloudTwo(ctx, '../img/Wolke2.png', 1)
var character = new Player(ctx, '../img/Tier.png')
character.crashCheck();
//var coffee = new Coffee(ctx, '../img/coffee.png')
var obstacles = [];

//onclick on the start button we call startGame()


function startGame(){
  setInterval(function() {
    update()
    drawEverything()
  }, 1000/30)
}

function stopGame(){
  clearInterval(startGame);
  }

function update() {
  frames +=1;
  bg.update()
  bgCloud.update()
  bgCloudTwo.update()
  character.update()
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].update()
    var crashed = obstacles.some(function(obstacle) {
      return character.crashWith(obstacle)
    })
    
    if (crashed) {
      console.log('crash');
      stopGame();
    }
  
  }
  //coffee.update()
}

function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw()
  bgCloud.draw()
  bgCloudTwo.draw()
  character.draw()
  createObstacle()
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


function createObstacle () {
  if (frames % 120 === 0) {
    var x = 1200;
    var minHeight = 100;
    var maxHeight = 300;
    var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    obstacles.push(new Obstacle(ctx, 20, height, "green", x, 700));
  }
  for (let i = 0; i < obstacles.length; i += 1) {
    obstacles[i].x += -1;
    obstacles[i].update();
  }
}

var crashed = obstacles.some(function(obstacle) {
  return character.crashWith(obstacle)
})

if (crashed) {
  console.log('crash');
  stopGame();
}

startGame()