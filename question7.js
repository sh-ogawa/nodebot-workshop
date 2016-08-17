var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {
  var potentiometer = new five.Sensor("A2");
  var servo = new five.Servo(9);
  servo.to(180);
  board.repl.inject({
    pot: potentiometer
  });

  potentiometer.on("change", function() {
    //potentiometerの現在の値をポテンションメータ(0-1023)とサーボモータ(0-179)の角度に変換する
    var position = five.Fn.map(this.value, 0, 1023, 0, 179);
    servo.to(position);
  });
});
