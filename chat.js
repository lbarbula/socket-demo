$(document).ready(function() {
  console.log('loading')
  var socket = io()
  $('form').submit(function(event){
    console.log('hit')
    event.preventDefault()
    socket.emit('sendMessage', $('#message').val());
    $('#message').val('');
    return false;
  });
  socket.on('new message', function(data){
    $('#chat').append($('<li>').text(data));
  });
})
