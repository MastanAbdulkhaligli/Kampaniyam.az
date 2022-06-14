import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./categories.module.css";

const Categories = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
      // border-bottom: 1px solid red;
      borderBottom: isActive && "1px solid red",
    };
  };

  return (
    <div className={style.scrollmenu}>
      <NavLink to={`/category/Technology`} style={navLinkStyles}>
        Technology
      </NavLink>
      <NavLink to={`/category/PubRestaurant`} style={navLinkStyles}>
        Pub Restaurant
      </NavLink>
      <NavLink to={`/category/Parfumery`} style={navLinkStyles}>
        Parfumery
      </NavLink>
      <NavLink to={`/category/Restaurant`} style={navLinkStyles}>
        Restaurant
      </NavLink>
      <NavLink to={`/category/CofeeShop`} style={navLinkStyles}>
        Cofee Shop
      </NavLink>
    </div>
  );
};

export default Categories;
