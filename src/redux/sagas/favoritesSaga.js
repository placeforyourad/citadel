import { select, takeEvery } from 'redux-saga/effects';
import { toggleFavorite } from '../slices/favoritesSlice';

function* persistFavorites() {
  const items = yield select((state) => state.favorites.items);
  try {
    localStorage.setItem('favorites', JSON.stringify(items));
  } catch (err) {
    console.warn('Не удалось сохранить избранное в localStorage:', err);
  }
}

export default function* favoritesSaga() {
  yield takeEvery(toggleFavorite.type, persistFavorites);
}
