import { useOutlet, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Sidebar from "components/MyAccount/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "redux/features/authSlice";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useState } from "react";

function ProfileLayout() {
  const [page, setPage] = useState([]);
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
  };
  return (
    <section className="bg-off-grey">
      <Helmet>
        <title>{page?.meta?.title || "My Account | GBS"}</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <Container>
        <Row>
          <Col lg={3} className="align-self-start">
            <Col className="container-card p-4">
              <Sidebar />
            </Col>
            <div className="p-4 ms-1">
              <Button className="p-2 px-4" onClick={Logout}>
                Logout
              </Button>
            </div>
          </Col>
          <Col lg={9} className="align-self-start">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProfileLayout;
