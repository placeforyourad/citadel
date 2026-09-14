import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CharacterPage from '../pages/CharacterPage';
import FavoritesPage from '../pages/FavoritesPage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/character/:id', element: <CharacterPage /> },
  { path: '/favorites', element: <FavoritesPage /> },
  { path: '*', element: <NotFoundPage /> },
]);
