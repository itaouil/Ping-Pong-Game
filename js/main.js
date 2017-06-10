$(function() {

  // Globals
  var pingpong = {};

  // Keystroke container
  pingpong.pressedKeys = [];

  // Interval function
  pingpong.timer = setInterval(() => {
    gameLoop();
  }, 30);

  // Key Codes
  const KEY = {
    UP   : 38,
    DOWN : 40,
    W    : 87,
    S    : 83
  };

  // paddles reference
  const paddleA = $('#paddleA');
  const paddleB = $('#paddleB');

  // Mark down keys in array
  $(document).keydown((e) => {
    console.log(e.which);
    pingpong.pressedKeys[e.which] = true;
  });

  // Mark up keys in array
  $(document).keyup((e) => {
    pingpong.pressedKeys[e.which] = false;
  });

  // Game Loop
  var gameLoop = () => {
    movePaddles();
  }

  // Move Paddles function
  var movePaddles = () => {

    // Arrow UP
    if (pingpong.pressedKeys[KEY.UP]) {
      var top = parseInt(paddleB.css('top'));
      paddleB.css('top', top - 5);
    }

    // Arrow DOWN
    if (pingpong.pressedKeys[KEY.DOWN]) {
      var top = parseInt(paddleB.css('top'));
      paddleB.css('top', top + 5);
    }

    // W
    if (pingpong.pressedKeys[KEY.W]) {
      var top = parseInt(paddleA.css('top'));
      paddleA.css('top', top - 5);
    }

    // S
    if (pingpong.pressedKeys[KEY.S]) {
      var top = parseInt(paddleA.css('top'));
      paddleA.css('top', top + 5);
    }

  };

});
