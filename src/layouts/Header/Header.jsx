import "./styles.scss";
import { Link } from "react-router-dom";
import { FiUser, FiMenu } from "react-icons/fi";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavMenus, { NavMenuList } from "./NavMenus";
import { useState } from "react";
import CartButton from "./CartButton";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import { setHeader } from "redux/features/headerSlice";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import SearchInput from "./SearchInput";
import MobileSearch from "./MobileSearch";

const Header = () => {
  const dispatch = useDispatch()
  const header = useSelector((state) => state.header.status)
  const [navMenu, setNavMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [searchMobileSearch, setMobileSearch] = useState(false);

  const expand = "lg"
  const toggleHeader = () => {
    setNavMenu(!navMenu)
    dispatch(setHeader(true))
  }
  return (
    <Navbar bg="primary" expanded={header} expand={`${expand}`} variant="dark">
      <Container>
        <Link to="/" className="brand">
          <img src={require("assets/Brand/gbsLogoHighRes.png")} alt="logo" />
        </Link>
        <div className="d-flex align-items-center">
          {window.innerWidth < 992 && (
            <>
              <FaSearch onClick={() => setMobileSearch(true)} size={20} text={false} className="text-white me-3" />
              <CartButton size={23} text={false} className="me-3" />
            </>
          )}
          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
              <line x1="0.75" y1="1.25" x2="24.25" y2="1.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <line x1="0.75" y1="9.25" x2="24.25" y2="9.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
              <line x1="0.75" y1="17.25" x2="24.25" y2="17.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </Navbar.Toggle>
        </div>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton className="bg-primary">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Link to="/" className="brand">
                <img src={require("assets/Brand/gbsLogoHighRes.png")} alt="logo" />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-max-lg-dark">
            <div className="d-lg-flex align-items-center justify-content-between w-100">
              <div className="search-wrapper">
                {window.innerWidth > 992 && (
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => setNavMenu(!navMenu)}
                      className="btn btn-sm border-0 me-md-3"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
                        <line x1="0.75" y1="1.25" x2="24.25" y2="1.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <line x1="0.75" y1="9.25" x2="24.25" y2="9.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <line x1="0.75" y1="17.25" x2="24.25" y2="17.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                      <div className="small text-white mt-2 fw-500">Menu</div>
                    </button>
                    <div className="input-group shadow rounded">
                      <SearchInput search={search} setSearch={setSearch} />
                    </div>
                    {navMenu && <NavMenus />}
                    {navMenu && <div className="nav-menu-close-btn" onClick={() => setNavMenu(!navMenu)}></div>}
                    {search !== "" && <div className="search-result rounded"><SearchResult /></div>}
                  </div>
                )}
              </div>
              <div className="d-lg-flex align-items-center text-center justify-content-center nav-menu">
                <Link to="/my-account/profile" className="ps-lg-3 d-block d-lg-flex flex-lg-column justify-content-center align-items-center ">
                  <FiUser size={22} />
                  <span className="small fw-lighter ms-3 ms-lg-0">My Account</span>
                </Link>
                {window.innerWidth > 992 ? (
                  <CartButton size={22} text={true} className="ps-lg-4 ps-3 d-lg-flex flex-lg-column justify-content-center align-items-center" />
                ) : <NavMenuList className="accordion-dark border-secondary border-top mt-3" />}
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      {searchMobileSearch && <MobileSearch searchMobileSearch={searchMobileSearch} setMobileSearch={setMobileSearch} />}
    </Navbar>
  );
};

export default Header;
