'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _clientController = require('./middleware/clientController');

var _clientController2 = _interopRequireDefault(_clientController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/static', _express2.default.static(_path2.default.join(__dirname, '../public')));
app.get('/', _clientController2.default.serveClient);

var clientRoutes = app;
module.exports = clientRoutes;
//# sourceMappingURL=clientRoutes.js.map