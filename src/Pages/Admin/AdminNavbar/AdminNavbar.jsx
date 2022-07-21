import React from "react";
import style from "./adminnavbar.module.css";
import { Link, Navigate, NavLink } from "react-router-dom";

import AddProduct from "../AddProduct/AddProduct";
import UpdateHeader from "../UpdateHeader/UpdateHeader";

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
      color: isActive && "#8e8e8e",
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
          <UpdateIcon className={style.adminIcons} />
          <NavLink style={navLinkStyles} to="/admin/updateproduct">
            Delete and Update Products
          </NavLink>
        </li>

        <li>
          <TitleIcon className={style.adminIcons} />
          <NavLink style={navLinkStyles} to="/admin/updateheader">
            Update Header
          </NavLink>
        </li>
        <li>
          <BusinessIcon className={style.adminIcons} />

          <NavLink style={navLinkStyles} to="/admin/addowner">
            Add Owner
          </NavLink>
        </li>
        <li>
          <DeleteIcon className={style.adminIcons} />
          Delete and Update Owners
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
