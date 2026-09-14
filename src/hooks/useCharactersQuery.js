import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE } from '../constants/characters';

function buildSearchParams({ name, status, species, page }) {
  const params = new URLSearchParams();

  if (name) params.set('name', name);
  if (status) params.set('status', status);
  if (species) params.set('species', species);
  if (page !== DEFAULT_PAGE) params.set('page', String(page));

  return params;
}

export function useCharactersQuery() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(() => {
    const { name = '', status = '', species = '', page } = Object.fromEntries(searchParams);
    return { name, status, species, page: Number(page) || DEFAULT_PAGE };
  }, [searchParams]);

  const setFilters = useCallback(
    (patch) => {
      const next = { ...query, ...patch, page: DEFAULT_PAGE };
      setSearchParams(buildSearchParams(next), { replace: true });
    },
    [query, setSearchParams],
  );

  const setPage = (page) => setSearchParams(buildSearchParams({ ...query, page }));

  return { query, setFilters, setPage };
}
