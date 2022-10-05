import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import brandImg from "../../assets/brand.png";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__brand">
          <img src={brandImg} />
        </div>
      </div>
    </header>
  );
}

export default Header;
