import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null,
  loading: false,
  error: null,
  notFound: false,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    fetchCharacter(state) {
      state.loading = true;
      state.error = null;
      state.notFound = false;
    },
    fetchCharacterSuccess(state, action) {
      state.item = action.payload;
      state.loading = false;
    },
    fetchCharacterFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    fetchCharacterNotFound(state) {
      state.item = null;
      state.notFound = true;
      state.loading = false;
    },
  },
});

export const {
  fetchCharacter,
  fetchCharacterSuccess,
  fetchCharacterFailure,
  fetchCharacterNotFound,
} = characterSlice.actions;

export const selectCharacterState = (state) => state.character;

export default characterSlice.reducer;
