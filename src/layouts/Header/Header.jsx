import React from "react";
import Logo from "assets/Brand/gbsLogoHighRes.png";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
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
                                <a href="index.html"><img src={Logo} alt="" /></a>
                            </div>
                            <div className="top-search text-center">
                                <div className="hoger-toggle">
                                <a href="">
                                <FiMenu className="font-size-1_5rem" />
                                   Menu
                                   </a>   
                                </div>
                                <div className="form-data">
                                    <input className="src-blnk" type="search" placeholder="Search Your Product ..." /> 
                                </div>
                            </div>
                            <div className="top-icons">
                                <ul>
                                    <li>
                                        <a href="shopping-cart.html">
                                          <FiUser className="font-size-1_5rem" />
                                          <span>My Account</span>
                                          </a>
                                    </li>
                                    <li>
                                        <a href="my-account.html"><FiShoppingCart className="font-size-1_5rem" />
                                        <span>Cart</span>
                                        </a>
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
