import { call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchCharacters,
  fetchCharactersSuccess,
  fetchCharactersFailure,
} from '../slices/charactersSlice';

const API_BASE = 'https://rickandmortyapi.com/api/character';

function* handleFetchCharacters() {
  try {
    const { filters, page } = yield select((state) => state.characters);

    const params = { page };
    if (filters.name) params.name = filters.name;
    if (filters.status) params.status = filters.status;
    if (filters.species) params.species = filters.species;

    const { data } = yield call(axios.get, API_BASE, { params });
    yield put(fetchCharactersSuccess(data));
  } catch (err) {
    if (err.response?.status === 404) {
      // API отдаёт 404, если по фильтрам нет ни одного персонажа —
      // это пустой результат, а не ошибка загрузки
      yield put(fetchCharactersSuccess({ results: [], info: null }));
      return;
    }
    yield put(fetchCharactersFailure(err.message));
  }
}

export default function* charactersSaga() {
  yield takeLatest(fetchCharacters.type, handleFetchCharacters);
}
