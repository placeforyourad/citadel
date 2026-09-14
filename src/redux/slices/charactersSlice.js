import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  info: null,
  loading: false,
  error: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
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
  },
});

export const { fetchCharacters, fetchCharactersSuccess, fetchCharactersFailure } =
  charactersSlice.actions;

export const selectCharactersState = (state) => state.characters;

export default charactersSlice.reducer;
