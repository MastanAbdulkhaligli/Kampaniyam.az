import axios from "axios";
import React, { useState, useEffect } from "react";
import AdminCard from "../AdminCard/AdminCard";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import style from "./updateproduct.module.css";

const UpdateProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:3003/api/product/");
      setAllProducts(data);
    };

    getProducts();
  }, [allProducts]);

  return (
    <div className={style.updateProductContainer}>
      <h1 style={{ textAlign: "center" }}></h1>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#111324",
          fontWeight: "normal",
        }}
      >
        Update Product
      </h1>
      <table className={style.contentTable}>
        <thead>
          <tr>
            <th>Index</th>
            <th>Owner</th>
            <th>Kampaniyanin Adi</th>
            <th>Bitme Vaxti</th>
            <th>Sil</th>
            <th>Yenile</th>
          </tr>
        </thead>

        <tbody>
          {allProducts.map((product, index) => {
            const { _id, owner, kampaniyaName } = product;
            return (
              <AdminCard
                key={index}
                id={_id}
                ownerName={owner}
                kampaniyaName={kampaniyaName}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateProduct;
