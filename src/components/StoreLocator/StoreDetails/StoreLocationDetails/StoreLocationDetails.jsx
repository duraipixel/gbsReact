import { Col, Container, Row } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import "components/ServiceCenter/ServiceCenterDetails/styles.scss";

const StoreLocationDetails = ({ storeLocation }) => {
  // console.log(storeLocation);
  return (
    storeLocation && (
      <Container>
        <Row className="details-container">
          <Col lg={6}>
            <h2 className="h2">{storeLocation.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: storeLocation.description}}></p>
            <div>
              {(storeLocation.email || storeLocation.contact_no) && (
                <h3>Reach Us</h3>
              )}
              <p>
                {storeLocation.group_contacts && <FiPhone />}
                {storeLocation.group_contacts}
              </p>
              <p>
                {storeLocation.group_emails && <TfiEmail />}
                {storeLocation.group_emails}
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <img src={storeLocation.store_image} alt="store-pic" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    )
  );
};

export default StoreLocationDetails;
