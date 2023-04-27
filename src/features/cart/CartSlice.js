import { createSlice } from "@reduxjs/toolkit";

// 買い物かごの初期値
const initialState = {
  cartItems: [],
  amaont: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
