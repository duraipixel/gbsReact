import "./styles.scss";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavMenus, { NavMenuList } from "./NavMenus";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas } from "react-bootstrap";
import { setHeader } from "redux/features/headerSlice";
import SearchResult from "./SearchResult";
import SearchInput from "./SearchInput";
import MobileSearch from "./MobileSearch";
import AccountButton from "./AccountButton";

const Header = () => {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header.status);
  const [navMenu, setNavMenu] = useState(false);
  const [searchMobileSearch, setMobileSearch] = useState(false);
  const expand = "lg";
  const toggleHeader = () => {
    dispatch(
      setHeader({
        status: !header,
      })
    );
    setNavMenu(!navMenu);
  };

  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname);
  useEffect(() => {
    setNavMenu(false);
  }, [pathname]);
  return (
    <Navbar
      bg="primary"
      expanded={header}
      expand={`${expand}`}
      variant="dark"
    >
      <Container>
        <Link to="/" className="brand">
          <img src={require("assets/Brand/gbsLogoHighRes.png")} alt="logo" />
        </Link>
        <div className="d-flex align-items-center">
          {window.innerWidth < 992 && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setMobileSearch(true)}
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M8.56 15.9787C12.7353 15.9787 16.12 12.6256 16.12 8.48936C16.12 4.3531 12.7353 1 8.56 1C4.38473 1 1 4.3531 1 8.48936C1 12.6256 4.38473 15.9787 8.56 15.9787Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.0101 17.8516L13.8994 13.7793"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <AccountButton size={23} text={false} className="mx-2" />
              <CartButton size={23} text={false} className="me-3" />
            </>
          )}
          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="18"
              viewBox="0 0 25 18"
              fill="none"
            >
              <line
                x1="0.75"
                y1="1.25"
                x2="24.25"
                y2="1.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="0.75"
                y1="9.25"
                x2="24.25"
                y2="9.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="0.75"
                y1="17.25"
                x2="24.25"
                y2="17.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Navbar.Toggle>
        </div>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header  className="bg-primary">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Link to="/" className="brand">
                <img
                  src={require("assets/Brand/gbsLogoHighRes.png")}
                  alt="logo"
                />
              </Link>
            </Offcanvas.Title>
            <button className="btn btn-close" onClick={toggleHeader}></button>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-max-lg-dark">
            <div className="d-lg-flex align-items-center justify-content-between w-100">
              <div className="search-wrapper">
                {window.innerWidth > 992 && (
                  <div className="d-flex align-items-center">
                    <button
                      onClick={() => setNavMenu(!navMenu)}
                      className={
                        navMenu
                          ? "btn btn-sm border-0 me-md-3 menu-btn"
                          : "btn btn-sm border-0 me-md-3"
                      }
                    >
                      {navMenu ? (
                        <>
                          <svg width="32px" height="32px" viewBox="0 0 32 32">
                            <g
                              id="Header-Navigation-Journey"
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="02.1_Header-and-Navigation"
                                transform="translate(-228.000000, -23.000000)"
                              >
                                <g
                                  id="Group-24"
                                  transform="translate(0.000000, -0.000000)"
                                >
                                  <g
                                    id="x-fill"
                                    transform="translate(228.000000, 23.000000)"
                                  >
                                    <rect
                                      id="Rectangle"
                                      x="0"
                                      y="0"
                                      width="32"
                                      height="32"
                                    ></rect>
                                    <path
                                      d="M17.414185,16 L25.7070925,7.7070925 C26.0971909,7.31650446 26.0969925,6.68369412 25.7066492,6.29335081 C25.3163059,5.90300749 24.6834955,5.90280906 24.2929075,6.2929075 L16,14.585815 L7.7070925,6.2929075 C7.31650446,5.90280906 6.68369412,5.90300749 6.29335081,6.29335081 C5.90300749,6.68369412 5.90280906,7.31650446 6.2929075,7.7070925 L14.585815,16 L6.2929075,24.2929075 C6.04002357,24.5454744 5.94116419,24.9138066 6.03359596,25.2590554 C6.12602774,25.6043042 6.39569584,25.8739723 6.74094461,25.966404 C7.08619338,26.0588358 7.45452555,25.9599764 7.7070925,25.7070925 L16,17.414185 L24.2929075,25.7070925 C24.6834955,26.0971909 25.3163059,26.0969925 25.7066492,25.7066492 C26.0969925,25.3163059 26.0971909,24.6834955 25.7070925,24.2929075 L17.414185,16 Z"
                                      id="Path"
                                      fill="#FFFFFF"
                                      fillRule="nonzero"
                                    ></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <div className="small text-white fw-500">Menu</div>
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="18"
                            viewBox="0 0 25 18"
                            fill="none"
                          >
                            <line
                              x1="0.75"
                              y1="1.25"
                              x2="24.25"
                              y2="1.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <line
                              x1="0.75"
                              y1="9.25"
                              x2="24.25"
                              y2="9.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <line
                              x1="0.75"
                              y1="17.25"
                              x2="24.25"
                              y2="17.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="small text-white mt-2 fw-500">
                            Menu
                          </div>
                        </>
                      )}
                    </button>
                    <div className="input-group shadow rounded">
                      <SearchInput type="HEADER" />
                    </div>
                    {navMenu && <NavMenus toggleHeader={toggleHeader} />}
                    {navMenu && (
                      <div
                        className="nav-menu-close-btn"
                        onClick={() => setNavMenu(!navMenu)}
                      ></div>
                    )}
                    <SearchResult
                      type="HEADER"
                      setMobileSearch={setMobileSearch}
                    />
                  </div>
                )}
              </div>
              <div className="d-lg-flex align-items-center text-center justify-content-center nav-menu">
                {window.innerWidth > 992 ? (
                  <>
                    <AccountButton size={22} text={true} />
                    <CartButton
                      size={22}
                      text={true}
                      className="ps-lg-4 ps-3 d-lg-flex flex-lg-column justify-content-center align-items-center"
                    />
                  </>
                ) : (
                  <NavMenuList
                    className="accordion-dark"
                    toggleHeader={toggleHeader}
                  />
                )}
              </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      {searchMobileSearch && (
        <MobileSearch
          searchMobileSearch={searchMobileSearch}
          setMobileSearch={setMobileSearch}
        />
      )}
    </Navbar>
  );
};

export default Header;
