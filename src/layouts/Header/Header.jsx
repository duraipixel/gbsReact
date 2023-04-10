import "./styles.scss";
import { Link } from "react-router-dom";
import close from "assets/images/close.png";
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = ({ toggleLeftSideMenu, showToggle, closeToggle }) => {
  const MenuIcon = () => {
    return (
      <Link onClick={() => toggleLeftSideMenu()} className="toggle-button">
        <FiMenu className="font-size-1_5rem" />
        <div>Menu</div>
      </Link>
    );
  };
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
            <div className="d-flex align-items-center text-center search-wrapper">
              {window.innerWidth > 992 && <MenuIcon />}
              <Form.Control
                type="search"
                className="ms-lg-3"
                placeholder="Search Your Product ..."
              />
            </div>
            <div className="d-lg-flex align-items-center text-center justify-content-center nav-menu">
              {window.innerWidth < 992 && <MenuIcon />}
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
