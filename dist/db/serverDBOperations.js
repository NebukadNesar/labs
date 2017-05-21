"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbSchemaCreators = require("./dbSchemaCreators");

var _dbSchemaCreators2 = _interopRequireDefault(_dbSchemaCreators);

var _serverInfo = require("../modal/serverInfo");

var _serverInfo2 = _interopRequireDefault(_serverInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @auther:burhanc
* db api
*/
var serverModel = (0, _serverInfo2.default)();
var Server = _dbSchemaCreators2.default.Server;
var Admin = _dbSchemaCreators2.default.Admin;
var serverDBOperations = {};

var adminAccount = new Admin({ username: "admin", password: "1234" });

/** adds the default admin account **/

Admin.find({ username: 'admin' }, function (err, accounts) {
  if (accounts.length) {
    console.log('Adming name exists already');
  } else {
    adminAccount.save(function (err) {
      if (err) return console.error(err);
    });
  }
});

/************************************
*    ||  database                   *
*    \/      query operations       *
************************************/

serverDBOperations.findServer = function (serverIp, callback) {
  Server.find({ serverIp: serverIp }, function (err, server) {
    callback(server);
  });
};

serverDBOperations.findAllServers = function (callback) {
  Server.find({}, function (err, servers) {
    callback(servers);
  });
};

serverDBOperations.addServer = function (serverdetails) {
  var server = new Server({ serverDetails: serverDetails });
  server.save(function (err, res) {
    if (err) return console.error(err);
  });
};

serverDBOperations.addServersBulk = function (serverlist) {
  for (var i = 0; i < serverlist.length; i++) {
    var server = new Server(serverModel.server(serverlist[i]));
    server.save(function (err) {
      if (err) return console.error(err);
    });
  }
};

serverDBOperations.deleteServer = function (serverIp) {
  Server.findOneAndRemove({ serverIp: serverIp }, function (err) {
    console.log("Error occured while deleting server : ", serverIp);
  });
};

serverDBOperations.deleteServers = function () {
  Server.remove().exec();
};

/*
* public db API
*/
exports.default = serverDBOperations;
//# sourceMappingURL=serverDBOperations.js.map