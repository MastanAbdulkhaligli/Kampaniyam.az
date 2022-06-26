import React, { useEffect } from "react";
import style from "./favourites.module.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../../Components/Cards/Card";

const Container = styled.div`
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
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
    <Container>
      {favor
        .filter((item) =>
          item.kampaniyaName.toLowerCase().replace(/\s/g, "").includes(search)
        )
        .map((item) => {
          const {
            _id,
            kampaniyaName,
            owner,
            aboutProduct,
            startDate,
            endDate,
            price,
            category,
            image,
          } = item;

          return (
            <div key={item._id}>
              <Card
                id={_id}
                name={kampaniyaName}
                company={owner}
                about={aboutProduct}
                date={timeLeft(startDate, endDate)}
                price={price}
                category={category}
                image={image}
                data={item}
              />
            </div>
          );
        })}
    </Container>
  );
};

export default Favourites;
