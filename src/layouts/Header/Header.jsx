import React from "react";
import { Link } from "react-router-dom";
import Logo from "assets/Brand/gbsLogoHighRes.png";
import close from "assets/images/close.png";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import "./styles.scss"; 

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
                    <Link onClick={() => toggleLeftSideMenu()} className="toggle-button">
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
                  <Link to="" className="clse-menu" onClick={() => closeToggle()}>
                    <img src={close} alt="" /></Link>
                  <h4>What are you looking<br /> for today?</h4>
              </div>
              <div className="togmenu-lists">
              <div className="navigation">
                <ul>
                  {/* <li className="has-sub"> <Link to="#">Menu 1</Link>
                    <ul>
                    <li className="has-sub"> <Link to="#">Submenu 1.1</Link>
                      <ul>
                      <li><Link to="#">Submenu 1.1.1</Link></li>
                      <li className="has-sub"><Link to="#">Submenu 1.1.2</Link>
                        <ul>
                        <li><Link to="#">Submenu 1.1.2.1</Link></li>
                        <li><Link to="#">Submenu 1.1.2.2</Link></li>
                        </ul>
                      </li>
                      </ul>
                    </li>
                    <li><Link to="#">Submenu 1.2</Link></li>
                    </ul>
                  </li> */}
                  <li className="has-sub"> <Link to="#">Laptops</Link>
                    <ul>
                    <li><Link to="#">All Laptops</Link></li>
                    <li><Link to="#">for Casual & Everyday Use</Link></li>
                    <li><Link to="#">for Business</Link></li>
                    <li><Link to="#">for Content Creators</Link></li>
                    <li><Link to="#">for Gaming</Link></li>
                    </ul>
                  </li>
                  <li className="has-sub"> <Link to="#">Desktops </Link>
                    <ul>
                    <li><Link to="#">All Desktops</Link></li>
                    <li><Link to="#">for Casual & Everyday Use</Link></li>
                    <li><Link to="#">for Business</Link></li>
                    <li><Link to="#">for Content Creators</Link></li>
                    <li><Link to="#">for Gaming</Link></li>
                  </ul>
                  </li>
                  <li><Link to="#"> Tablets </Link></li>
                  <li><Link to="#"> Top Deals </Link></li>
                  <li><Link to="#"> Shop by Brand </Link></li>
                  <li><Link to="#"> GBS Service </Link></li>
                  <li><Link to="#"> Store Finder </Link></li>
                </ul>
              </div>
              </div>
        </div>    
    </>
  );
};

export default Header;
