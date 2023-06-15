import "./styles.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="myaccount-sidebar">
      <h1>My Account</h1>
      <div>
        <NavLink to="/my-account/profile">My Profile</NavLink>
      </div>
      <div>
        <NavLink to="/my-account/address-book">Address Book</NavLink>
      </div>
      <div>
        <NavLink to="/my-account/myorders">My Orders</NavLink>
      </div>
      <div>
        <NavLink to="/my-account/wishlist">My Wishlist</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
