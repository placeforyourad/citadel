import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import StatusBadge from '../StatusBadge/StatusBadge';
import styles from './CharacterCard.module.css';

export default function CharacterCard({ character }) {
  return (
    <article className={styles.card}>
      <Link className={styles.link} to={`/character/${character.id}`}>
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
          loading="lazy"
        />
        <h2 className={styles.name}>{character.name}</h2>
      </Link>

      <div className={styles.meta}>
        <StatusBadge status={character.status} />
        <span className={styles.species}>{character.species}</span>
      </div>

      <FavoriteButton character={character} />
    </article>
  );
}