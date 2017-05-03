/**
* @auther:burhancerit
* https module with expressjs
**/
var path = require('path');
var express = require('express')
var busboy = require('connect-busboy');
var bodyParser = require('body-parser');
var serverInfo = require('../modal/serverInfo')()
var serverController = require('../controllers/serverController')


var app = express()
app.use(bodyParser());

app.use('/static', express.static(path.join(__dirname, '../public')))

app.get('/getAllServers', function (req, res) {
     serverController.getAllServers((serverList)=>{
      serverList = serverList || [];
      res.send({"serverList":serverList, "listcount":serverList.length});
    });
})

app.get('/refresh', function (req, res) {
  /**not implemented**/
  res.send("refresh-serverList");
})


app.get('/delete', function (req, res) {
  serverController.deleteServers();
  res.send("deleted");
})


app.get('/getServerInfo/:serverip', function (req, res) {
  serverController.getServerDetails(req.params.serverip, (serverDetails)=>{
    serverDetails = serverDetails || serverInfo.server();
    res.send({"serverDetails": serverDetails});
  });
})

app.get('/addBulkServers', function (req, res) {
  var serverlist = [];
  for (var i = 0; i < 3; i++) {
    var newserver = serverInfo.server();
    newserver.serverName = "Servername " + i;
    newserver.serverIp = "192.168." + i + ".110";
    newserver.serialNumber = "XyZTKLMN";
    newserver.serverEndDate = new Date();
    newserver.serverLocation = "Location of server " + i;
    console.log(newserver);
    serverlist.push(newserver)
  }
  serverController.addServersBulk(serverlist);
  res.send("added");
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../../public/views/index.html'));
});

app.post('/upload', function(req, res) {o
  try {
    JSON.stringify(req.body);
    var list = req.body;
    console.log(list.length, list[0], list[0].serverName);
    if( Object.prototype.toString.call( list ) !== '[object Array]' ) {
      list = [];
      list.push(req.body);
    }
    serverController.addServersBulk(list);
    res.send("added");
  } catch (e) {

  } finally {

  }
});


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
