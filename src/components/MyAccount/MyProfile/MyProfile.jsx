import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FiEdit } from "react-icons/fi";
import { scrollToTop } from "utils";

const MyProfile = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="myaccount-personal-details">
      <div className="flex-jc-btwn flex-wrap heading-div">
        <h2>PersonalDetails</h2>
        <button className="btn flex-center gap-2">
          <FiEdit /> Edit Profile
        </button>
      </div>
      <Form>
        <Form.Group as={Row} className="mb-4" controlId="firstName">
          <Form.Label column sm="3">
            First Name
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              defaultValue="Kabir"
              placeholder="First Name"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="LastName">
          <Form.Label column sm="3">
            Last Name
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              defaultValue="Oberoi"
              placeholder="Last Name"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="email">
          <Form.Label column sm="3">
            E-mail
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              defaultValue="kabir.o_6396@gmail.com"
              placeholder="email"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="contactNumber">
          <Form.Label column sm="3">
            Contact Number
          </Form.Label>
          <Col sm="5">
            <Form.Control
              defaultValue="+91 12345 12345"
              placeholder="Contact Number"
            />
          </Col>
        </Form.Group>
      </Form>
      <div>
        <div className="heading-div">
          <h2>Security Settings</h2>
        </div>
        <Form>
          <Form.Group
            as={Row}
            className="mb-4 flex-center "
            controlId="Password"
          >
            <Form.Label column sm="3">
              Password
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="password"
                defaultValue="password"
                placeholder="Password"
              />
            </Col>
            <Col
              sm={{ offset: 1, span: 3 }}
              className="password-btn-div flex-jc-right"
            >
              <button type="submit" class="btn">
                Change Password
              </button>
            </Col>
            <p className="mb-0">Last Changed: 4 May 2022</p>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default MyProfile;
