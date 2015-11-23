var PORT = process.env.PORT || 3000;
var express= require('express');
var app = express();

//built in node module
var http = require('http').Server(app);

var io = require('socket.io')(http);


//start a new server and use this express app as a boiler plate
app.use(express.static(__dirname + '/public'));

io.on('connection', function(){
	console.log('User connected via socket.io');
})

http.listen(PORT, function(){
	console.log('server started at port '+ PORT);

})