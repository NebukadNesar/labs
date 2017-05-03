/**
* @auther:burhancerit
* db api
**/
var db = require("./dbSchemaCreators")
var serverInfo = require("../modal/serverInfo")()

var Server = db.Server;
var Admin = db.Admin;

var adminAccount = new Admin({username:"admin", password:"1234"});

/** adds the default admin account **/
AdminAccounts : () => {
  Admin.find({username : 'admin'}, function (err, accounts) {
    if (accounts.length){
      console.log('Name exists already',null);
    }else{
      adminAccount.save(function (err) {
        if (err) return console.error(err);
      });
    }
  });
}()

/************************************
*    ||  database                   *
*    \/      query operations       *
************************************/

findServer = (serverIp,callback) => {
  Server.find({serverIp: serverIp}, (err, server) => {
    callback(server);
  });
}

findAllServers = (callback) => {
  Server.find({}, (err, servers) => {
    callback(servers);
  });
}

addServer = (serverdetails) => {
  var server = new Server({ serverDetails });
  server.save(function (err,res) {
    if (err) return console.error(err);
  });
}

addServersBulk = (serverlist) => {
  for (var i = 0; i < serverlist.length; i++) {
    var server = new Server(serverInfo.server(serverlist[i]));
    server.save(function (err) {
      if (err) return console.error(err);
    });
  }
}

deleteServer = (serverIp) =>{
  Server.findOneAndRemove({serverIp: serverIp}, function(err){
    console.log("Error occured while deleting server : ", serverIp);
  });
}

deleteServers = () =>{
  Server.remove().exec();
}


/*
* public db API
*/
module.exports = {
  findServer : findServer,
  addServer : addServer,
  findAllServers : findAllServers,
  addServersBulk : addServersBulk,
  deleteServer : deleteServer,
  deleteServers : deleteServers
}
