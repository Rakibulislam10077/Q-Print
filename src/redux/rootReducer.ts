import { baseApi } from "./api/baseApi";
import cartSlice from "./features/cartSlice";
import addFavourite from "./features/addFavourite";
import counter from "./features/counter";
export const reducer ={
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice,
    favourite: addFavourite,
    counter: counter
}