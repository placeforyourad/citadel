import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import charactersReducer from './slices/charactersSlice';
import favoritesReducer from './slices/favoritesSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefault) =>
    getDefault({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
