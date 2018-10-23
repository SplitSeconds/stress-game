var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var gravity = 10
var frames = 0;
var lives = 3;
// var interval;

var bg = new Background(this.ctx, '../img/BG.png', 2)
var bgCloud = new CloudOne(ctx, '../img/Wolke1.png', 0.3)
var bgCloudTwo = new CloudTwo(ctx, '../img/Wolke2.png', 1)
var character = new Player(ctx, '../img/Tier.png')

var obstacles = [];
var coffeeCups = [];
var crash = true

//onclick on the start button we call startGame()

function startGame(){
  setInterval(function() {
    update()
    drawEverything()
  }, 1000/30)
}

function stopGame(){
  if(clearInterval(interval)){
    console.log(stop);
    obstacles = [];
    bg.stop()
    this.frames = 0
  }
}

function checkCollision(a,b) {
  return !(
    ((a.y + a.height) < (b.y)) ||
    (a.y > (b.y + b.height)) ||
    ((a.x + a.width) < b.x) ||
    (a.x > (b.x + b.width))
);}

function update() {
  frames +=1;
  bg.update()
  bgCloud.update()
  bgCloudTwo.update()
  character.update()
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].update()

    checkCollision(obstacles[i], character)
      if (checkCollision(obstacles[i], character) === false) {
        stopGame()
      } 

  }
  for (var j = 0; j < coffeeCups.length; j++) {
    coffeeCups[j].update()
  }
}

function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw()
  bgCloud.draw()
  bgCloudTwo.draw()
  character.draw()
  createObstacle()
  createCoffee()
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].draw()
  }
  for (var j = 0; j < coffeeCups.length; j++) {
    coffeeCups[j].draw()
  }
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
    var minHeight = 120;
    var maxHeight = 190;
    var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
    minGap = 500;
    maxGap = 550;
    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
    
    obstacles.push(new Obstacle(ctx, 20, x - height - gap, "green", x, height + gap));
  }
  for (let i = 0; i < obstacles.length; i += 1) {
    obstacles[i].x += -1;
    obstacles[i].update();
  }
}

function createCoffee () {
  if (frames % 190 === 0) {  
    var x = 1200
    coffeeCups.push(new Coffee(ctx, 100, 100, '../img/coffee.png', x, 700)); 
  }
  for (let j = 0; j < coffeeCups.length; j += 1) {
    coffeeCups[j].x += -1;
    coffeeCups[j].update();
  }
}
startGame();