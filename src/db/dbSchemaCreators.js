/**
* @auther:burhanc
* db schema creation
**/
import mongoose from 'mongoose'

/******* connection to mongo db settings *******/
mongoose.connect("mongodb://localhost/serverManagement");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log("mongo db connection established..."); });

var serverSchema = new mongoose.Schema({
  serverName: String,
  serverLocation:{ type: String, required: true},
  serverIp:      { type: String, required: true, unique: true },
  serialNumber:  String,
  relatedGroup:  String,
  relatedProject:String,
  serverEndDate: Date,
  serverAdmin:   { type: String},
  serverPasswd:  { type: String}
});

var adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true}
});


var Server = mongoose.model('servers', serverSchema);
var Admin = mongoose.model("adminaccounts", adminSchema);

/****** connection to mongo db settings *******/


//export schema models
module.exports = {
  Server:Server,
  Admin:Admin
}
