import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterFilters from '../components/CharacterFilters/CharacterFilters';
import CharactersList from '../components/CharactersList/CharactersList';
import Pagination from '../components/Pagination/Pagination';
import { useCharactersQuery } from '../hooks/useCharactersQuery';
import {
  fetchCharacters,
  selectCharactersState,
} from '../redux/slices/charactersSlice';
import styles from './HomePage.module.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const { query, setFilters, setPage } = useCharactersQuery();
  const { items, info, loading, error } = useSelector(selectCharactersState);

  useEffect(() => {
    dispatch(fetchCharacters(query));
  }, [dispatch, query]);

  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showPagination = !loading && !error && items.length > 0;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Персонажи «Рика и Морти»</h1>

      <CharacterFilters filters={query} onChange={setFilters} />

      <CharactersList
        characters={items}
        loading={loading}
        error={error}
        onRetry={() => dispatch(fetchCharacters(query))}
      />

      {showPagination && (
        <Pagination page={query.page} info={info} onChange={handlePageChange} />
      )}
    </main>
  );
}
