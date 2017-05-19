/**
* @auther:burhanc
* controller api
**/
import serverDBOperations from '../db/serverDBOperations'

let serverDBController = {}

serverDBController.getAllServers = (callback) => {
  serverDBOperations.findAllServers(callback)
}

serverDBController.getServerDetails = (serverIp,callback) => {
  serverDBOperations.findServer(serverIp, callback);
}

serverDBController.addServer = (server) => {
  //add new server to db
}

serverDBController.addServersBulk = (servers) => {
  console.log(servers);
  serverDBOperations.addServersBulk(servers);
}

serverDBController.pingServer = (serverIp) => {
  var pingresult = "";
  //ping server
  return pingresult;
}

serverDBController.deleteServer = (server) =>{
  //delete server according to its IP
}

serverDBController.deleteServers = () =>{
  //delete server according to its IP
  serverDBOperations.deleteServers();
}

/*
* public server API methods
*/
export default serverDBController;
