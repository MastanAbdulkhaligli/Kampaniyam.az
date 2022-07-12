import React from "react";
import style from "./admincard.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminCard = ({ id, index, ownerName, timeLeft, kampaniyaName }) => {
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

  const onClick = async (id) => {
    const res = await axios
      .delete(`http://localhost:3003/api/product/${id}`, config)
      .then(console.log)
      .catch(console.log);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{ownerName}</td>
      <td>{kampaniyaName}</td>
      <td>15 Gun</td>
      <td>
        <button onClick={() => onClick(id)} className={style.deleteProduct}>
          Sil
        </button>
      </td>
      <td>
        <Link
          to={`/admin/updateproduct/${id}`}
          style={{ textDecoration: "none", color: "green" }}
        >
          Yenile
          {/* <button className={style.updateProduct}></button> */}
        </Link>
      </td>
    </tr>
  );
};

export default AdminCard;
