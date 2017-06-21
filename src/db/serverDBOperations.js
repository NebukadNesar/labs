/**
* @auther:burhanc
* db api
*/
import db from "./dbSchemaCreators"
import serverInfo from "../modal/serverInfo"

let serverModel = serverInfo();
let Server = db.Server;
let Admin = db.Admin;
let serverDBOperations = {}

var adminAccount = new Admin({username:"admin", password:"1234"});

/** adds the default admin account **/

Admin.find({username : 'admin'}, function (err, accounts) {
  if (accounts.length){
    console.log('Admin name exists already');
  }else{
    adminAccount.save(function (err) {
      if (err) return console.error(err);
    });
  }
});

/************************************
*    ||  database                   *
*    \/      query operations       *
************************************/

serverDBOperations.findServer = (searchString,callback) => {
  Server.find({serverIp:searchString})
  .exec((err, docs) => {
    callback(err, docs);
  });
}

serverDBOperations.findAllServers = (callback) => {
  Server.find({}, (err, servers) => {
    callback(servers);
  });
}

serverDBOperations.addServer = (serverdetails) => {
  var server = new Server({ serverDetails });
  server.save(function (err,res) {
    if (err) return console.error(err);
  });
}

serverDBOperations.addServersBulk = (serverlist) => {
  //dont do this :)
  /*for (var i = 0; i < serverlist.length; i++) {
    var server = new Server(serverModel.server(serverlist[i]));
    server.save(function (err) {
      if (err) return console.error(err);
    });
  } */

  //this is bulk insert
  /**
    array = [{server1}, {server2}, ...]
    Server.insertMany(array, callback);
  **/
  Server.insertMany(serverlist, (err, docs)=>{
    console.log("insert many operation..." + (err ? err : ''));
  });
}

serverDBOperations.deleteServer = (serverIp) =>{
  Server.findOneAndRemove({serverIp: serverIp}, function(err){
    console.log("Error occured while deleting server : ", serverIp);
  });
}

serverDBOperations.deleteServers = () =>{
  Server.remove().exec();
}


/*
* public db API
*/
export default serverDBOperations;
