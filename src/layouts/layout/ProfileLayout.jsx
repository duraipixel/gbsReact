import { useOutlet, Outlet, Navigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "components/MyAccount/Sidebar";
import { useSelector } from "react-redux";

function ProfileLayout() {
  const outlet = useOutlet();
  const authUser = useSelector((state) => state.auth)
  if (outlet === null) return <Navigate to="/my-account/profile" />;
  if (authUser.isLoggedIn === false) return <Navigate to="/" />;
  return (
    <section className="bg-off-grey">
      <Container>
        <Row>
          <Col lg={3} className="align-self-start">
            <Col className="container-card p-4">
              <Sidebar />
            </Col>
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
