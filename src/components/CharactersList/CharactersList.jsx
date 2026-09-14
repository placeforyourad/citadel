import CharacterCard from '../CharacterCard/CharacterCard';
import styles from './CharactersList.module.css';

export default function CharactersList({ characters, loading, error, onRetry }) {
  if (loading) return <div className={styles.spinner} />;

  if (error) {
    return (
      <div className={styles.message}>
        <p>Не удалось загрузить персонажей</p>
        <button type="button" className={`btn btn--primary ${styles.retry}`} onClick={onRetry}>
          Повторить
        </button>
      </div>
    );
  }

  if (characters.length === 0) {
    return <p className={styles.message}>Ничего не найдено</p>;
  }

  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
