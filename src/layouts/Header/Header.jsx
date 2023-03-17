import React from "react";
import Logo from "assets/Brand/gbsLogoHighRes.png";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-div">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <input type="search" name="" id="" className="nav-search" placeholder="ASUS ROG Zephyrus Duo 16"/>
      <div className="nav-link-div">
        <div className="flex-d-clm-align-c">
          <FiUser className="font-size-1_5rem"/>
          <p>My Account</p>
        </div>
        <Link className="flex-d-clm-align-c" to="/cartPage">
          <FiShoppingCart className="font-size-1_5rem"/>
          <p>Cart</p>
        </Link>
        <div>
          <RiMenu3Fill className="font-size-1_5rem"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
