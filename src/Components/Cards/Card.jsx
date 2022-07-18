import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Heart from "react-heart";
import {
  addProduct,
  deleteProduct,
} from "../../Features/Favourites/favouritesSlice";

let hashTable = {
  Technology: "8, 54, 128",
  PubRestaurant: "129, 84, 56", // OK
  Parfumery: "252, 107, 3",
  Restaurant: "132, 3, 252",
  CofeeShop: "210, 123, 82",
  Clothes: "36, 201, 116",
  Tourism: "0, 204, 255", //OK
  Entertainment: "168, 50, 86",
};

const CardDesign = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 180px 160px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 5px;
  background: white;
  box-shadow: unset;
  text-align: center;
  /* hashtable color */
  border: 1px solid rgb(${(props) => props.color});

  transition: 0.5 ease;
  font-family: "Montserrat", sans-serif;

  &:hover {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    /* border: 1px solid rgb(${(props) => props.color}); */
  }

  /* cursor: pointer; */
`;

const CardImage = styled.div`
  grid-area: image;
  background: url(${(props) => props.image});
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-size: cover;
`;

const CardText = styled.div`
  grid-area: text;
  margin: 25px;
`;

const CardStats = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* hashtable color  */
  background: rgb(${(props) => props.color});
  /* background: rgb(132, 3, 252); */
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  color: white;
`;

const Value = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const Type = styled.div`
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
`;

const CardDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 14px;
`;
const CardTitle = styled.h2`
  margin-top: 5px;
  font-size: 20px;
`;

const CardDescription = styled.p`
  color: gray;
  font-size: 15px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ReadMore = styled.p`
  margin-top: 15px;
  font-size: 18px;
  color: #358ed7;
  font-family: "Montserrat", sans-serif;
`;

const Card = ({
  _id,
  name,
  company,
  about,
  date,
  price,
  category,
  image,
  data,
}) => {
  const dispatch = useDispatch();

  const favor = useSelector((state) => state.favourites.products);

  let heartBool = favor.filter((item) => item._id === data._id);
  let mybool = heartBool.length === 0 ? false : true;

  const onClick = () => {
    let res = favor.filter((item) => item._id === data._id);
    if (res.length == 0) {
      dispatch(addProduct({ data }));
    } else {
      dispatch(deleteProduct({ data }));
    }
  };

  return (
    <CardDesign color={hashTable[category]}>
      <CardImage image={image}></CardImage>
      <CardText>
        <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
          <CardDate>{name}</CardDate>
        </Link>

        <Link
          to={`/company/${company}`}
          style={{ textDecoration: "none", color: "unset" }}
        >
          <CardTitle>{company}</CardTitle>
        </Link>
        <CardDescription>{about}</CardDescription>
        <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
          <ReadMore>Daha Etrafli</ReadMore>
        </Link>
      </CardText>
      <CardStats color={hashTable[category]}>
        <Stat>
          <Value>{date}</Value>
          <Type>Gun</Type>
        </Stat>
        <Stat>
          <Value>{price}</Value>
          <Type>AZN</Type>
        </Stat>
        <Stat>
          {/* <FavoriteBorderIcon onClick={onClick} /> */}
          <Heart
            style={{ width: "1.5rem" }}
            isActive={mybool}
            onClick={onClick}
            inactiveColor="white"
            animationTrigger="hover"
            animationScale={1.2}
          />
        </Stat>
      </CardStats>
    </CardDesign>
  );
};

export default Card;
