import React, { useState, useEffect } from "react";
import style from "./updateheader.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UpdateHeader = () => {
  const [headerId, setHeaderId] = useState();
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
    };

    getId();
  }, []);

  const onSubmit = async (data) => {
    const res = await axios
      .put(`http://localhost:3003/api/header/update/${headerId}`, data, config)
      .then(console.log)
      .catch(console.log);
  };

  return (
    <div className={style.updateHeaderContainer}>
      <h1 style={{ textAlign: "center" }}>Headeri Yenile</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Header Informasiyasi:
          <textarea
            name="bio"
            rows="3"
            cols="30"
            {...register("content")}
            placeholder="Kampaniya Haqqinda Melumat daxil edin"
          ></textarea>
        </label>

        <label>
          Rengi Secin:
          <input
            className={style.color}
            type="color"
            id="colorpicker"
            {...register("color")}
          />
        </label>
        <div>
          <input type="submit" value="Headeri Yenile" />
        </div>
      </form>
    </div>
  );
};

export default UpdateHeader;
