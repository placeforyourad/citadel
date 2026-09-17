import { useCallback, useState } from 'react';
import {
  CHARACTER_SPECIES,
  CHARACTER_STATUS_LABELS,
  SEARCH_DEBOUNCE_MS,
} from '../../constants/characters';
import { useCharactersQuery } from '../../hooks/useCharactersQuery';
import { debounce } from '../../utils/debounce';
import styles from './CharacterFilters.module.css';

export default function CharacterFilters() {
  const { query, setFilters } = useCharactersQuery();

  const [name, setName] = useState(query.name);
  const pushName = useCallback(
    debounce((value) => setFilters({ name: value }), SEARCH_DEBOUNCE_MS),
    [setFilters],
  );

  const handleNameChange = (event) => {
    setName(event.target.value);
    pushName(event.target.value);
  };

  return (
    <form className={styles.filters}>
      <label className="field">
        <span className="field-label">Имя</span>
        <input
          className="control"
          type="search"
          value={name}
          placeholder="Поиск..."
          onChange={handleNameChange}
        />
      </label>

      <label className="field">
        <span className="field-label">Статус</span>
        <select
          className="control"
          value={query.status}
          onChange={(event) => setFilters({ status: event.target.value })}
        >
          <option value="">Любой</option>
          {Object.entries(CHARACTER_STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span className="field-label">Вид</span>
        <select
          className="control"
          value={query.species}
          onChange={(event) => setFilters({ species: event.target.value })}
        >
          <option value="">Любой</option>
          {CHARACTER_SPECIES.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
