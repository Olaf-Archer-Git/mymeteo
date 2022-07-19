import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState("header__menu");
  const [icon, setIcon] = useState("header__switcher");

  const headerActive = () => {
    active === "header__menu"
      ? setActive("header__menu header__active")
      : setActive("header__menu");
  };

  const headerIcon = () => {
    icon === "header__switcher"
      ? setIcon("header__switcher header__icon")
      : setIcon("header__switcher");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} />
      </div>
      <div className={active}>
        <NavLink className="header__link" to="/">
          home
        </NavLink>
        <NavLink className="header__link" to="/next">
          tomorrow
        </NavLink>
        <NavLink className="header__link" to="/week">
          week
        </NavLink>
        <NavLink className="header__link" to="/map">
          map
        </NavLink>
        <div>
          <NavLink className="header__btn" to="/login">
            LogIn
          </NavLink>
          <NavLink className="header__btn" to="/signup">
            signUp
          </NavLink>
        </div>
      </div>
      <div
        onClick={() => {
          headerActive();
          headerIcon();
        }}
        className={icon}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;
