var express =  require ('express');
var socket = require('socket.io');

var app = express();


var server = app.listen('4000', ()=>{
    console.log("APP listening on Port 4000")
})


var io  = socket(server);

io.on('connection',(socket)=>{
    console.log('Socket Connection complete');

    socket.on('Chat:receive',(data)=>{
        console.log(data);
        // io.to(socketID).emit('Chat',data);
        socket.broadcast.emit('Chat:receive',data);
        // io.sockets.emit('Chat:receive',data)
    })
})