"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _qs = require('qs'); var _qs2 = _interopRequireDefault(_qs);

// const body = new FormData();
// body.append('grant_type', 'client_credentials');
// body.append('scope', 'https://api.ebay.com/oauth/api_scope');

const body = _qs2.default.stringify({
  grant_type: 'client_credentials',
  scope: 'https://api.ebay.com/oauth/api_scope',
});
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: process.env.AUTH_TOKEN,
};

exports. default = {
  body,
  headers,
};
