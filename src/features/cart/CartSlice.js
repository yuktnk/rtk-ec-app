import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

// 買い物かごの初期値
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [], amount: 0, total: 0 };
    },
  },
});

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
