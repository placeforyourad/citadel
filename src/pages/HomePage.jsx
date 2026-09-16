import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCharactersQuery } from '../hooks/useCharactersQuery';
import { AsyncBoundary, CharacterFilters, CharactersList, Pagination } from '../components';
import {
  fetchCharacters,
  selectCharactersState,
} from '../redux/slices/charactersSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const { query, setPage } = useCharactersQuery();
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
    <main className="page">
      <div className="page-header">
        <h1 className="title">Персонажи «Рика и Морти»</h1>
        <Link className="btn btn--soft" to="/favorites">
          ⭐ Избранное
        </Link>
      </div>

      <CharacterFilters />

      <AsyncBoundary
        loading={loading}
        error={error}
        onRetry={() => dispatch(fetchCharacters(query))}
      >
        <CharactersList
          characters={items}
        />
      </AsyncBoundary>

      {showPagination && (
        <Pagination page={query.page} info={info} onChange={handlePageChange} />
      )}
    </main>
  );
}
