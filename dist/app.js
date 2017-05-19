'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _clientRoutes = require('./clientRoutes');

var _clientRoutes2 = _interopRequireDefault(_clientRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @auther:burhanc
* app with expressjs
**/
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

app.use('/api', _routes2.default);
app.use('/client', _clientRoutes2.default);

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});

exports.default = app;
//# sourceMappingURL=app.js.map