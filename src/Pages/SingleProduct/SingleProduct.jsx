import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./singleproduct.module.css";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import {
  addProduct,
  deleteProduct,
} from "../../Features/Favourites/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  const [data, setData] = useState([]);
  const { productId } = useParams();

  console.log(productId);

  const dispatch = useDispatch();
  const favor = useSelector((state) => state.favourites.products);

  let heartBool = favor.filter((item) => item._id === data._id);
  let mybool = heartBool.length === 0 ? false : true;

  const onClick = () => {
    let res = favor.filter((item) => item._id === productId);
    console.log(res);

    //let res = favor.filter((item) => item.data.id === data.id);

    if (res.length == 0) {
      dispatch(addProduct({ data }));
    } else {
      dispatch(deleteProduct({ data }));
    }
  };

  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios(
        `http://localhost:3003/api/product/find/${productId}`
      );
      setData(data);
    };
    getdata();
  }, []);

  return (
    <div className={style.singleProductContainer}>
      <div className={style.spLeft}>
        <img src={data.image} className={style.spImage} />
      </div>
      <div className={style.spRight}>
        <div className={style.productDescription}>
          <h1>{data.owner}</h1>
          <span className={style.categoryText}>{data.category}</span>
          <h2>{data.kampaniyaName}</h2>
          <p>{data.aboutProduct}</p>

          <div className={style.border}></div>

          <div className={style.location}>
            <LocationOnIcon className={style.locationIcon}></LocationOnIcon>
            <p>{data.address}</p>
          </div>

          <div className={style.timeLeft}>
            <AccessTimeFilledIcon
              className={style.clock}
            ></AccessTimeFilledIcon>
            <p>
              {data.startDate} -{data.endDate}
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
  );
};

export default SingleProduct;
