var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var button = new five.Button(5);
  var led = new five.Led(9);
  var flag = Boolean(false);

  button.on("press", function() {
    if(flag){
      led.off();
      flag = false;
    }else{
      led.on();
      flag = true;
    }
  });
});
