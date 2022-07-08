import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import style from "./addproduct.module.css";

const AddProduct = () => {
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
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await axios
      .post("http://localhost:3003/api/product/add", data, config)
      .then(console.log)
      .catch(console.log);

    // console.log(data.aboutProduct);
  };

  return (
    <div className={style.addProductContainer}>
      <h1>AddProduct</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("kampaniyaName")}
          placeholder="Kampaniya Adini Daxil Edin "
        />

        <input
          type="text"
          {...register("owner")}
          placeholder="Kampaniya Sahibinin Adini Daxil Edin"
        />

        <input
          type="text"
          {...register("aboutProduct")}
          placeholder="Kampaniya Haqqinda Melumat daxil edin"
        />

        <input
          type="text"
          {...register("startDate")}
          placeholder="Baslangic tarixi"
        />

        <input
          type="text"
          {...register("endDate")}
          placeholder="Bitis Tarixi"
        />

        <input type="text" {...register("price")} placeholder="Qiymet" />

        <input type="text" {...register("category")} placeholder="Kategoriya" />

        <input
          type="text"
          {...register("image")}
          placeholder="Sekil Linkini Daxil Edin"
        />

        <input
          type="text"
          {...register("address")}
          placeholder="Adresi Daxil Edin"
        />

        <input
          type="text"
          {...register("addressLink")}
          placeholder="Adres Linkini Daxil Edin"
        />

        <input
          type="text"
          {...register("phoneNumber")}
          placeholder="Telefon Nomresini Daxil Edin"
        />

        <div>
          <input type="submit" value="Product Elave Ele" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
