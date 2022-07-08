import React, { useEffect } from "react";
import style from "./signin.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../Features/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);

  const formSchema = yup.object().shape({
    // email: yup
    //   .string()
    //   .required("Email adresinizi daxil edin")
    //   .matches(
    //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //     "Email formati duzgun deyyil"
    //   ),
    password: yup
      .string()
      .required("Sifrenizi daxil edin")
      .min(8, "Sifre minimum 8 simvol olmalidir"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = (data) => {
    const { username, password } = data;
    login(dispatch, { username, password });
  };

  useEffect(() => {
    if (user) {
      <Navigate to="/admin" />;
    }
  }, []);

  return (
    <div className={style.signInContainer}>
      <div className={style.containerForm}>
        <div className={style.titleForm}>Giris</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.userDetails}>
            <div className={style.inputBox}>
              <span className={style.details}>Email Adresiniz</span>
              <input
                {...register("username")}
                placeholder="Email Adresinizi daxil edin"
              />
              {errors.email && (
                <p className={style.errorForm}>{errors.username?.message}</p>
              )}
            </div>

            <div className={style.inputBox}>
              <span className={style.details}>Sifreniz</span>
              <input
                type="password"
                {...register("password")}
                placeholder="Sifrenizi daxil edin"
              />
              {errors?.password && (
                <p className={style.errorForm}>{errors.password?.message}</p>
              )}
            </div>
          </div>

          {error && (
            <p
              className={style.errorForm}
              style={{ textAlign: "center", color: "red" }}
            >
              Istifadeci adi ve ya sifre sehfdir
            </p>
          )}

          <div className={style.regButton}>
            <input type="submit" disabled={isFetching} value="Daxil Ol" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
