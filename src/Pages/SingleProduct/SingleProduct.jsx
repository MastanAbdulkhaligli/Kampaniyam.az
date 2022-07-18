import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./singleproduct.module.css";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PhoneIcon from "@mui/icons-material/Phone";

import {
  addProduct,
  deleteProduct,
} from "../../Features/Favourites/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../Components/Cards/Card";
import styled from "styled-components";

import RecommendationCategory from "../../Components/RecommendationCategory/RecommendationCategory";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";

const Container = styled.div`
  max-width: 1600px;
  /* min-height: 800px; */
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  margin: 0 auto;
  justify-content: center;
  gap: 25px;
`;

const SingleProduct = () => {
  // Single Product Data
  const [data, setData] = useState([{ startDate: "" }]);
  // Single Product ID with useParams
  const { productId } = useParams();

  // To control Date

  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  // Other Products Data
  const [otherProducts, setOtherProducts] = useState([]);

  // Redux for controlling Favoruite list
  const dispatch = useDispatch();
  const favor = useSelector((state) => state.favourites.products);

  // To Control Love icon
  let heartBool = favor.filter((item) => item._id === data._id);
  let mybool = heartBool.length === 0 ? false : true;

  const onClick = () => {
    let res = favor.filter((item) => item._id === productId);
    if (res.length == 0) {
      dispatch(addProduct({ data }));
    } else {
      dispatch(deleteProduct({ data }));
    }
  };

  const timeLeft = (end) => {
    end = new Date(end.substring(0, 10));
    const today = new Date();
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const diffTime = Math.abs(end - today);
    const diffDays = Math.ceil(diffTime / _MS_PER_DAY);
    return diffDays;
  };

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios(
        `http://localhost:3003/api/product/others/${productId}`
      );
      setData(data.product);
      setOtherProducts(data.others);
      setDateStart(data.product.startDate.slice(0, 10));
      setDateEnd(data.product.endDate.slice(0, 10));
    };
    getdata();

    document.documentElement.scrollTo(0, 0);
  }, [productId]);

  return (
    <>
      <div className={style.singleProductContainer}>
        <div className={style.spLeft}>
          <img src={data.image} className={style.spImage} />
        </div>
        <div className={style.spRight}>
          <div className={style.productDescription}>
            <h1>{data.owner}</h1>
            <span className={style.categoryText}>{data.category}</span>
            <h3></h3>
            <h2>{data.kampaniyaName}</h2>
            <p>{data.aboutProduct}</p>

            <div className={style.border}></div>

            <div className={style.location}>
              <LocationOnIcon className={style.locationIcon}></LocationOnIcon>
              {/* <p>{data.address}</p> */}
              <a className={style.addressLink} href={data.addressLink}>
                {data.address}
              </a>
            </div>

            <div className={style.singleTelephone}>
              <PhoneIcon className={style.singleTelephoneIcon}></PhoneIcon>
              <p>
                <a
                  className={style.phoneNumber}
                  href={`tel:${data.phoneNumber}`}
                >
                  {data.phoneNumber}
                </a>
              </p>
            </div>

            <div className={style.timeLeft}>
              <AccessTimeFilledIcon
                className={style.clock}
              ></AccessTimeFilledIcon>
              <p>
                {dateStart} -{dateEnd}
              </p>
            </div>
          </div>

          <div className={style.productPrice}>
            <span>{data.price} AZN</span>
            <a onClick={() => onClick()} href="#" className={style.loveBtn}>
              {mybool ? " Seçilmiş elanlardan sil  " : "Seçilmiş elanlara at"}
            </a>
          </div>
        </div>
      </div>
      <div className={style.seperator}></div>
      <h2 className={style.others}>{data.owner} Aid diger Kampaniyalar</h2>

      <Container>
        {otherProducts.map((item) => {
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
      <div className={style.seperator}></div>
      <h1 className={style.others}>
        {data.category} kategoriyasinda olan diger Kampaniyalar
      </h1>
      <Container>
        <RecommendationCategory categoryName={data.category} />
      </Container>
    </>
  );
};

export default SingleProduct;
