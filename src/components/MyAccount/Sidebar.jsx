import { Button, Nav, Navbar } from "react-bootstrap";
import "./styles.scss";
import { NavLink } from "react-router-dom";

const Sidebar = ({ Logout }) => {
  return (
    <Navbar expand="lg" variant="light" className="w-100 bg-white border rounded shadow-sm p-3 mb-3">
      <div className="w-100">
        <Navbar.Brand as="b" class="text-info lead px-2 pb-3 m-0 fw-bold">My Account</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="float-end" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-column text-secondary">
            <Nav.Link as={NavLink} className="text-secondary" to="/my-account/profile">My Profile</Nav.Link>
            <Nav.Link as={NavLink} className="text-secondary" to="/my-account/address-book">Address Book</Nav.Link>
            <Nav.Link as={NavLink} className="text-secondary" to="/my-account/myorders">My Orders</Nav.Link>
            <Nav.Link as={NavLink} className="text-secondary" to="/my-account/wishlist">My Wishlist</Nav.Link>
            <Nav.Link as={Button} onClick={Logout} className="mt-2" to="/my-account/wishlist">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Sidebar;
