var socket = io(); //defined when we load in socketio libary. goes to io.on(connection ) method in server side.

socket.on('connect', function(){
	console.log('Connected to socketio server!');
});
socket.on('message', function (message) {
	console.log('Got the mssage from the server: ' + message.text);
});