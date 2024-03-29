import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import api from '../../../services/api';

import { getUserSuccess } from './actions';

function* getUser({ email }) {
  try {
    const response = yield call(api.request, {
      method: 'GET',
      url: '/users',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        email,
      },
    });

    const firstAccess = response.status === 204;
    console.log(firstAccess);
    yield put(getUserSuccess({
      ...response.data,
      firstAccess,
      email,
    }));
  } catch (error) {
    console.log(error);
  }
}

function* newUser({ user }) {
  try {
    const response = yield call(api.request, {
      method: 'POST',
      url: '/users',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        ...user,
      },
    });

    const firstAccess = false;

    yield put(getUserSuccess({
      ...response.data.user,
      firstAccess,
    }));
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest('@user/GET_REQUEST', getUser),
  takeLatest('@user/NEW_REQUEST', newUser),
]);
