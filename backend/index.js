var express =  require ('express');
var socket = require('socket.io');
const bodyParser = require("body-parser");

var app = express();
// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,Access-Control-Allow-Methods,Access-Control-Allow-Headers,Content-Type,Authorization');
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
    next();
  });
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
  }));


  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.json());


app.post('/login',(req,res) =>{
    console.log(req.body);
    res.send("hi")
})

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