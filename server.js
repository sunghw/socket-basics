var PORT = process.env.PORT || 3000;
var express= require('express');
var app = express();

//built in node module
var http = require('http').Server(app);

var io = require('socket.io')(http);


//start a new server and use this express app as a boiler plate
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket){
	console.log('User connected via socket.io');
	
	socket.on ('message', function (message){
		console.log('Message received from client' + message.text);
		//socket.broadcast.emit
		//io.emit('message', message);
		socket.broadcast.emit('message', message);
	});

	socket.emit ('message', {
		text: "Welcome to the chat application!"
	});
})


http.listen(PORT, function(){
	console.log('server started at port '+ PORT);

})