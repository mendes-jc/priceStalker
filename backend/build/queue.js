"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _Agenda = require('./app/lib/Agenda'); var _Agenda2 = _interopRequireDefault(_Agenda);

_Agenda2.default.start();
console.log('Queue started');
