import React, { useState, useEffect } from "react";
import Search from "../../Features/Search/Search.jsx";
import style from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const quantity = useSelector((state) => state.favourites.quantity);

  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <ul>
        <li className={style.logo}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Kampaniya.net
          </NavLink>
        </li>

        <li className={style.btn}>
          <span>
            <MenuIcon onClick={() => setShowLinks(!showLinks)} />
          </span>
        </li>
        <div className={style.items} id={showLinks ? `${style.hidden}` : ""}>
          <li>
            <NavLink style={navLinkStyles} to="/">
              Ana Sehife
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/register">
              Qeydiyyat
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/signin">
              Giriş
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/signout">
              Çıxış
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/about">
              Haqqimizda
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/contact">
              Əlaqə
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/favourites">
              <FavoriteBorderIcon />
              <Badge badgeContent={quantity} color="secondary"></Badge>
            </NavLink>
          </li>
        </div>
        <li className={style.searchicon}>
          {/* <input type="search" placeholder="Axtar" /> */}
          <Search />
          <label>
            <span className={style.icon}>
              <SearchIcon
                style={{
                  color: "#8BB7E6",
                  fontSize: 30,
                  marginTop: 5,
                }}
              />
            </span>
          </label>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
