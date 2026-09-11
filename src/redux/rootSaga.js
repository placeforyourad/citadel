import { all, fork } from 'redux-saga/effects';
import charactersSaga from './sagas/charactersSaga';
import favoritesSaga from './sagas/favoritesSaga';

export default function* rootSaga() {
  yield all([fork(charactersSaga), fork(favoritesSaga)]);
}
