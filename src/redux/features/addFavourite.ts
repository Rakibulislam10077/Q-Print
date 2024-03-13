import {  createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: any = {
    favorites: [],
};


const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<any>) => {
            const alreadyAdded = state.favorites.find((favorite:any) => favorite._id === action.payload._id);
            if (alreadyAdded) {
                alreadyAdded.quantity += 1;
            }
            else {
                state.favorites.push({ ...action.payload, quantity: 1 });
            }
        },
        removeOneFromFavorite: (state, action: PayloadAction<any>) => {
            const alreadyAdded = state.favorites.find((favorite: any) => favorite._id === action.payload._id);
            if (alreadyAdded && alreadyAdded.quantity > 1) {
                alreadyAdded.quantity -= 1;
            }
            else {
                state.favorites = state.favorites.filter((favorite: any) => favorite._id !== action.payload._id);
            }
        },
        removeFromFavorite: (state, action) => {
            state.favorites = state.favorites.filter((favorite: any) => favorite._id !== action.payload._id);
        },
    }
});

export const { addToFavorite, removeFromFavorite, removeOneFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;