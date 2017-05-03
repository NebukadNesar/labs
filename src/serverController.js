var serverInfo = require('./serverInfo')()
var serverDBOperations = require('./serverDBOperations')


getAllServers = (callback) => {
  serverDBOperations.findAllServers(callback)
}

getServerDetails = (serverIp,callback) => {
  serverDBOperations.findServer(serverIp, callback);
}

addServer = (server) => {
  //add new server to db
}

addServersBulk = (servers) => {
  serverDBOperations.addServersBulk(servers);
}

pingServer = (serverIp) => {
  var pingresult = "";
  //ping server
  return pingresult;
}

deleteServer = (server) =>{
  //delete server according to its IP
}

deleteServers = () =>{
  //delete server according to its IP
  serverDBOperations.deleteServers();
}

/*
* public server API methods
*/
module.exports = {
  getAllServers: getAllServers,
  getServerDetails: getServerDetails,
  addServer : addServer,
  pingServer : pingServer,
  addServersBulk : addServersBulk,
  deleteServer : deleteServer,
  deleteServers: deleteServers
}
