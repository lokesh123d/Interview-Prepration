import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItems: (state) => {
      state.value += 1;
    },
    removeCartItems: (state) => {
      state.value > 0 ? (state.value -= 1) : state;
    },
    clearCartItems: (state) => {
      state.value = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addCartItems, removeCartItems, clearCartItems } =
  cartSlice.actions;
