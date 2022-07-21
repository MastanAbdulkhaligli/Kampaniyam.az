import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import style from "./updateheader.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateHeader = () => {
  const notifySuccess = () => toast("Header Tezelendi", { theme: "dark" });
  const notifyFailure = () => toast("Problem Bas Verdi :(", { theme: "dark" });

  const [headerId, setHeaderId] = useState();
  const [headerText, setHeaderText] = useState("");
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

  useEffect(() => {
    const getId = async () => {
      const { data } = await axios.get("http://localhost:3003/api/header");
      setHeaderId(data[0]._id);
      setHeaderText(data[0].content);
    };

    getId();
  }, []);

  const onSubmit = async (data) => {
    const res = await axios
      .put(`http://localhost:3003/api/header/update/${headerId}`, data, config)
      .then(() => notifySuccess())
      .catch(() => notifyFailure());
  };

  return (
    <div className={style.updateHeaderContainer}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#111324",
          fontWeight: "normal",
        }}
      >
        Headeri Yenile
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Header Informasiyasi:
          <textarea
            name="bio"
            rows="3"
            cols="30"
            {...register("content")}
            defaultValue={headerText}
            placeholder="Kampaniya Haqqinda Melumat daxil edin"
          ></textarea>
        </label>

        <label>
          Rengi Secin:
          <input
            className={style.color}
            type="color"
            id="colorpicker"
            defaultValue="#7856FF"
            {...register("color")}
          />
        </label>
        <div>
          <input
            className={style.addButton}
            type="submit"
            value="Headeri Yenile"
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

export default UpdateHeader;
