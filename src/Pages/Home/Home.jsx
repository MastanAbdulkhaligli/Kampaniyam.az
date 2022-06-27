import React, { useState, useEffect } from "react";
import Card from "../../Components/Cards/Card";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

const Container = styled.div`
  max-width: 1600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const Home = () => {
  const search = useSelector((state) => state.search.searchInput);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [reset, setReset] = useState(false);

  const timeLeft = (start, end) => {
    start = new Date(start.substring(0, 10));
    end = new Date(end.substring(0, 10));
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / _MS_PER_DAY);
    return diffDays;
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        search
          ? `http://localhost:3003/api/product/pagination?page=0&search=${search}`
          : `http://localhost:3003/api/product/pagination?page=0`
      );

      setData(data.posts);
    };

    if (search.length === 0 || search.length > 2) {
      setHasMore(true);
      setPage(1);
      getData();
    }

    console.log(page);
  }, [search]);

  const fetchPosts = async () => {
    const { data } = await axios(
      `http://localhost:3003/api/product/pagination?page=${page}&search=${search}`
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
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        // Implement pull down functionality
      >
        <Container>
          {data
            // .filter(
            //   (item) =>
            //     item.kampaniyaName
            //       .toLowerCase()
            //       .replace(/\s/g, "")
            //       .includes(search) ||
            //     item.hashTag
            //       .join("")
            //       .toLowerCase()
            //       .replace(/\s/g, "")
            //       .includes(search)
            // )
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
      </InfiniteScroll>
    </>
  );
};

export default Home;
