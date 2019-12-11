import { all } from 'redux-saga/effects';

import user from './user/sagas';
import alerts from './alerts/sagas';

export default function* rootSaga() {
  return yield all([
    user,
    alerts,
  ]);
}
