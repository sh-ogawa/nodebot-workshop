var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  //ここに処理を記述
  var led = new five.Led(9);
  var sensor = new five.Sensor("A0");
  sensor.scale(600).on("change", function(value) {
    console.log(value);
    if(value >= 600){
      led.on();
    }else{
      led.off();
    }
  });
});
