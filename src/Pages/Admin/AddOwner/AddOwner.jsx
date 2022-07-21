import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import style from "./addowner.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddOwner = () => {
  const notifySuccess = () => toast("Sahibkar Yuklendi", { theme: "dark" });
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
    const res = await axios
      .post("http://localhost:3003/api/owner/add", data, config)
      .then(() => notifySuccess())
      .catch(() => notifyFailure());
  };

  return (
    <div className={style.addOwnerContainer}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111324",
          fontWeight: "normal",
        }}
      >
        Sahibkar Elave Et
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Shaibkarin Adini Daxil Edin:
          <input
            type="text"
            {...register("ownerName")}
            placeholder="Sahibkarin Adini daxil edin"
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
          Sahibkar Haqqinda:
          <textarea
            name="bio"
            rows="3"
            cols="30"
            {...register("about")}
            placeholder="Kampaniya Haqqinda Melumat daxil edin"
          ></textarea>
        </label>
        <label>
          Sirketin Addresi:
          <input
            type="text"
            {...register("address")}
            placeholder="Sahibkarin addresi"
          />
        </label>

        <label>
          Sirketin Google Addres Linki:
          <input
            type="text"
            {...register("addressLink")}
            placeholder="Sahibkarin addres linki"
          />
        </label>

        <label>
          Sirketin Nomresin Daxil Edin:
          <input
            type="text"
            {...register("telephoneNumber")}
            placeholder="Sahibkarin nomresi"
          />
        </label>

        <label>
          Sirketin Logosu ve ya sekli
          <input
            type="text"
            {...register("image")}
            placeholder="Sahibkarin nomresi"
          />
        </label>

        <div>
          <input
            className={style.addButton}
            type="submit"
            value="Sirketi Elave Et"
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

export default AddOwner;
