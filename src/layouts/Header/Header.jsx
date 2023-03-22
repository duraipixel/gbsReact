import React from "react";
import Logo from "assets/Brand/gbsLogoHighRes.png";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="d-flex align-items-center justify-content-between">
                <div className="top-logo">
                  <Link to="/">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
                <div className="top-search text-center">
                  <div className="hoger-toggle">
                    <Link to="">
                      <FiMenu className="font-size-1_5rem" />
                      Menu
                    </Link>
                  </div>
                  <div className="form-data">
                    <input
                      className="src-blnk"
                      type="search"
                      placeholder="Search Your Product ..."
                    />
                  </div>
                </div>
                <div className="top-icons">
                  <ul>
                    <li>
                      <Link to="">
                        <FiUser className="font-size-1_5rem" />
                        <span>My Account</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/cartPage">
                        <FiShoppingCart className="font-size-1_5rem" />
                        <span>Cart</span>
                      </Link>
                      <span className="cart-tpimg">2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
