/**
*@auther:burhanc
*/

import serverInfo from '../../modal/serverInfo';
import serverDBController from '../../controllers/serverDBController';

let serverController = {};

let serverModel = serverInfo();

serverController.getAllServers = (req, res) => {
  serverDBController.getAllServers((serverList)=>{
    serverList = serverList || [];
    res.send({"serverList":serverList, "listcount":serverList.length});
  });
}

serverController.refresh = (req, res) => {
  /**not implemented**/
  res.send("refresh-serverList");
}

serverController.delete = (req, res) => {
  serverDBController.deleteServers();
  res.send("deleted");
}

serverController.getServerInfo= (req, res) => {
  serverDBController.getServerDetails(req.params.serverip, (serverDetails)=>{
    serverDetails = serverDetails || serverModel.server();
    res.send({"serverDetails": serverDetails});
  });
}

serverController.addBulkServers= (req, res) => {
  var serverlist = [];
  for (var i = 0; i < 3; i++) {
    var newserver = serverModel.server();
    newserver.serverName = "Servername " + i;
    newserver.serverIp = "192.168." + i + ".110";
    newserver.serialNumber = "XyZTKLMN";
    newserver.serverEndDate = new Date();
    newserver.serverLocation = "Location of server " + i;
    console.log(newserver);
    serverlist.push(newserver)
  }
  serverDBController.addServersBulk(serverlist);
  res.send("added");
}


serverController.upload = (req, res) => {
  try {
    JSON.stringify(req.body);
    var list = req.body;
    console.log(list.length, list[0], list[0].serverName);
    if( Object.prototype.toString.call( list ) !== '[object Array]' ) {
      list = [];
      list.push(req.body);
    }
    serverDBController.addServersBulk(list).then(()=>{
        res.send("added");
    });
  } catch (e) {
  }
}

//public
export default serverController;
