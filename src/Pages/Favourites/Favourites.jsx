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

  return (
    <Container>
      {favor
        .filter((item) =>
          item.name.toLowerCase().replace(/\s/g, "").includes(search)
        )
        .map((item) => {
          const { id, name, company, about, date, price, category, image } =
            item;

          return (
            <div key={item.id}>
              <Card
                id={id}
                name={name}
                company={company}
                about={about}
                date={date}
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
