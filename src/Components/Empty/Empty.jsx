import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import style from "./empty.module.css";

const Empty = ({ location }) => {
  return (
    <div className={style.emptyContainer}>
      <h1 className={style.isEmptyHeader}> {location} is Empty</h1>
      <SentimentVeryDissatisfiedIcon
        style={{ color: "#8BB7E6", fontSize: 100, alignItems: "center" }}
      />
    </div>
  );
};

export default Empty;
