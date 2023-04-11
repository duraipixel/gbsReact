import "./styles.scss";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ toggleLeftSideMenu, showToggle, closeToggle }) => {
  const CartButton = ({ className, text, size }) => {
    return (
      <Link to="/cart" className={`position-relative ${className}`}>
        <FiShoppingCart size={size} />
        {text && <div>Cart</div>}
        <span className="cart-count-badge">2</span>
      </Link>
    );
  };
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Link to="/">
          <img src={require("assets/Brand/gbsLogoHighRes.png")} alt="logo" />
        </Link>
        <div className="d-flex align-items-center">
          {window.innerWidth < 992 && (
            <CartButton size={30} text={false} className="me-3" />
          )}
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll" className="py-2">
          <div className="d-md-flex align-items-center justify-content-between w-100">
            <div className="input-group search-wrapper">
              <button onClick={() => toggleLeftSideMenu()} className="btn btn-light d-flex align-items-center justify-content-center">
                <FiMenu className="font-size-1_5rem me-2" />
                <div>Menu</div>
              </button>
              <Form.Control
                type="search"
                className="h-100"
                placeholder="Search Your Product ..."
              />
            </div>
            <div className="d-lg-flex align-items-center text-center justify-content-center nav-menu">
              <Link to="" className="ps-3">
                <FiUser className="font-size-1_5rem" />
                <div>My Account</div>
              </Link>
              {window.innerWidth > 992 && (
                <CartButton size={22} text={true} className="ps-lg-4 ps-3" />
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
