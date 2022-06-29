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

  const timeLeft = (end) => {
    end = new Date(end.substring(0, 10));
    const today = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(end - today);
    const diffDays = Math.ceil(diffTime / _MS_PER_DAY);
    return diffDays;
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `http://localhost:3003/api/product?category=${categoryName}`
      );
      setData(data);
    };

    getData();
  }, [categoryName]);

  return (
    <Container>
      {data
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
                _id={_id}
                name={kampaniyaName}
                company={owner}
                about={aboutProduct}
                date={timeLeft(endDate)}
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
