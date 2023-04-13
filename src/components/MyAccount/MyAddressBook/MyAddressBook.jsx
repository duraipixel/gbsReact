import { Col, Container, Row } from "react-bootstrap";
import AddressBookDetails from "./AddressBookDetails";

function MyAddressBook() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={9} className="align-self-start">
            <AddressBookDetails />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MyAddressBook;
