var express =  require ('express');
var socket = require('socket.io');
const bodyParser = require("body-parser");
let usersController = require("./controllers/users");
let ChatController = require('./controllers/chat');


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


app.post('/login',usersController.signin);
app.post('/signup',usersController.signup);


app.post('/getallusers',ChatController.getallusers);
app.post('/getUserConversations',ChatController.getUserConversations);


var server = app.listen(  process.env.PORT || 4000, ()=>{
    console.log("APP listening on Port 4000")
})


var io  = socket(server);


var users = [];
io.on('connection',(socket)=>{
    console.log('Socket Connection complete');

    socket.on('user_connect',(email)=>{
      console.log(email);
      users[email.toLowerCase()] = socket.id;
      console.log(users);  

    })

    socket.on('private_chat',(data)=>{
      console.log(data);
        io.to(users[data.receiver]).emit('Chat:receive',data);
        // io.emit(data.message);
        // socket.broadcast.emit('Chat:receive',data);
        // io.sockets.emit('Chat:receive',data)
    })
})