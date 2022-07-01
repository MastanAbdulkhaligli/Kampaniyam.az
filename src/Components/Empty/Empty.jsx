import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import style from "./empty.module.css";
import { Link } from "react-router-dom";

const Empty = ({ location }) => {
  return (
    <div className={style.emptyContainer}>
      <SentimentVeryDissatisfiedIcon
        style={{ color: "#696969", fontSize: 100, alignItems: "center" }}
      />
      <h1 className={style.isEmptyHeader}> {location} </h1>

      <p>
        <Link style={{ textDecoration: "none", color: "#358ED7" }} to="/">
          Ana Səhifəyə
        </Link>{" "}
        qayıdın ve Seçilmişlərə əlavə edin
      </p>
    </div>
  );
};

export default Empty;
