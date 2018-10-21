var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background(ctx, '../img/BG.png', 2)
var bgCloud = new CloudOne(ctx, '../img/Wolke1.png', 1)
var bgCloudTwo = new CloudTwo(ctx, '../img/Wolke2.png', 1)

setInterval(function() {
  update()
  drawEverything()
}, 1000/60)

function update() {
  bg.update()
  bgCloud.update()
  bgCloudTwo.update()
}

function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw()
  bgCloud.draw()
  bgCloudTwo.draw()
}