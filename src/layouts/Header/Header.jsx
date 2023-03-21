import React from "react";
import Logo from "assets/Brand/gbsLogoHighRes.png";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-div align-c">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="nav-link-div m-l-4">
        <div className="flex-d-clm-align-c">
          <AiOutlineMenu className="font-size-1_5rem" />
          <p>Menu</p>
        </div>
      </div>
      <input
        type="search"
        name=""
        id=""
        className="nav-search"
        placeholder="ASUS ROG Zephyrus Duo 16"
      />
      <div className="nav-link-div">
        <div className="flex-d-clm-align-c">
          <FiUser className="font-size-1_5rem" />
          <p>My Account</p>
        </div>
        <Link className="flex-d-clm-align-c" to="/cartPage">
          <FiShoppingCart className="font-size-1_5rem" />
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
