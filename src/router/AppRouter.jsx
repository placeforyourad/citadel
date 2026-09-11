import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CharacterPage from '../pages/CharacterPage';
import FavoritesPage from '../pages/FavoritesPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/character/:id" element={<CharacterPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
