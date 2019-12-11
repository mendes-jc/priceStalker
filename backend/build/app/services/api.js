"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const api = _axios2.default.create({
  baseURL: 'https://api.ebay.com/',
});

exports. default = api;
