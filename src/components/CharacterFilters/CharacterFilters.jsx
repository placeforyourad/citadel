import { useEffect, useState } from 'react';
import {
  CHARACTER_SPECIES,
  CHARACTER_STATUS_LABELS,
  SEARCH_DEBOUNCE_MS,
} from '../../constants/characters';
import styles from './CharacterFilters.module.css';

export default function CharacterFilters({ filters, onChange }) {
  const [name, setName] = useState(filters.name);

  useEffect(() => {
    setName(filters.name);
  }, [filters.name]);

  useEffect(() => {
    if (name === filters.name) return;

    const timer = setTimeout(() => onChange({ name }), SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [name, filters.name, onChange]);

  return (
    <div className={styles.filters}>
      <label className="field">
        <span className="label">Имя</span>
        <input
          className="control"
          type="search"
          value={name}
          placeholder="Поиск..."
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label className="field">
        <span className="label">Статус</span>
        <select
          className="control"
          value={filters.status}
          onChange={(event) => onChange({ status: event.target.value })}
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
        <span className="label">Вид</span>
        <select
          className="control"
          value={filters.species}
          onChange={(event) => onChange({ species: event.target.value })}
        >
          <option value="">Любой</option>
          {CHARACTER_SPECIES.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
