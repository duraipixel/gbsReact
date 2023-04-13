import React from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="myaccount-sidebar">
      <h2>My Account</h2>
      <div>
        <NavLink to="/myAccount/profile">My Profile</NavLink>
      </div>
      <div>
        <NavLink to="/myAccount/accountbook">Address Book</NavLink>
      </div>
      <div>
        <NavLink to="/myAccount/myorders">My Orders</NavLink>
      </div>
      <div>
        <NavLink to="/myAccount/wishlist">My Wishlist</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
