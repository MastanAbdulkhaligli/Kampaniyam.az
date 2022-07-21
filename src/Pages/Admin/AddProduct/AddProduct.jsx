import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import style from "./addproduct.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const notifySuccess = () => toast("Product Yuklendi", { theme: "dark" });
  const notifyFailure = () => toast("Problem Bas Verdi :(", { theme: "dark" });

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
    const helper = (obj) => {
      let hashTagArr = obj.hashTag;
      hashTagArr = hashTagArr.split(" ");
      let tempObj = { ...obj, hashTag: hashTagArr };
      return tempObj;
    };

    const res = await axios
      .post("http://localhost:3003/api/product/add", helper(data), config)
      .then(() => notifySuccess())
      .catch(() => notifyFailure());
  };

  return (
    <div className={style.addProductContainer}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111324",
          fontWeight: "normal",
        }}
      >
        Kampaniya Yukle
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Kampaniya Adini Daxil Edin:
          <input
            type="text"
            {...register("kampaniyaName")}
            placeholder="Kampaniya Adini Daxil Edin "
          />
        </label>

        <label>
          Sirketin Adini Daxil Edin:
          <input
            type="text"
            {...register("owner")}
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
            {...register("endDate")}
          />
        </label>

        <label>
          Qiymet
          <input type="text" {...register("price")} placeholder="Qiymet" />
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
          />
        </label>

        <label>
          Adresi Daxil edin
          <input
            type="text"
            {...register("address")}
            placeholder="Adresi Daxil Edin"
          />
        </label>

        <label>
          Addresin Google Linkini Daxil Edin
          <input
            type="text"
            {...register("addressLink")}
            placeholder="Adres Linkini Daxil Edin"
          />
        </label>

        <label>
          Telefon Nomresi
          <input
            type="text"
            {...register("phoneNumber")}
            placeholder="Telefon Nomresini Daxil Edin"
          />
        </label>

        <label>
          Paket Novunu Secin
          <select name="referrer" {...register("productStatus")}>
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
          <input
            className={style.addButton}
            type="submit"
            value="Product Elave Ele"
          />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastClassName="dark-toast"
        />
      </form>
    </div>
  );
};

export default AddProduct;
