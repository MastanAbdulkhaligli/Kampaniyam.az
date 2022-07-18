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
        Texnologiya
      </NavLink>
      <NavLink to={`/category/PubRestaurant`} style={navLinkStyles}>
        Pub Restoran
      </NavLink>
      <NavLink to={`/category/Parfumery`} style={navLinkStyles}>
        Parfümeriya
      </NavLink>
      <NavLink to={`/category/Restaurant`} style={navLinkStyles}>
        Restoran
      </NavLink>
      <NavLink to={`/category/CofeeShop`} style={navLinkStyles}>
        Coffee Shops
      </NavLink>
      <NavLink to={`/category/Clothes`} style={navLinkStyles}>
        Geyim
      </NavLink>
      <NavLink to={`/category/Tourism`} style={navLinkStyles}>
        Turizm
      </NavLink>
      <NavLink to={`/category/Entertainment`} style={navLinkStyles}>
        Əyləncə
      </NavLink>
      <NavLink to={`/category/Other`} style={navLinkStyles}>
        Digər
      </NavLink>
    </div>
  );
};

export default Categories;
