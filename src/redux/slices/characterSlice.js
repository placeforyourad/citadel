import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    fetchCharacter(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharacterSuccess(state, action) {
      state.item = action.payload;
      state.loading = false;
    },
    fetchCharacterFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchCharacter, fetchCharacterSuccess, fetchCharacterFailure } =
  characterSlice.actions;

export const selectCharacterState = (state) => state.character;

export default characterSlice.reducer;
