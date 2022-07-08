import React, { useState, useEffect } from "react";
import Search from "../../Features/Search/Search.jsx";
import style from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";

import { Link, Navigate, NavLink } from "react-router-dom";
import kampaniyamLogo from "../../kampaniyamLogo.svg";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive && "#51cfdb",
    };
  };

  const quantity = useSelector((state) => state.favourites.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAdmin(true);
    }
  }, [user]);

  const logout = () => {
    localStorage.removeItem("persist:root");
    window.location.reload(true);
  };

  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <ul>
        <div>
          <li className={style.logo}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              <img
                className={style.logoImage}
                style={{ backgroundColor: "#111324" }}
                src={kampaniyamLogo}
                alt=""
              />
              Kampaniyam.az
            </NavLink>
          </li>
        </div>

        <li className={style.btn}>
          <span>
            <MenuIcon onClick={() => setShowLinks(!showLinks)} />
          </span>
        </li>
        <div className={style.items} id={showLinks ? `${style.hidden}` : ""}>
          {isAdmin && (
            <li>
              <NavLink style={navLinkStyles} to="/admin">
                Admin Panel
              </NavLink>
            </li>
          )}

          <li>
            <NavLink style={navLinkStyles} to="/">
              Ana Səhifə
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/pricing">
              Qiymetler
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/elansahibleri">
              Elan Sahibleri
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
              <FavoriteBorderIcon className={style.materialLoveIcon} />
              <Badge badgeContent={quantity} color="secondary"></Badge>
            </NavLink>
          </li>

          {isAdmin && (
            <li>
              <LogoutIcon onClick={logout} style={{ navLinkStyles }} />
            </li>
          )}
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
