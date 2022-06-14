import React, { useState } from "react";
import style from "./search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { writing } from "./searchSlice";
const Search = () => {
  const dispatch = useDispatch();

  const onChange = (event) => {
    const searchText = event.target.value;
    dispatch(writing(searchText));
  };

  return (
    <div>
      <input type="search" placeholder="Axtar" onChange={onChange} />
    </div>
  );
};

export default Search;
