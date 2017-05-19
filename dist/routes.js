'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _serverController = require('./middleware/serverController');

var _serverController2 = _interopRequireDefault(_serverController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/getAllServers', _serverController2.default.getAllServers);
app.get('/refresh', _serverController2.default.refresh);
app.get('/delete', _serverController2.default.delete);
app.get('/getServerInfo/:serverip', _serverController2.default.getServerInfo);
app.get('/addBulkServers', _serverController2.default.addBulkServers);
app.post('/upload', _serverController2.default.upload);

var routes = app;
module.exports = routes;
//# sourceMappingURL=routes.js.map