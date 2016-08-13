var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server)


app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html')
})

io.on('connection', function(socket){
  console.log('someone is here!')
  socket.on('sendMessage', function(data){
    io.emit('new message', data)
  })
})

server.listen(3000)
