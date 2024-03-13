import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from '../redux/features/addTocart'
import favoriteSlice from '../redux/features/addFavourite'
export const store = configureStore({
  reducer: {
[api.reducerPath]: api.reducer,
cart: cartSlice,
favorite: favoriteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch);