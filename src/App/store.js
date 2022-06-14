import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../Features/Search/searchSlice";
import favouritesReducer from "../Features/Favourites/favouritesSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favourites: favouritesReducer,
  },
});
