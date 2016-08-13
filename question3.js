var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  //ここに処理を記述
  var motor = new five.Motor(9);

  //event1
  motor.on("forward", function(err, timestamp) {
    motor.start();
    board.wait(2000, function() {
      motor.stop();
    });
  });

  motor.on("start", function(err, timestamp) {
    board.wait(2000, function() {
      motor.stop();
    });
  });

  //event2
  motor.on("stop", function(err, timestamp) {
    // demonstrate braking after 5 seconds
    board.wait(1000, function() {
      motor.forward(200);
    });
  });

  //start
  motor.forward(200);

});
