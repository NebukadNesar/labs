'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientController = {}; /**
                           *@auther:burhanc
                           */


clientController.serveClient = function (req, res) {
      res.sendFile(_path2.default.join(__dirname + '../../../public/views/index.html'));
};

//public
exports.default = clientController;
//# sourceMappingURL=clientController.js.map