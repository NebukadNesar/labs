'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******* connection to mongo db settings *******/
_mongoose2.default.connect("mongodb://localhost/serverManagement"); /**
                                                                    * @auther:burhanc
                                                                    * db schema creation
                                                                    **/


var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("mongo db connection established...");
});

var serverSchema = new _mongoose2.default.Schema({
  serverName: String,
  serverLocation: { type: String, required: true },
  serverIp: { type: String, required: true, unique: true },
  serialNumber: String,
  relatedGroup: String,
  relatedProject: String,
  serverEndDate: Date,
  serverAdmin: { type: String },
  serverPasswd: { type: String }
});

var adminSchema = new _mongoose2.default.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

var Server = _mongoose2.default.model('servers', serverSchema);
var Admin = _mongoose2.default.model("adminaccounts", adminSchema);

/****** connection to mongo db settings *******/

//export schema models
module.exports = {
  Server: Server,
  Admin: Admin
};
//# sourceMappingURL=dbSchemaCreators.js.map