import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { CharacterCard } from '../components';
import { selectFavorites } from '../redux/slices/favoritesSlice';

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();

  return (
    <main className="page">
      <div className="page-header">
        <h1 className="title">Избранные</h1>

        <button type="button" className="btn" onClick={() => navigate(-1)}>
          ← Назад
        </button>
      </div>

      {favorites.length === 0 ? (
        <div className="message">
          <p>У вас пока нет избранных персонажей</p>
          <Link className="btn btn--primary" to="/">
            На главную
          </Link>
        </div>
      ) : (
        <div className="grid">
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </main>
  );
}
