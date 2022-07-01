import React, { useEffect } from "react";
import style from "./favourites.module.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../Components/Cards/Card";

import FavouritesComponent from "../../Components/Favourites/FavouritesComponent";
import Empty from "../../Components/Empty/Empty";

const Container = styled.div`
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
  min-height: 600px;
`;

const Favourites = () => {
  const search = useSelector((state) => state.search.searchInput);
  const favor = useSelector((state) => state.favourites.products);

  const timeLeft = (start, end) => {
    start = new Date(start.substring(0, 10));
    end = new Date(end.substring(0, 10));
    console.log(start);
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / _MS_PER_DAY);
    return diffDays;
  };

  return (
    <>
      {favor.length !== 0 ? (
        <FavouritesComponent />
      ) : (
        <Empty location={"Seçilmiş elanlar boşdur"} />
      )}
    </>
  );
};

export default Favourites;
