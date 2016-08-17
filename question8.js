var five = require('johnny-five');
var dnode = require('dnode');
var board = new five.Board();

board.on('ready', function () {
  var tempsensor = new five.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

  var temp = null;
  tempsensor.on('data', function(){
    console.log(this.celsius)
    temp = this.celsius;
  });

  var server = dnode({
    getTemperature : function (cb) {
      console.log("request recieve");
      cb(temp);
    }
  });

  server.listen(1337);

  var d = dnode.connect(1337);
  d.on('remote', function (remote) {
    console.log("request send");
    remote.getTemperature(function (s) {
        console.log("response recieve :" + s);
        d.end();
    });
});

});
