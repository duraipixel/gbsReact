import "./styles.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="myaccount-sidebar">
      <h2>My Account</h2>
      <div>
        <Link to="/my-account/profile" style={{ color: "black" }}>
          My Profile
        </Link>
      </div>
      <div>
        <Link to="/my-account/accountbook" style={{ color: "black" }}>
          Address Book
        </Link>
      </div>
      <div>
        <Link to="/my-account/myorders" style={{ color: "black" }}>
          My Orders
        </Link>
      </div>
      <div>
        <Link to="/my-account/wishlist" style={{ color: "black" }}>
          My Wishlist
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
