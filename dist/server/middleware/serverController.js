'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serverInfo = require('../../modal/serverInfo');

var _serverInfo2 = _interopRequireDefault(_serverInfo);

var _serverDBController = require('../../controllers/serverDBController');

var _serverDBController2 = _interopRequireDefault(_serverDBController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
*@auther:burhanc
*/

var serverController = {};

var serverModel = (0, _serverInfo2.default)();

serverController.getAllServers = function (req, res) {
  _serverDBController2.default.getAllServers(function (serverList) {
    serverList = serverList || [];
    res.send({ "serverList": serverList, "listcount": serverList.length });
  });
};

serverController.refresh = function (req, res) {
  /**not implemented**/
  res.send("refresh-serverList");
};

serverController.delete = function (req, res) {
  _serverDBController2.default.deleteServers();
  res.send("deleted");
};

serverController.getServerInfo = function (req, res) {
  _serverDBController2.default.getServerDetails(req.params.serverip, function (serverDetails) {
    serverDetails = serverDetails || serverModel.server();
    res.send({ "serverDetails": serverDetails });
  });
};

serverController.addBulkServers = function (req, res) {
  var serverlist = [];
  for (var i = 0; i < 3; i++) {
    var newserver = serverModel.server();
    newserver.serverName = "Servername " + i;
    newserver.serverIp = "192.168." + i + ".110";
    newserver.serialNumber = "XyZTKLMN";
    newserver.serverEndDate = new Date();
    newserver.serverLocation = "Location of server " + i;
    console.log(newserver);
    serverlist.push(newserver);
  }
  _serverDBController2.default.addServersBulk(serverlist);
  res.send("added");
};

serverController.upload = function (req, res) {
  try {
    JSON.stringify(req.body);
    var list = req.body;
    console.log(list.length, list[0], list[0].serverName);
    if (Object.prototype.toString.call(list) !== '[object Array]') {
      list = [];
      list.push(req.body);
    }
    _serverDBController2.default.addServersBulk(list).then(function () {
      res.send("added");
    });
  } catch (e) {}
};

//public
exports.default = serverController;
//# sourceMappingURL=serverController.js.map