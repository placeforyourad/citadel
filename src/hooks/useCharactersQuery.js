import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE } from '../constants/characters';

function parseQuery(params) {
  const { name = '', status = '', species = '', page } = Object.fromEntries(params);
  return { name, status, species, page: Number(page) || DEFAULT_PAGE };
}

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

  const query = useMemo(() => parseQuery(searchParams), [searchParams]);

  const setFilters = useCallback(
    (patch) => {
      setSearchParams(
        (prev) => buildSearchParams({ ...parseQuery(prev), ...patch, page: DEFAULT_PAGE }),
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const setPage = useCallback(
    (page) => {
      setSearchParams((prev) => buildSearchParams({ ...parseQuery(prev), page }));
    },
    [setSearchParams],
  );

  return { query, setFilters, setPage };
}
