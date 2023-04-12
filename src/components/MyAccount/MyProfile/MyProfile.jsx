import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";
import PersonalDetails from "./PersonalDetails";
import { scrollToTop } from "utils";

const MyProfile = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
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
                <PersonalDetails />
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MyProfile;
