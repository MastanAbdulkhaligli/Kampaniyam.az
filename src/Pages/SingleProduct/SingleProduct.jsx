import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./singleproduct.module.css";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const SingleProduct = () => {
  const [singleData, setSingleData] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const getSingleData = async () => {
      const { data } = await axios(
        `http://localhost:3003/api/product/find/${productId}`
      );
      setSingleData(data);
    };
    getSingleData();
  }, []);

  return (
    <div className={style.singleProductContainer}>
      <div className={style.spLeft}>
        <img src={singleData.image} className={style.spImage} />
      </div>
      <div className={style.spRight}>
        <div className={style.productDescription}>
          <span>{singleData.category}</span>
          <h1>{singleData.name}</h1>
          <p>{singleData.about}</p>

          <div className={style.border}></div>

          <div className={style.location}>
            <LocationOnIcon className={style.locationIcon}></LocationOnIcon>
            <p> 4 Khagani Rustamov St, Baku 1025</p>
          </div>

          <div className={style.timeLeft}>
            <AccessTimeFilledIcon
              className={style.clock}
            ></AccessTimeFilledIcon>
            <p> 4 Iyun - 24 Iyun</p>
          </div>
        </div>

        <div className={style.productPrice}>
          <span>{singleData.price} AZN</span>
          <a href="#" className={style.loveBtn}>
            Add to WishList
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
