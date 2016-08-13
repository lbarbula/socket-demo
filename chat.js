$(document).ready(function() {
  var socket = io()
  $('form').submit(function(event){
    event.preventDefault()
    socket.emit('chat message', $('#message').val());
    $('#message').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messageBox').append($('<li>').text(msg));
  });
})
