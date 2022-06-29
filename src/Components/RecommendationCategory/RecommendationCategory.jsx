import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../../Components/Cards/Card";

const Container = styled.div`
  max-width: 1600px;
  /* min-height: 800px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const RecommendationCategory = ({ categoryName }) => {
  const [data, setData] = useState([]);

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
    <div>
      <Container>
        {data.map((item) => {
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
    </div>
  );
};

export default RecommendationCategory;
