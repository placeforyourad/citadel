import { createSlice } from '@reduxjs/toolkit';

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem('favorites')) ?? [];
  } catch {
    return [];
  }
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { items: loadFavorites() },
  reducers: {
    toggleFavorite(state, action) {
      const character = action.payload;
      const exists = state.items.some((c) => c.id === character.id);
      if (exists) {
        state.items = state.items.filter((c) => c.id !== character.id);
      } else {
        state.items.push(character);
      }
    },
    removeFavorite(state, action) {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
  },
});

export const { toggleFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
