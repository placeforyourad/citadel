import { select, takeEvery } from 'redux-saga/effects';
import { toggleFavorite, removeFavorite } from '../slices/favoritesSlice';

function* persistFavorites() {
  const items = yield select((state) => state.favorites.items);
  try {
    localStorage.setItem('favorites', JSON.stringify(items));
  } catch {
    // localStorage может быть недоступен (приватный режим, превышена квота) —
    // это не должно ронять сагу
  }
}

export default function* favoritesSaga() {
  yield takeEvery([toggleFavorite.type, removeFavorite.type], persistFavorites);
}
