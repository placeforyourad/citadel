import { spawn } from 'redux-saga/effects';
import characterSaga from './sagas/characterSaga';
import charactersSaga from './sagas/charactersSaga';
import favoritesSaga from './sagas/favoritesSaga';

export default function* rootSaga() {
  yield spawn(characterSaga);
  yield spawn(charactersSaga);
  yield spawn(favoritesSaga);
}
