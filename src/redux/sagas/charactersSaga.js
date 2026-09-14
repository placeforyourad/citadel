import { call, put, takeLatest } from 'redux-saga/effects';
import { requestCharacters } from '../../api/charactersApi';
import {
  fetchCharacters,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from '../slices/charactersSlice';

const EMPTY_RESULT = { results: [], info: null };

function* handleFetchCharacters(action) {
  try {
    const { data } = yield call(requestCharacters, action.payload);
    yield put(fetchCharactersSuccess(data));
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(fetchCharactersSuccess(EMPTY_RESULT));
      return;
    }
    yield put(fetchCharactersFailure(err.message));
  }
}

export default function* charactersSaga() {
  yield takeLatest(fetchCharacters.type, handleFetchCharacters);
}
