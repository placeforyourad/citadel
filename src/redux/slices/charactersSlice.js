import { createSlice } from '@reduxjs/toolkit';

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    info: null,
    loading: false,
    error: null,
    filters: {
      name: '',
      status: '',
      species: '',
    },
    page: 1,
  },
  reducers: {
    fetchCharacters(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess(state, action) {
      state.items = action.payload.results;
      state.info = action.payload.info;
      state.loading = false;
    },
    fetchCharactersFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    setFilter(state, action) {
      const { name, value } = action.payload;
      state.filters[name] = value;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const {
  fetchCharacters,
  fetchCharactersSuccess,
  fetchCharactersFailure,
  setFilter,
  setPage,
} = charactersSlice.actions;

export default charactersSlice.reducer;
