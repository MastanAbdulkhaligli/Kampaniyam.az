import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
};

export const favouritesSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.data);
    },

    deleteProduct: (state, action) => {
      state.quantity -= 1;
      let pure = current(state.products);
      let end = pure.filter((item) => item.id !== action.payload.data.id);
      state.products = [...end];
    },
  },
});

export const { addProduct, deleteProduct } = favouritesSlice.actions;
export default favouritesSlice.reducer;

// state.quantity += 1;
// state.products.push(action.payload);
