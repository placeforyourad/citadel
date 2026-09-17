import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE } from '../constants/characters';

function withPatch(prev, patch) {
  const next = new URLSearchParams(prev);

  Object.entries(patch).forEach(([key, value]) => {
    if (value) next.set(key, value);
    else next.delete(key);
  });

  return next;
}

export function useCharactersQuery() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(() => {
    const { name = '', status = '', species = '', page } = Object.fromEntries(searchParams);
    return { name, status, species, page: Number(page) || DEFAULT_PAGE };
  }, [searchParams]);

  const setFilters = useCallback(
    (patch) => setSearchParams((prev) => withPatch(prev, { ...patch, page: '' }), { replace: true }),
    [setSearchParams],
  );

  const setPage = useCallback(
    (page) => setSearchParams((prev) => withPatch(prev, { page: page === DEFAULT_PAGE ? '' : page })),
    [setSearchParams],
  );

  return { query, setFilters, setPage };
}
