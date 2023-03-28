import React from "react";
import Logo from "assets/Brand/gbsLogoHighRes.png";
import close from "assets/images/close.png";
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
                    <Link to="javascript:void(0)" className="toggle-button">
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
                      <Link to="/cart">
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
        
        <div className="togle-menu">
              <div className="togmenu-header">
                  <a href="javascript:void(0)" className="clse-menu"><img src={close} alt="" /></a>
                  <h4>What are you looking<br /> for today?</h4>
              </div>
              <div className="togmenu-lists">
                <ul>
                <li>
                <Link>Laptops</Link>
                </li>
                <li>
                <Link>Desktops</Link>
                </li>
                <li>
                <Link>Tablets</Link>
                </li>
                <li>
                <Link>Top Deals</Link>
                </li>
                <li>
                <Link>Shop by Brand</Link>
                </li>
                <li>
                <Link>GBS Service</Link>
                </li>
                <li>
                <Link>Store Finder</Link>
                </li>
                </ul>
              </div>
        </div>    
    </>
  );
};

export default Header;
