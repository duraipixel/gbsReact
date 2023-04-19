import "./styles.scss";
import { Link } from "react-router-dom";
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
import AccountButton from "./AccountButton";

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
    <>
      <Navbar bg="primary" expanded={header} expand={`${expand}`} variant="dark" className="sticky-top">
        <Container>
          <Link to="/" className="brand">
            <img src={require("assets/Brand/gbsLogoHighRes.png")} alt="logo" />
          </Link>
          <div className="d-flex align-items-center">
            {window.innerWidth < 992 && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setMobileSearch(true)} width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M8.56 15.9787C12.7353 15.9787 16.12 12.6256 16.12 8.48936C16.12 4.3531 12.7353 1 8.56 1C4.38473 1 1 4.3531 1 8.48936C1 12.6256 4.38473 15.9787 8.56 15.9787Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.0101 17.8516L13.8994 13.7793" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <AccountButton size={23} text={false} className="mx-2" />
                <CartButton size={23} text={false} className="me-3" />
              </>
            )}
            <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleHeader}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
                <line x1="0.75" y1="1.25" x2="24.25" y2="1.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0.75" y1="9.25" x2="24.25" y2="9.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="0.75" y1="17.25" x2="24.25" y2="17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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
                          <line x1="0.75" y1="1.25" x2="24.25" y2="1.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="0.75" y1="9.25" x2="24.25" y2="9.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                          <line x1="0.75" y1="17.25" x2="24.25" y2="17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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
                  {window.innerWidth > 992 ? (
                    <>
                      <AccountButton size={22} text={true} />
                      <CartButton size={22} text={true} className="ps-lg-4 ps-3 d-lg-flex flex-lg-column justify-content-center align-items-center" />
                    </>
                  ) : <NavMenuList className="accordion-dark" />}
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        {searchMobileSearch && <MobileSearch searchMobileSearch={searchMobileSearch} setMobileSearch={setMobileSearch} />}
      </Navbar>
    </>
  );
};

export default Header;
