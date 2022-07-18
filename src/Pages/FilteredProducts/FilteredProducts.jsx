import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Cards/Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

import InfiniteScroll from "react-infinite-scroll-component";
import { VirtuosoGrid } from "react-virtuoso";

const CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  textAlign: "center",
};

const Container = styled.div`
  max-width: 1600px;
  /* min-height: 800px; */
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  gap: 25px;
`;

const ItemContainer = styled.div`
  padding: 0.5rem;
  width: 33%;
  display: flex;
  flex: none;
  align-content: stretch;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 300px) {
    width: 100%;
  }
`;

const ItemWrapper = styled.div`
  flex: 1;
  text-align: center;
  font-size: 80%;
  padding: 1rem 1rem;
  border: 1px solid var(gray);
  white-space: nowrap;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* color: red;
  background-color: #7856ff; */
`;

const Item = styled.div`
  width: 100%;
  height: 200px;
  background-color: #7856ff;
  color: red;
`;

const FilteredProducts = () => {
  const { categoryName } = useParams();
  const [data, setData] = useState([]);
  const search = useSelector((state) => state.search.searchInput);

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

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
        search
          ? `http://localhost:3003/api/product/category/?category=${categoryName}&search=${search}$page=0`
          : `http://localhost:3003/api/product/category/?category=${categoryName}&page=0`
      );

      setData(data.posts);
    };

    if (search.length === 0 || search.length > 2) {
      setHasMore(true);
      setPage(1);
      getData();
    }
  }, [search, categoryName]);

  const fetchPosts = async () => {
    const { data } = await axios(
      `http://localhost:3003/api/product/category/?page=${page}&search=${search}&category=${categoryName}`
    );

    return data.posts;
  };

  const fetchData = async () => {
    const postsFromServer = await fetchPosts();
    setData([...data, ...postsFromServer]);

    if (postsFromServer.length === 0 || postsFromServer.length < 8) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <>
      <VirtuosoGrid
        style={{ height: "80vh" }}
        totalCount={data.length}
        overscan={20}
        endReached={fetchData}
        components={{
          Item: ItemContainer,
          List: ListContainer,
          ScrollSeekPlaceholder: ({ height, width, index }) => (
            <ItemContainer>
              <ItemWrapper>{"--"}</ItemWrapper>
            </ItemContainer>
          ),
        }}
        data={data}
        itemContent={(index) => (
          <Container>
            <div key={index}>
              <Card
                _id={data[index]._id}
                name={data[index].kampaniyaName}
                company={data[index].owner}
                about={data[index].aboutProduct}
                date={timeLeft(data[index].endDate)}
                price={data[index].price}
                category={data[index].category}
                image={data[index].image}
                data={data[index]}
              />
            </div>
          </Container>
        )}
        scrollSeekConfiguration={{
          enter: (velocity) => Math.abs(velocity) > 2000,
          exit: (velocity) => Math.abs(velocity) < 30,
        }}
      />
    </>
  );
};

export default FilteredProducts;
