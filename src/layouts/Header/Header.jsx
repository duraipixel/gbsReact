import "./styles.scss";
import { Link } from "react-router-dom";
import { FiUser, FiMenu } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavMenus from "./NavMenus";
import { useState } from "react";
import CartButton from "./CartButton";

const Header = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Link to="/" className="brand">
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
            <div className="search-wrapper">
              <div className="input-group">
                <button
                  onClick={() => setNavMenu(!navMenu)}
                  className="btn btn-light d-flex align-items-center justify-content-center"
                >
                  <FiMenu className="font-size-1_5rem me-2" />
                  <div className="small">Menu</div>
                </button>
                <Form.Control
                  size="sm"
                  type="search"
                  className="h-100"
                  placeholder="Search Your Product ..."
                />
              </div>
              {navMenu && <NavMenus />}
            </div>
            <div className="d-lg-flex align-items-center text-center justify-content-center nav-menu">
              <Link to="/myAccount/profile" className="ps-3">
                <FiUser size={22} />
                <div className="small fw-lighter">My Account</div>
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
