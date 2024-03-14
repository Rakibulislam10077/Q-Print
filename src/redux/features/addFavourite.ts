import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/interfaces/product.interface';


const initialState: any = {
  favorites: [],
  allItems: []
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {

    addAndRemoveFavorite: (state, action: PayloadAction<IProduct>) => {
        const alreadyAddedIndex = state.favorites.findIndex(
            (favorite: any) => favorite._id === action.payload._id
        );
    
        if (alreadyAddedIndex !== -1) {
            // If already added, remove from favorites
            state.favorites.splice(alreadyAddedIndex, 1);
        } else {
            // If not added, add to favorites with quantity 1
            state.favorites.push({ ...action.payload, quantity: 1 });
        }
    },


    removeOneFromFavorite: (state, action: PayloadAction<IProduct>) => {
      const alreadyAdded = state.favorites.find(
        (favorite: any) => favorite._id === action.payload._id
      );
      if (alreadyAdded && alreadyAdded.quantity > 1) {
        alreadyAdded.quantity -= 1;
      } else {
        state.favorites = state.favorites.filter(
          (favorite: any) => favorite._id !== action.payload._id
        );
      }
    },
    removeFromFavorite: (state, action: PayloadAction<IProduct>) => {
      state.favorites = state.favorites.filter(
        (favorite: any) => favorite._id !== action.payload._id
      );
    },
  },
});

export const { addAndRemoveFavorite, removeFromFavorite, removeOneFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;



