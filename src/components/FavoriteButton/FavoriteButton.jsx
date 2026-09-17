import { useDispatch, useSelector } from 'react-redux';
import { isFavorite, toggleFavorite } from '../../redux/slices/favoritesSlice';

export default function FavoriteButton({ character }) {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => isFavorite(state, character.id));

  return (
    <button
      type="button"
      className={`btn btn--block btn--soft${favorite ? ' btn--primary' : ''}`}
      aria-pressed={favorite}
      onClick={() => dispatch(toggleFavorite(character))}
    >
      {favorite ? '✖ Убрать' : '⭐ В избранное'}
    </button>
  );
}
