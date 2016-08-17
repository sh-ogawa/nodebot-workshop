var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {
  //controllerにTMP36指定しないとセルシウスで取ろうとしてもケルビンで帰ってくる。s
  var tempsensor = new five.Temperature({
    controller: "TMP36",
    pin: "A0"
  });

  var piezo = new five.Piezo(9);
  var led = new five.Led(13);
  var button = new five.Button(5);

  var isFire = false;
  var isCheck = false;

  tempsensor.on("change", function(){
    if(this.celsius >= 50){
      if(isCheck) return;
      piezo.tone(five.Piezo.Notes.c4, 1000);
      led.on();
      isFire = true;
    }else{
      if(!isFire) return;
      piezo.noTone();
      led.off();
      isFire = false;
      isCheck = false;
    }
  });

  button.on("press", function() {
    if(!isFire) return;
    piezo.noTone();
    led.off();
    isCheck = true;
  });

});
