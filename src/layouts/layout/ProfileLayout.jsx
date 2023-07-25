import { useOutlet, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sidebar from "components/MyAccount/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "redux/features/authSlice";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { clearCart } from "redux/features/cartSlice";
import { strRandom } from "utils";

function ProfileLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const outlet = useOutlet();
  const authUser = useSelector((state) => state.auth);
  if (outlet === null) return <Navigate to="/my-account/profile" />;
  if (authUser.isLoggedIn === false) return <Navigate to="/" />;

  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    toast.success("Logout Success!");
    navigate("/");
    dispatch(setAuthUser({ data: [], isLoggedIn: false }));
    dispatch(clearCart());
    if (localStorage.getItem('guest_token') === null) {
      localStorage.setItem('guest_token', strRandom())
    }
  };
  return (
    <section className="bg-off-grey py-md-4">
      <Helmet>
        <title>My Account - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content="My Account - GBS Systems" />
        <meta name="keywords" content="My Account - GBS Systems" />
      </Helmet>
      <Container>
        <Row>
          <Col lg={3}>
            <Sidebar Logout={Logout} />
          </Col>
          <Col lg={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProfileLayout;
