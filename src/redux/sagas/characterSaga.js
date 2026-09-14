import { call, put, takeLatest } from 'redux-saga/effects';
import { requestCharacter } from '../../api/charactersApi';
import {
  fetchCharacter,
  fetchCharacterSuccess,
  fetchCharacterFailure,
  fetchCharacterNotFound,
} from '../slices/characterSlice';

function* handleFetchCharacter(action) {
  try {
    const { data } = yield call(requestCharacter, action.payload);
    yield put(fetchCharacterSuccess(data));
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(fetchCharacterNotFound());
      return;
    }
    yield put(fetchCharacterFailure(err.message));
  }
}

export default function* characterSaga() {
  yield takeLatest(fetchCharacter.type, handleFetchCharacter);
}
