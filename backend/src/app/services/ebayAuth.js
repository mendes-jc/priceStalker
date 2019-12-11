import authConfig from '../../config/auth';
import api from './api';

export default async function getToken() {
  const { headers, body } = authConfig;
  const response = await api.request({
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
}
