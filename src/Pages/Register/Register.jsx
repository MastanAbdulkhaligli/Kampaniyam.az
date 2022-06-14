import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import style from "./register.module.css";

const Register = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email adresinizi daxil edin")
      .matches(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Email formati duzgun deyyil"
      ),
    fullName: yup
      .string()
      .required("Ad ve Soyadinizi daxil edin")
      .max(40, "Ad ve Soyad 40 simvoldan az olmalidir"),
    userName: yup
      .string()
      .required("Istifadeci Adinizi daxil edin")
      .max(20, "En cox 20 simvoldan ibaret ola biler")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "Sadece herf ve reqemlerden istifade ede bilersiniz"
      ),
    phoneNumber: yup
      .string()
      .notRequired()
      .nullable()
      .matches(/^(\s*|\d+)$/, "Sadece reqemler")
      .max(18, "Telefon nomresi 18 simboldan cox ola bilmez"),
    password: yup
      .string()
      .required("Sifrenizi daxil edin")
      .min(8, "Sifre minimum 8 simvol olmalidir"),
    confirmPwd: yup
      .string()
      .required("Sifrenizi yeniden daxil edin")
      .oneOf([yup.ref("password")], "Sifreler uyusmur"),
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
    <div className={style.formBody}>
      <div className={style.containerForm}>
        <div className={style.titleForm}>Qeydiyyat</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.userDetails}>
            {/* Full Name and Surname */}
            <div className={style.inputBox}>
              <span className={style.details}>Adiniz ve Soyadiniz</span>
              <input
                type="text"
                {...register("fullName")}
                placeholder="Adinizi ve soyadinizi daxil edin"
              />
              {errors.fullName && (
                <p className={style.errorForm}>{errors.fullName?.message}</p>
              )}
            </div>

            {/* Nickname */}
            <div className={style.inputBox}>
              <span className={style.details}>Istifadeci Adiniz</span>
              <input
                {...register("userName")}
                type="text"
                placeholder="Istifadeci Adinizi daxil edin"
              />
              {errors.userName && (
                <p className={style.errorForm}>{errors.userName?.message}</p>
              )}
            </div>
            {/* Email*/}
            <div className={style.inputBox}>
              <span className={style.details}>Email Adresiniz</span>
              <input
                {...register("email")}
                type="email"
                placeholder="Email Adresinizi daxil edin"
              />
              {errors.email && (
                <p className={style.errorForm}>{errors.email?.message}</p>
              )}
            </div>

            {/* Telefon Nomresi*/}
            <div className={style.inputBox}>
              <span className={style.details}>Telefon Nomreniz</span>
              <input
                {...register("phoneNumber")}
                type="text"
                placeholder="Telefon Nomrenizi daxil edin"
              />

              {errors.phoneNumber && (
                <p className={style.errorForm}>{errors.phoneNumber?.message}</p>
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

            <div className={style.inputBox}>
              <span className={style.details}>Sifrenizi Tekrar Edin</span>
              <input
                type="password"
                {...register("confirmPwd")}
                placeholder="Sifrenizi Onaylayin"
              />

              {errors?.confirmPwd && (
                <p className={style.errorForm}>{errors.confirmPwd?.message}</p>
              )}
            </div>
          </div>
          <div className={style.genderDetails}>
            <input
              type="radio"
              name="gender"
              id="dot-1"
              value="man"
              {...register("gender")}
              className={style.dot1}
            />
            <input
              type="radio"
              name="gender"
              id="dot-2"
              value="woman"
              {...register("gender")}
              className={style.dot2}
            />
            <span className={style.genderTitle}>Cinsiyetiniz</span>
            <div className={style.category}>
              <label htmlFor="dot-1">
                <span className={`${style.dot} ${style.one}`}></span>
                <span className={style.gender}>Kisi</span>
              </label>
              <label htmlFor="dot-2">
                <span className={`${style.dot} ${style.two}`}></span>
                <span className={style.gender}>Qadin</span>
              </label>
            </div>
          </div>
          <div className={style.regButton}>
            <input type="submit" value="Qeydiyat Ol" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
