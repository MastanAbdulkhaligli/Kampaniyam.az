import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./pricing.module.css";

const Pricing = () => {
  return (
    <div className={style.priceCardsContainer}>
      <div className={style.priceCards}>
        <div className={style.priceCard}>
          <ul>
            <li className={style.pack}>Pulsuz</li>
            <li className={`${style.price} ${style.bottomBar}`}>0 AZN</li>
            <li className={style.bottomBar}>1 Elan</li>
            <li className={style.bottomBar}>15 Gun</li>
          </ul>
        </div>
        <div className={style.priceCard}>
          <ul>
            <li className={style.pack}>Yeni Baslayanlar</li>
            <li className={`${style.price} ${style.bottomBar}`}>20 AZN</li>
            <li className={style.bottomBar}>3 Elan</li>
            <li className={style.bottomBar}>1 Ay</li>
            <li className={style.bottomBar}>Hashtagle Axtaris</li>
          </ul>
        </div>
        <div className={style.priceCard}>
          <ul>
            <li className={style.pack}>Fanatikler</li>
            <li className={`${style.price} ${style.bottomBar}`}>30 AZN</li>
            <li className={style.bottomBar}>5 Elan</li>
            <li className={style.bottomBar}>1 Ay</li>
            <li className={style.bottomBar}>Secdiyiniz Hastagler</li>
          </ul>
        </div>
        <div className={style.priceCard}>
          <ul>
            <li className={style.pack}>Profisional</li>
            <li className={`${style.price} ${style.bottomBar}`}>50 AZN</li>
            <li className={style.bottomBar}>5 Elan</li>
            <li className={style.bottomBar}>1 Ay</li>
            <li className={style.bottomBar}>Secdiyiniz Hastagler</li>
            <li className={style.bottomBar}>Her Categoriyada One Cixin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
