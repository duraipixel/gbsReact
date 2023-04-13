import { useOutlet, Outlet, Navigate } from 'react-router-dom'
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from 'components/MyAccount/Sidebar';

function ProfileLayout(props) {
  const outlet = useOutlet()
  if (outlet === null) return <Navigate to='/my-account/profile' />
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
            <Col className="container-card p-4">
              <Outlet />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ProfileLayout