const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./user');

const model = require('./model');
// const User = model.getModel('user');
const Chat = model.getModel('chat');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('user login');
  socket.on('sendmsg', function(data) {
    console.log(data);
    const { from, to, msg } = data;
    const chatid = [from, to].sort().join('_');
    Chat.create({ chatid, from, to, content: msg }, function(err, doc) {
      console.log('err=', err);
      console.log('doc=', doc);
      io.emit('recvmsg', Object.assign({}, doc._doc));
    });
    // console.log(data);
    // io.emit('recvmsg', data); // 广播到全局
  });
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', userRouter);

app.get('/', function(req, res) {
  res.send(`<h1>Hello world</h1>`);
});

server.listen(9093, function() {
  console.log('Node app start at port 9093');
});
