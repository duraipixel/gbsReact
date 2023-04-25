import { Col, Button, Modal, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const AddNewAddressModal = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="new-address-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-info">Add a New Shipping Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="px-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <h3>Contact Details</h3>
                  <div className="flex-jc-btwn gap-1 flex-wrap">
                    <Form.Group
                      className="mb-3"
                      controlId="name"
                      style={{ width: "49%" }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                          required: "This is required.",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="contactnumber"
                      style={{ width: "49%" }}
                    >
                      <Form.Control
                        type="tel"
                        placeholder="Mobile Number"
                        {...register("mobile", {
                          required: "This is required.",
                          pattern: {
                            value:
                              /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                            message: "Not a valid Mobile Number",
                          },
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="mobile"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </div>
                  <div className="flex-jc-btwn gap-1 flex-wrap">
                    <Form.Group
                      className="mb-3"
                      controlId="Telephone Number"
                      style={{ width: "49%" }}
                    >
                      <Form.Control
                        type="Telephone Number"
                        placeholder="Telephone Number"
                        {...register("Telephone Number", {
                          required: "This is required.",
                          pattern: {
                            value:
                              /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                            message: "Not a valid Telephone Number",
                          },
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="Telephone Number"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="addresstype"
                      style={{ width: "49%" }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Address Type"
                        {...register("addresstype", {
                          required: "This is required.",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="addresstype"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </div>
                  <h3>Address</h3>

                  <Form.Group className="mb-3" controlId="street">
                    <Form.Control
                      type="text"
                      placeholder="Building Number, Street Name & Locality"
                      {...register("street", {
                        required: "This is required.",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="street"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                  </Form.Group>
                  <div className="flex-jc-btwn gap-1 flex-wrap">
                    <Form.Group
                      className="mb-3"
                      controlId="city"
                      style={{ width: "49%" }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="City"
                        {...register("city", {
                          required: "This is required.",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="city"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="pincode"
                      style={{ width: "49%" }}
                    >
                      <Form.Control
                        type="text"
                        placeholder="Pincode"
                        {...register("pincode", {
                          required: "This is required.",
                        })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="pincode"
                        render={({ message }) => (
                          <small className="text-danger ml-2">
                            * {message}
                          </small>
                        )}
                      />
                    </Form.Group>
                  </div>
                  <Form.Group
                    className="mb-3"
                    controlId="state"
                    style={{ width: "49%" }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="State"
                      {...register("state", {
                        required: "This is required.",
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="state"
                      render={({ message }) => (
                        <small className="text-danger ml-2">* {message}</small>
                      )}
                    />
                  </Form.Group>
                  <div className="text-center mt-3 mb-1">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AddNewAddressModal;
