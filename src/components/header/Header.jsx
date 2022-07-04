import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState("header__menu");
  const [icon, setIcon] = useState("header__switcher");

  const headerActive = () => {
    active === "header__menu"
      ? setActive("header__menu header__active")
      : setActive("header__menu");
    icon === "header__switcher"
      ? setIcon("header__switcher header__icon")
      : setIcon("header__switcher");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} />
      </div>
      <ul className={active}>
        <li className="header__item">
          <a href="#!" className="header__link">
            home
          </a>
        </li>
        <li className="header__item">
          <a href="#!" className="header__link">
            tomorrow
          </a>
        </li>
        <li className="header__item">
          <a href="#!" className="header__link">
            week
          </a>
        </li>
        <li className="header__item">
          <a href="#!" className="header__link">
            map
          </a>
        </li>
        <li className="header__item">
          <a href="#!" className="header__btn">
            log in
          </a>
          <a href="#!" className="header__btn">
            sign in
          </a>
        </li>
      </ul>

      <div onClick={headerActive} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;
