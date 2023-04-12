import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import AddressBookDetails from "./AddressBookDetails";
import { Col, Container, Row } from "react-bootstrap";
import { scrollToTop } from "utils";

const MyAddressBook = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
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
              <AddressBookDetails />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyAddressBook;
