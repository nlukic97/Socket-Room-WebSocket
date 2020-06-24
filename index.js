var app = require('express')();
var http = require('http').createServer(app)
var io = require('socket.io')(http);
var port = 3000;

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/public/index.html');
})

app.get('/client2/client.html',(req,res)=>{
  res.sendFile(__dirname + '/public/client2/client.html');
})

app.get('/client3/client3.html',(req,res)=>{
  res.sendFile(__dirname + '/public/client3/client3.html');
})

io.on('connection',(socket)=>{
  console.log('a user has connected')
  socket.on('disconnect',()=>{
    console.log('user has disconected.')
  })

  socket.on('end',()=>{
    socket.disconnect(0)
  })

  socket.on('message',(msg)=>{
    console.log('the User has said: ' + msg)

    console.log('Sending the user: ' + msg + '...')
    io.emit('message',msg)
  })
})

http.listen(3000,()=>{
  console.log('listening on port 3000.')
})

//page index.html is fully socket.io optimised. Other two pages are introduced in the server, but still have remaining vue methods, and function calls which need to be replaced.




