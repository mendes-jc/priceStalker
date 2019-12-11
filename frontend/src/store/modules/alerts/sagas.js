import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../../services/api';
import { getAlertsSuccess } from './actions';

function* getAlerts({ email }) {
  const response = yield call(api.request, {
    method: 'GET',
    url: '/alerts',
    params: {
      email,
    },
  });

  yield put(getAlertsSuccess(response.data));
}

function* setAlert({ id, data }) {
  yield call(api.request, {
    method: 'PUT',
    url: `/alerts/${id}`,
    data,
  });
}

function* deleteAlert({ id }) {
  yield call(api.request, {
    method: 'DELETE',
    url: `/alerts/${id}`,
  });
}

function* createAlert({ email }) {
  yield call(api.request, {
    method: 'POST',
    url: '/alerts',
    data: {
      email,
      searchPhrase: 'Some Product',
      interval: 30,
    },
  });
}

export default all([
  takeLatest('@alerts/GET_REQUEST', getAlerts),
  takeLatest('@alerts/SET_REQUEST', setAlert),
  takeLatest('@alerts/REMOVE_REQUEST', deleteAlert),
  takeLatest('@alerts/CREATE_REQUEST', createAlert),
]);
