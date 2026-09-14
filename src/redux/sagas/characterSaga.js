import { call, put, takeLatest } from 'redux-saga/effects';
import { requestCharacter } from '../../api/charactersApi';
import { router } from '../../router/router';
import {
  fetchCharacter,
  fetchCharacterSuccess,
  fetchCharacterFailure,
} from '../slices/characterSlice';

function* handleFetchCharacter(action) {
  try {
    const { data } = yield call(requestCharacter, action.payload);
    yield put(fetchCharacterSuccess(data));
  } catch (err) {
    if (err.response?.status === 404) {
      yield call([router, router.navigate], '/404', { replace: true });
      return;
    }
    yield put(fetchCharacterFailure(err.message));
  }
}

export default function* characterSaga() {
  yield takeLatest(fetchCharacter.type, handleFetchCharacter);
}
