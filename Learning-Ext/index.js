var path = require('path');
var express = require('express');
var app = express();

var publicPath = path.resolve (__dirname, 'public');
var srcPath = path.resolve (__dirname, 'src');

app.get('/',function (req,res){
  res.sendFile(path.join(srcPath +'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.use(express.static(publicPath));
app.use(express.static(srcPath));
// app.get('/', function(req, res){
//   res.send('Hello');
// });

app.listen(3000, function (){
  console.log(publicPath);
  console.log('Listening in port 3000');
});
