import React from "react";
import { Button, Form } from "react-bootstrap";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { ContactResponse } from "utils";

const ContactForm = ({ setLoader }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setLoader(true);
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("email", data.email);
    formdata.append("mobile_no", data.mobile_no);
    formdata.append("message", data.message);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_BASE_URL}/submit/contact/form`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setLoader(false);
        reset();
        ContactResponse();
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="position-relative" controlId="name">
        <label className="text-white mt-0">
          Your Name <span className="text-danger">*</span>
        </label>
        <Form.Control
          type="text"
          placeholder="Name *"
          {...register("name", {
            required: "Enter your Name",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <small className="text-white ml-2">* {message}</small>
          )}
        />
      </Form.Group>
      <Form.Group className="position-relative" controlId="email">
        <label className="text-white">
          Email Address <span className="text-danger">*</span>
        </label>
        <Form.Control
          type="email"
          className="form-control jsrequired"
          placeholder="Email *"
          {...register("email", {
            required: "Enter your Email ID",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email address!",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => (
            <small className="text-white">* {message}</small>
          )}
        />
      </Form.Group>
      <Form.Group className="position-relative" controlId="mobile_no">
        <label className="text-white">
          Contact Number <span className="text-danger">*</span>
        </label>
        <Form.Control
          type="tel"
          className="form-control jsrequired"
          placeholder="Phone Number *"
          {...register("mobile_no", {
            required: "Enter your Contact Number",
            pattern: {
              value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
              message: "Not a valid Phone Number",
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="mobile_no"
          render={({ message }) => (
            <small className="text-white">* {message}</small>
          )}
        />
      </Form.Group>
      <Form.Group controlId="message">
        <label className="text-white">Message</label>
        <Form.Control
          type="textarea"
          className="form-control"
          rows={3}
          placeholder="Message *"
          {...register("message", {
            required: "Enter your Message",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="message"
          render={({ message }) => (
            <small className="text-white">* {message}</small>
          )}
        />
      </Form.Group>
      <div className="text-right pad-top-20 mt-5">
        <Button className="submit-btn" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
