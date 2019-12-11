import {
  call,
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';

import api from '../../../services/api';
import { getAlertsSuccess } from './actions';

function* getAlerts({ email }) {
  try {
    const response = yield call(api.request, {
      method: 'GET',
      url: '/alerts',
      params: {
        email,
      },
    });

    yield put(getAlertsSuccess(response.data.alerts));
  } catch (error) {
    console.log(error);
  }
}

function* setAlert({ id, data }) {
  try {
    const response = yield call(api.request, {
      method: 'PUT',
      url: `/alerts/${id}`,
      data,
    });

    yield put(getAlertsSuccess(response.data.alerts));
  } catch (error) {
    console.log(error);
  }
}

function* deleteAlert({ id }) {
  try {
    const response = yield call(api.request, {
      method: 'DELETE',
      url: `/alerts/${id}`,
    });

    yield put(getAlertsSuccess(response.data.alerts));
  } catch (error) {
    console.log(error);
  }
}

function* createAlert({ email }) {
  try {
    const response = yield call(api.request, {
      method: 'POST',
      url: '/alerts',
      data: {
        email,
        searchPhrase: 'Some Product',
        interval: 30,
      },
    });
    yield put(getAlertsSuccess(response.data.alerts));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest('@alerts/GET_REQUEST', getAlerts),
  takeLatest('@alerts/SET_REQUEST', setAlert),
  takeLatest('@alerts/REMOVE_REQUEST', deleteAlert),
  takeLatest('@alerts/CREATE_REQUEST', createAlert),
]);
