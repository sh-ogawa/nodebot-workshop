var five = require('johnny-five');
var board = new five.Board();
var dnode = require('dnode');

board.on('ready', function () {
  var tempsensor = new five.Temperature("A0");

  var server = dnode({
    getTemperature : function(cb){
        cb(tempsensor.celsius);
    }
  });

  server.listen(1337);

});
