import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    writing: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { writing } = searchSlice.actions;

export default searchSlice.reducer;
