var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

//Debug mode
var debug = false

//Implement character image
var playImage = new Image;
playImage.src = "img/tier.png"
var character = new Player(ctx, playImage, 150, 150) 

//Load background
// var bg = new Background(ctx, 'img/bg.png', 2)

var bgImage = new Image();
bgImage.src = "https://github.com/SplitSeconds/stress-game/blob/master/img/bg.png"




var bg = new Background(ctx, bgImage, 2)
  
//Images and global Variables  
var bgCloud = new CloudOne(ctx, 'img/wolke1.png', 1) //small cloud
var bgCloudTwo = new CloudTwo(ctx, 'img/wolke2.png', 0.7)
  
let trashamount = 0;
var frames = 0;
var score = 0;

var obstacles = [];
var coffees = [];
var crash = true

//Sounds 
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }
}

//onclick on the start button we call startGame()
var $button = document.getElementById('button')
$button.onclick = function(){
  console.log("You klicked on the button")
  bgImage.onload = startGame();
  // function(){
    
  // };
  for(var i = 0 ; i < obstacles.length ; i++){
    if(character.collide(obstacles[i])){
      stopGame();
    }
  document.location.href=("");
}}

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
         crashSound = new sound("sound/crash.wav");
         crashSound.play();
        
         playImage.src = "img/autsch.png"
         
        setTimeout(()=> {
          ctx.font = "120px VT323"
          ctx.fillText("Game over!", canvas.width - 820, 400)

          stopGame()
          return;
        }, 100)
      }
    }
  }
  for (var j = 0; j < coffees.length; j++) {
    coffees[j].update()
    if(character.collide(coffees[j])){
      console.log('coffee')
      slurpSound = new sound("sound/slurp.wav");
      slurpSound.play();
      score = score + 10
      trashamount++;
      coffees .splice(j, 1);
      return;
   }
  }
}

// Updating the score
function drawScore() {
  //ctx.fillText("Your score: " + score, canvas.width - 1200, 50)
  var $score = document.getElementById("scoreboard")
  $score.innerText = "Your score is " + score + "!";
}

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
    jumpSound = new sound("sound/jump.wav");
    jumpSound.play();
    playImage.src = "img/jump.png"
    // if (character.y < 649){
    //   playImage.src = "./img/jump.png"
    // } else if (character.y = 650){
    //   playImage.src = "./img/Tier.png"
    // }
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
    case 32:
    case 38:
    console.log('stopjump');
    setTimeout(()=> {
      playImage.src = "img/tier.png"
    }, 500)
    break;
  } 
}

function createObstacle () {
  if (trashamount >= 10 ) {
    if (frames % 30 === 0) {  
      var x = 1200
      var minHeight = 120;
      var maxHeight = 190;
      var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = 430;
      maxGap = 550;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      obstacles.push(new Obstacle(ctx, 100, 150, 'img/trashcan.png', x, height + gap)); 
      }
    }
  else if (trashamount >= 8 ) {
    if (frames % 50 === 0) {  
      var x = 1200
      var minHeight = 120;
      var maxHeight = 190;
      var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = 430;
      maxGap = 550;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      obstacles.push(new Obstacle(ctx, 100, 150, 'img/trashcan.png', x, height + gap)); 
      }
    }
  else if (trashamount >= 4 ) {
    if (frames % 80 === 0) {  
      var x = 1200
      var minHeight = 120;
      var maxHeight = 190;
      var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = 430;
      maxGap = 550;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      obstacles.push(new Obstacle(ctx, 100, 150, 'img/trashcan.png', x, height + gap)); 
      }
  }
  else if (trashamount < 4){
    if (frames % 160 === 0) {  
      var x = 1200
      var minHeight = 120;
      var maxHeight = 190;
      var height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = 430;
      maxGap = 550;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      obstacles.push(new Obstacle(ctx, 100, 150, 'img/trashcan.png', x, height + gap)); 
    }
  }
  for (let i = 0; i < obstacles.length; i += 1) {
    obstacles[i].x += -1.5;
    obstacles[i].update();

    if (score >= 10 && score <= 30){     
      obstacles[i].x += -3;
      obstacles[i].update();
      ctx.font = "50px VT323"
      ctx.fillText("You reached level 2!", canvas.width - 450, 50)}
    else if (score >= 30 && score <= 60){
      obstacles[i].x += -6;
      obstacles[i].update();
      ctx.font = "50px VT323"
      ctx.fillText("You reached level 3!", canvas.width - 450, 50)}
    else if (score >= 60 && score <= 100){
        obstacles[i].x += -10;
        obstacles[i].update();
        ctx.font = "50px VT323"
        ctx.fillText("You reached level 4!", canvas.width - 450, 50)}
    else if (score > 100){
          obstacles[i].x += -10;
          obstacles[i].update();
          ctx.font = "50px VT323"
          ctx.fillText("You reached level 5!", canvas.width - 450, 50)}
    }
    }
  
function createCoffee () {
  if (trashamount >= 8 ) {
    if (frames % 80 === 0) {  
      var x = 1200
      coffees.push(new Coffee(ctx, 100, 150, 'img/coffee.png', x, 650)); 
      }
    }
  if (trashamount >= 4 ) {
    if (frames % 120 === 0) {  
      var x = 1200
      coffees.push(new Coffee(ctx, 100, 150, 'img/coffee.png', x, 650)); 
    }
  }
  else if (trashamount < 4){
    if (frames % 200 === 0) {  
      var x = 1200
    coffees.push(new Coffee(ctx, 100, 150, 'img/coffee.png', x, 650)); 
    }
  }
  for (let j = 0; j < coffees.length; j += 1) {
    coffees[j].x += -1.5;
    if (score >= 10 && score <= 30){     
      coffees[j].x += -3;}
    else if (score >= 30 && score <= 60){
      coffees[j].x += -6;}
    else if (score >= 60 && score <= 100){
      coffees[j].x += -10;}
    else if (score > 100){
      coffees[j].x += -10;}
    }
}
