var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var debug = false

var frames = 0;
var score = 0;

var bg = new Background(this.ctx, '../img/BG.png', 2)
var bgCloud = new CloudOne(ctx, '../img/Wolke1.png', 1) //small cloud
var bgCloudTwo = new CloudTwo(ctx, '../img/Wolke2.png', 0.7)
var character = new Player(ctx, '../img/Tier.png', 150, 150)

var obstacles = [];
var coffees = [];
var crash = true

//onclick on the start button we call startGame()

function startGame(){
  starting = setInterval(function() {
    update()
    drawEverything()
  }, 1000/30)
}

function stopGame(){
  if (clearInterval(starting)){
    console.log(stop);
    obstacles = [];
    bg.stop()
    this.frames = 0
  }
}

function update() {
  frames +=1;
  bg.update()
  bgCloud.update()
  bgCloudTwo.update()
  character.update()
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].update()

    for(var i = 0 ; i < obstacles.length ; i++){
      if(character.collide(obstacles[i])){
         stopGame()
         return;
      }
    }
  }
  for (var j = 0; j < coffees.length; j++) {
    coffees[j].update()
    if(character.collide(coffees[j])){
      console.log('coffee')
      score = score + 10
      coffees .splice(j, 1);
      return;
   }
  }
}

// Updating the score
ctx.font = "50px sans-serif"
function drawScore() {
  ctx.fillText("Your score: " + score, canvas.width - 1200, 50)
}

var $score = document.getElementById("scoreboard")
$score.innerText = "Your score is " + score



function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw()
  bgCloud.draw()
  bgCloudTwo.draw()
  character.draw()
  drawScore()
  createObstacle()
  createCoffee()
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].draw()
  }
  for (var j = 0; j < coffees.length; j++) {
    coffees[j].draw()
  }
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
    case 38:
    console.log('jump');
    character.jump();
    break;
  }
} 

document.onkeyup = function(e) {
  console.log("keyup");
  switch (e.keyCode) {
    case 37: // left
    case 39: // right
    character.stopMove();
    break;
  } 
}


function createObstacle () {
  if (frames % 140 === 0) {  
    var x = 1200
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
    coffees.push(new Coffee(ctx, 100, 100, '../img/coffee.png', x, 700)); 
  }
  for (let j = 0; j < coffees.length; j += 1) {
    coffees[j].x += -1;
    //coffeeCups[j].update();
  }
}
startGame();