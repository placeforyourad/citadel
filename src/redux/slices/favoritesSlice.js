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
      const index = state.items.findIndex((c) => c.id === character.id);

      if (index === -1)
        state.items.push(character);
      else
        state.items.splice(index, 1);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;

export const isFavorite = (state, characterId) =>
  state.favorites.items.some((character) => character.id === characterId);

export default favoritesSlice.reducer;
