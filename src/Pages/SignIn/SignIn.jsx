import React from "react";
import style from "./signin.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignIn = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email adresinizi daxil edin")
      .matches(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email formati duzgun deyyil"
      ),
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
  const onSubmit = (data) => console.log(data);
  return (
    <div className={style.signInContainer}>
      <div className={style.containerForm}>
        <div className={style.titleForm}>Giris</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.userDetails}>
            <div className={style.inputBox}>
              <span className={style.details}>Email Adresiniz</span>
              <input
                type="email"
                {...register("email")}
                placeholder="Email Adresinizi daxil edin"
              />
              {errors.email && (
                <p className={style.errorForm}>{errors.email?.message}</p>
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

          <div className={style.regButton}>
            <input type="submit" value="Daxil Ol" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
