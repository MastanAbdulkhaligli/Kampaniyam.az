import React from "react";
import style from "./adminnavbar.module.css";
import { Link, Navigate, NavLink } from "react-router-dom";

import AddProduct from "../AddProduct/AddProduct";

import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import TitleIcon from "@mui/icons-material/Title";
import BusinessIcon from "@mui/icons-material/Business";
import AddchartIcon from "@mui/icons-material/Addchart";

const AdminNavbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive && "#51cfdb",
    };
  };
  return (
    <div className={style.sidebar}>
      <ul>
        <li>
          <AddIcon className={style.adminIcons} />
          <NavLink style={navLinkStyles} to="/admin/addproduct">
            Add Product
          </NavLink>
        </li>

        <li>
          <UpdateIcon className={style.adminIcons} /> Update Product
        </li>
        <li>
          <DeleteIcon className={style.adminIcons} />
          Delete Product
        </li>
        <li>
          <TitleIcon className={style.adminIcons} />
          Update Header
        </li>
        <li>
          <BusinessIcon className={style.adminIcons} />
          Add Owner
        </li>
        <li>
          <DeleteIcon className={style.adminIcons} />
          Delete Owner
        </li>
        <li>
          <AddchartIcon className={style.adminIcons} />
          Statistics
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
