import { all, fork } from 'redux-saga/effects';
import characterSaga from './sagas/characterSaga';
import charactersSaga from './sagas/charactersSaga';
import favoritesSaga from './sagas/favoritesSaga';

export default function* rootSaga() {
  yield all([fork(characterSaga), fork(charactersSaga), fork(favoritesSaga)]);
}
