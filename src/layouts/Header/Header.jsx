import React from "react";
import Logo from "assets/Brand/gbsLogoHighRes.png";
import close from "assets/images/close.png";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = ({toggleLeftSideMenu, showToggle, closeToggle}) => {
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
                    <Link to="javascript:void(0)" onClick={() => toggleLeftSideMenu()} className="toggle-button">
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
        
        <div className={`togle-menu ${showToggle ? 'show' : ''}`} id="toggle_left_menu">
              <div className="togmenu-header">
                  <a href="javascript:void(0)" className="clse-menu" onClick={() => closeToggle()}>
                    <img src={close} alt="" /></a>
                  <h4>What are you looking<br /> for today?</h4>
              </div>
              <div className="togmenu-lists">
              <div class="navigation">
                <ul>
                  {/* <li class="has-sub"> <a href="#">Menu 1</a>
                    <ul>
                    <li class="has-sub"> <a href="#">Submenu 1.1</a>
                      <ul>
                      <li><a href="#">Submenu 1.1.1</a></li>
                      <li class="has-sub"><a href="#">Submenu 1.1.2</a>
                        <ul>
                        <li><a href="#">Submenu 1.1.2.1</a></li>
                        <li><a href="#">Submenu 1.1.2.2</a></li>
                        </ul>
                      </li>
                      </ul>
                    </li>
                    <li><a href="#">Submenu 1.2</a></li>
                    </ul>
                  </li> */}
                  <li class="has-sub"> <a href="#">Laptops</a>
                    <ul>
                    <li><a href="#">All Laptops</a></li>
                    <li><a href="#">for Casual & Everyday Use</a></li>
                    <li><a href="#">for Business</a></li>
                    <li><a href="#">for Content Creators</a></li>
                    <li><a href="#">for Gaming</a></li>
                    </ul>
                  </li>
                  <li class="has-sub"> <a href="#">Desktops </a>
                    <ul>
                    <li><a href="#">All Desktops</a></li>
                    <li><a href="#">for Casual & Everyday Use</a></li>
                    <li><a href="#">for Business</a></li>
                    <li><a href="#">for Content Creators</a></li>
                    <li><a href="#">for Gaming</a></li>
                  </ul>
                  </li>
                  <li><a href="#"> Tablets </a></li>
                  <li><a href="#"> Top Deals </a></li>
                  <li><a href="#"> Shop by Brand </a></li>
                  <li><a href="#"> GBS Service </a></li>
                  <li><a href="#"> Store Finder </a></li>
                </ul>
              </div>
              </div>
        </div>    
    </>
  );
};

export default Header;
