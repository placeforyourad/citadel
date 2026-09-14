import { Fragment } from 'react';
import { CHARACTER_GENDER_LABELS } from '../../constants/characters';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import StatusBadge from '../StatusBadge/StatusBadge';
import styles from './CharacterDetails.module.css';

export default function CharacterDetails({ character, loading, error, onRetry }) {
  if (loading) return <div className="spinner" />;

  if (error) {
    return <ErrorMessage text="Не удалось загрузить персонажа" onRetry={onRetry} />;
  }

  if (!character) return null;

  const gender = character.gender.toLowerCase();
  const rows = [
    ['Вид', character.species],
    ['Тип', character.type || '—'],
    ['Пол', CHARACTER_GENDER_LABELS[gender] ?? character.gender],
    ['Происхождение', character.origin.name],
    ['Локация', character.location.name],
    ['Эпизодов', character.episode.length],
  ];

  return (
    <article className={styles.details}>
      <img className={styles.image} src={character.image} alt={character.name} />

      <div className={styles.info}>
        <h1 className={styles.name}>{character.name}</h1>
        <StatusBadge status={character.status} />

        <dl className={styles.rows}>
          {rows.map(([label, value]) => (
            <Fragment key={label}>
              <dt className={styles.label}>{label}</dt>
              <dd className={styles.value}>{value}</dd>
            </Fragment>
          ))}
        </dl>

        <FavoriteButton character={character} />
      </div>
    </article>
  );
}
