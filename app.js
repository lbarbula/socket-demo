var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server)
app.use(express.static(__dirname + '/app'))

app.get('/', function(req, res){
  res.render('index')
})

io.on('connection', function(socket){
  console.log('someone is here!')
  socket.on('sendMessage', function(data){
    io.emit('new message', data)
  })
})

server.listen(3000)
