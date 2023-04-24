import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import "components/ServiceCenter/ServiceCenterDetails/styles.scss";

const StoreLocationDetails = () => {
  return (
    <Container>
    <Row className="details-container">
      <Col>
        <h2>Dell Authorized Showroom in KK Nagar</h2>
        <p>
        Visit our Exclusive Dell Showroom in KK Nagar, to shop the all-new Laptops, Desktops & Accessories from Dell at the best price with offers. Our showrooms are Authorized by Dell, all the offers from Dell are applicable here. Contact us to get more details.
        </p>
        <div>
          <h3>Reach Us</h3>
          <p>
            <FiPhone /> +91 08048008393, +91 98416 71155, +91 98416 60470
          </p>
          <p>
            <TfiEmail /> dellkkn@gbssystems.com
          </p>
        </div>
      </Col>
      <Col>
        <img src={require("assets/Store/StoreImage.png")} alt="" />
      </Col>
    </Row>
  </Container>
  )
}

export default StoreLocationDetails