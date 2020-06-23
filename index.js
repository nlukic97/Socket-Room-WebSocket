var express = require('express');
var Ws = require('ws');
var app = express();
var port = 3000;

app.listen(port,function(){
  console.log('Server started at port ' + port + '.');
})

app.use(express.static('./public'));

var server = new Ws.Server({port:'3200'}); //mora veliko S

server.on('connection',function(client){
  console.log('new user arived to server.');

  client.on('close',function(){
    console.log('Client has left the server.');
  })

  client.on('message',function(msg){
    console.log('Client says: ' + msg);
    client.send(msg);
  })
})




