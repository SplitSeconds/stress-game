var characterWalk = new Image();
characterWalk.src = "../img/walk.png";

function sprite (options) {	
  var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0;
        numberOfFrames = options.numberOfFrames || 1;

        
  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  that.loop = options.loop;

  that.update = function () {

    tickCount += 1;
  
    if (tickCount > ticksPerFrame) {
    
      tickCount = 0;
      
       // If the current frame index is in range
       if (frameIndex < numberOfFrames - 1) {	
        // Go to the next frame
        frameIndex += 1;
      } else if (that.loop) {
        frameIndex = 0;
    }
    }	
    }
  
  that.render = function () {
    // Clear the canvas
    context.clearRect(0, 0, that.width, that.height);

    // Draw the animation
    that.context.drawImage(
       that.image,
       frameIndex * that.width / numberOfFrames,
       0,
       that.width / numberOfFrames,
       that.height,
       0,
       0,
       that.width / numberOfFrames,
       that.height);
  
  walk.render();
  return that;
};
}; 

var walk = sprite({
  context: canvas.getContext("2d"),
  width: canvas.width,
  height: canvas.height,
  image: characterWalk
});

function gameLoop () {

  window.requestAnimationFrame(gameLoop);
  
  walk.update();
  walk.render();
}

// Start the game loop as soon as the sprite sheet is loaded
characterWalk.addEventListener("load", gameLoop);