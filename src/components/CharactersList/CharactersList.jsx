import CharacterCard from '../CharacterCard/CharacterCard';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function CharactersList({ characters, loading, error, onRetry }) {
  if (loading) return <div className="spinner" />;

  if (error) {
    return <ErrorMessage text="Не удалось загрузить персонажей" onRetry={onRetry} />;
  }

  if (characters.length === 0) {
    return <p className="message">Ничего не найдено</p>;
  }

  return (
    <div className="grid">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
