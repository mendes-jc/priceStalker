import qs from 'qs';

// const body = new FormData();
// body.append('grant_type', 'client_credentials');
// body.append('scope', 'https://api.ebay.com/oauth/api_scope');

const body = qs.stringify({
  grant_type: 'client_credentials',
  scope: 'https://api.ebay.com/oauth/api_scope',
});
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: process.env.AUTH_TOKEN,
};

export default {
  body,
  headers,
};
