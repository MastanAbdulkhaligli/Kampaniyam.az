import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./updatesingleproduct.module.css";

const UpdateSingleProduct = () => {
  const { updproductid } = useParams();

  const [data, setData] = useState([{ hashTag: "error handler" }]);
  //   const [hashTag, setHashtag] = useState("");

  const user = useSelector((state) => state.user.currentUser);

  let token = "";

  try {
    token = user.accessToken;
  } catch (error) {
    console.log(error);
  }

  const config = {
    headers: { token: `Bearer ${token}` },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:3003/api/product/find/${updproductid}`
      );
      let start = data.startDate.substring(0, 10);
      let end = data.endDate.substring(0, 10);
      let tempObj = {
        ...data,
        startDate: start,
        endDate: end,
        hashTag: data.hashTag.join(" "),
      };
      setData(data);
      reset(tempObj);
    };

    getData();
  }, []);

  const onSubmit = async (data) => {
    const helper = (obj) => {
      let hashTagArr = obj.hashTag;
      hashTagArr = hashTagArr.split(" ");
      let tempObj = { ...obj, hashTag: hashTagArr };
      return tempObj;
    };
    const res = await axios
      .put(
        `http://localhost:3003/api/product/${updproductid}`,
        helper(data),
        config
      )
      .then(console.log)
      .catch(console.log);
  };

  return (
    <div className={style.updateSingleProductContainer}>
      <h1 style={{ textAlign: "center" }}>Update Single Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Kampaniya Adini Daxil Edin:
          <input
            type="text"
            {...register("kampaniyaName")}
            defaultValue={data.kampaniyaName}
            placeholder="Kampaniya adini daxil edin"
          />
        </label>

        <label>
          Sirketin Adini Daxil Edin:
          <input
            type="text"
            {...register("owner")}
            defaultValue={data.owner}
            placeholder="Kampaniya Sahibinin Adini Daxil Edin"
          />
        </label>

        <label>
          Kampaniya Haqqinda:
          <textarea
            name="bio"
            rows="3"
            cols="30"
            {...register("aboutProduct")}
            defaultValue={data.aboutProduct}
            placeholder="Kampaniya Haqqinda Melumat daxil edin"
          ></textarea>
        </label>

        <label>
          Baslangic Tarixi
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2022-01-01"
            max="2025-12-31"
            defaultValue="2022-03-16"
            {...register("startDate")}
          />
        </label>

        <label>
          Bitis Tarixi
          <input
            type="date"
            id="start"
            name="trip-start"
            min="2022-01-01"
            max="2025-12-31"
            defaultValue="2022-03-16"
            {...register("endDate")}
          />
        </label>

        <label>
          Qiymet
          <input
            type="text"
            {...register("price")}
            placeholder="Qiymet"
            defaultValue={data.price}
          />
        </label>

        <label>
          Kategoriya
          <select name="kampaniyaCategory" {...register("category")}>
            <option value="Technology">Texnologiya</option>
            <option value="PubRestaurant">Pub Restoran</option>

            <option value="Parfumery">Parfümeriya</option>
            <option value="Restaurant">Restoran</option>

            <option value="CofeeShop">Coffee Shops</option>
            <option value="Clothes">Geyim</option>

            <option value="Tourism">Turizm</option>
            <option value="Entertainment">Əyləncə</option>

            <option value="Other">Digər</option>
          </select>
        </label>

        <label>
          Sekilin Linkini Daxil Edin:
          <input
            type="text"
            {...register("image")}
            placeholder="Sekil Linkini Daxil Edin"
            defaultValue={data.image}
          />
        </label>

        <label>
          Adresi Daxil edin
          <input
            type="text"
            {...register("address")}
            placeholder="Addresi daxil edin"
            defaultValue={data.address}
          />
        </label>

        <label>
          Addresin Google Linkini Daxil Edin
          <input
            type="text"
            {...register("addressLink")}
            placeholder="Address Linkini Daxil edin"
            defaultValue={data.addressLink}
          />
        </label>

        <label>
          Telefon Nomresi
          <input
            type="text"
            {...register("phoneNumber")}
            placeholder="Telefon Nomresini Daxil Edin"
            defaultValue={data.phoneNumber}
          />
        </label>

        <label>
          Paket Novunu Secin
          <select
            name="referrer"
            {...register("productStatus")}
            defaultValue={data.productStatus}
          >
            <option value="free">Pulsuz</option>
            <option value="beginner">Yeni Baslayanlar</option>
            <option value="fanatic">Fanatikler</option>
            <option value="pro">Peşəkar</option>
          </select>
        </label>

        <label>
          Hashtag Daxil Edin
          <input
            type="text"
            {...register("hashTag")}
            placeholder="HashTagleri Daxil Edin, Ornek: yemek,sushi,asia"
          />
        </label>

        <div>
          <input type="submit" value="Product Elave Ele" />
        </div>
      </form>
    </div>
  );
};

export default UpdateSingleProduct;
