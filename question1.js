var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  //ここに処理を記述
  var led = new five.Led(13);
  led.blink(1000);
});
