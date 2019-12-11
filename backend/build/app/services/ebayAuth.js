"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);
var _api = require('./api'); var _api2 = _interopRequireDefault(_api);

 async function getToken() {
  const { headers, body } = _auth2.default;
  const response = await _api2.default.request({
    url: '/identity/v1/oauth2/token',
    method: 'post',
    headers,
    data: body,
  }).catch((reason) => {
    console.log(reason);
  });
  if (response.data) {
    return response.data.access_token;
  }
  return '';
} exports.default = getToken;
