import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="myaccount-sidebar">
      <h2>My Account</h2>
      <div>
        <Link to="" style={{ color: "black" }}>
          My Profile
        </Link>
      </div>
      <div>
        <Link to="" style={{ color: "black" }}>
          Address Book
        </Link>
      </div>
      <div>
        <Link to="" style={{ color: "black" }}>
          My Orders
        </Link>
      </div>
      <div>
        <Link to="" style={{ color: "black" }}>
          My Wishlist
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
