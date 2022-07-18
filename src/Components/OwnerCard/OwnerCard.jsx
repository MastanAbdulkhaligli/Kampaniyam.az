import React from "react";
import style from "./ownercard.module.css";
import { Link } from "react-router-dom";

const OwnerCard = ({ ownerCardImage, ownerCardTitle, ownerCardCategory }) => {
  return (
    <div className={style.ownerCard}>
      <div className={style.ownerCardImageContainer}>
        <Link
          to={`/company/${ownerCardTitle}`}
          style={{ textDecoration: "none", color: "unset" }}
        >
          <img src={ownerCardImage} alt="" />
        </Link>
      </div>
      <div className={style.ownerCardContent}>
        <p className={`${style.ownerCardTitle} ${style.textMedium}`}>
          {ownerCardTitle}
        </p>
        <div className={style.cardInfo}>
          <p className={style.textMedium}></p>
          <p className={`${style.cardPrice} ${style.textMedium}`}>
            {ownerCardCategory}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerCard;
