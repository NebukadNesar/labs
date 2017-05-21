"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serverDBOperations = require("../db/serverDBOperations");

var _serverDBOperations2 = _interopRequireDefault(_serverDBOperations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverDBController = {}; /**
                             * @auther:burhanc
                             * controller api
                             **/


serverDBController.getAllServers = function (callback) {
  _serverDBOperations2.default.findAllServers(callback);
};

serverDBController.getServerDetails = function (serverIp, callback) {
  _serverDBOperations2.default.findServer(serverIp, callback);
};

serverDBController.addServer = function (server) {
  //add new server to db
};

serverDBController.addServersBulk = function (servers) {
  console.log(servers);
  _serverDBOperations2.default.addServersBulk(servers);
};

serverDBController.pingServer = function (serverIp) {
  var pingresult = "";
  //ping server
  return pingresult;
};

serverDBController.deleteServer = function (server) {
  //delete server according to its IP
};

serverDBController.deleteServers = function () {
  //delete server according to its IP
  _serverDBOperations2.default.deleteServers();
};

/*
* public server API methods
*/
exports.default = serverDBController;
//# sourceMappingURL=serverDBController.js.map