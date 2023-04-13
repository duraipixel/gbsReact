import { Container, Row } from "react-bootstrap";
import AddressBookDetails from "./AddressBookDetails";

function MyAddressBook() {
  return (
    <Container>
      <Row>
        <AddressBookDetails />
      </Row>
    </Container>
  );
}

export default MyAddressBook;
