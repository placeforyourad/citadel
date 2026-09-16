import CharacterCard from '../CharacterCard/CharacterCard';

export default function CharactersList({ characters }) {
  return (
    <div className="grid">
      {characters.length === 0 ? (
        <p className="message">Ничего не найдено</p>
      ) : (
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      )}
    </div>
  );
}
