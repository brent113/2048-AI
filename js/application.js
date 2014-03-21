animationDelay = 5;
minSearchTime = 10;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var manager = new GameManager(6, KeyboardInputManager, HTMLActuator);
});
