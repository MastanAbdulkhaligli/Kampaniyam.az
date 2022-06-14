import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Cards/Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const FilteredProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  const search = useSelector((state) => state.search.searchInput);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:3001/cards");
      let temp = data.filter((item) => item.category === categoryName);
      setData(temp);
    };

    getData();
  }, [categoryName]);

  return (
    <Container>
      {/* {data.map((item) => {
      const { id, name, company, about, date, price, category, image } = item;
      return (
        <div key={id}>
          <Card
            id={id}
            name={name}
            company={company}
            about={about}
            date={date}
            price={price}
            category={category}
            image={image}
          />
        </div>
      );
    })} */}
      {data
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

export default FilteredProducts;
