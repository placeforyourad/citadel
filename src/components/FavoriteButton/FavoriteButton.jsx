import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite, toggleFavorite } from '../../redux/slices/favoritesSlice';

export default function FavoriteButton({ character }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, character.id));

  return (
    <button
      type="button"
      className={`btn btn--block btn--soft${isFavorite ? ' btn--primary' : ''}`}
      aria-pressed={isFavorite}
      onClick={() => dispatch(toggleFavorite(character))}
    >
      {isFavorite ? '✖ Убрать' : '⭐ В избранное'}
    </button>
  );
}
