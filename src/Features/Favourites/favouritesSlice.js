import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("favouriteItems")
    ? JSON.parse(localStorage.getItem("favouriteItems"))
    : [],
  quantity: localStorage.getItem("favouriteQuantity")
    ? JSON.parse(localStorage.getItem("favouriteQuantity"))
    : 0,
};

export const favouritesSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.data);
      localStorage.setItem("favouriteItems", JSON.stringify(state.products));
      localStorage.setItem("favouriteQuantity", JSON.stringify(state.quantity));
    },

    deleteProduct: (state, action) => {
      state.quantity -= 1;
      let pure = current(state.products);
      let end = pure.filter((item) => item._id !== action.payload.data._id);
      state.products = [...end];
      localStorage.setItem("favouriteItems", JSON.stringify(state.products));
      localStorage.setItem("favouriteQuantity", JSON.stringify(state.quantity));
    },
  },
});

export const { addProduct, deleteProduct } = favouritesSlice.actions;
export default favouritesSlice.reducer;

// state.quantity += 1;
// state.products.push(action.payload);
