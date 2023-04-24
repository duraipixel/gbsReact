import { Row } from "react-bootstrap";
import AddressBookDetails from "./AddressBookDetails";

function MyAddressBook() {
  return (
    <Row>
      <AddressBookDetails selectType="button" />
    </Row>
  );
}

export default MyAddressBook;
