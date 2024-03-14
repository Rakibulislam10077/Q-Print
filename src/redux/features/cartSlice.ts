import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/interfaces/product.interface";

const initialState: any = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct&{variant:{variantId:string,variantName:string}}>) => {
      const alreadyAdded = state.products.find(
        (product: IProduct) => product._id === action.payload._id
      );
      if (alreadyAdded) {
        alreadyAdded.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const alreadyAdded = state.products.find(
        (product: IProduct) => product._id === action.payload._id
      );
      if (alreadyAdded && alreadyAdded.quantity > 1) {
        alreadyAdded.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product: IProduct) => product._id !== action.payload._id
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product: IProduct) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart, removeOneFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;