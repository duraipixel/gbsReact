import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { FiEdit, FiTrash } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import AddNewAddressModal from "../FormModal/AddNewAddressModal";
import { customerAddressApi } from 'services/customer.service'
import { useMemo } from "react";
const AddressBookDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const fetchData = async () => {
    const { data } = await customerAddressApi()
    console.log(data)
  }
  useMemo(() => {
    fetchData()
  }, [])
  return (
    <div className="address-book-details">
      <Col className="container-card card p-4">
        <div className="flex-jc-btwn flex-wrap">
          <h3>Kabir L</h3>
          <button className="btn default-address-btn flex-center gap-2">
            <SlLocationPin /> Default Address
          </button>
        </div>
        <div className="mt-3">
          <p>1833, 18th Main Road, Thiruvalluvar Colony, Anna Nagar West</p>
          <p>Chennai - 600040</p>
          <p>Tamil Nadu, India</p>
          <div className="flex-jc-btwn flex-wrap">
            <span>Phone: +91 00000 00000</span>
            <div className="align-c gap-3">
              <button className="btn edit-btn flex-center">
                <FiEdit />
              </button>
              <button className="btn del-btn flex-center">
                <FiTrash />
              </button>
            </div>
          </div>
        </div>
      </Col>
      <div className="flex-jc-btwn align-c flex-wrap p-1 pt-5 pb-4">
        <h2>Other Addresses</h2>
        <button
          className="btn align-c add-address-btn"
          onClick={() => {
            setModalShow(true);
          }}
        >
          Add New Address
        </button>
      </div>
      <Col className="container-card card p-4">
        <div>
          <h3>Inaya</h3>
        </div>
        <div className="mt-3">
          <p>01/02, Lalji Shopping Centre, S V Road</p>
          <p>Borivali (West) - 400092</p>
          <p>Maharashtra, India</p>
          <div className="flex-jc-btwn flex-wrap">
            <span>Phone: +91 11111 11111</span>
            <div className="align-c gap-3">
              <button className="btn default-address-btn flex-center">
                Set as Default
              </button>
              <button className="btn edit-btn flex-center">
                <FiEdit />
              </button>
              <button className="btn del-btn flex-center">
                <FiTrash />
              </button>
            </div>
          </div>
        </div>
      </Col>
      <br />
      <Col className="container-card card p-4">
        <div>
          <h3>Naya</h3>
        </div>
        <div className="mt-3">
          <p>Flat No-207, Eldams Square, 167/2, Eldams Road, Alwarpet</p>
          <p>Chennai - 600018</p>
          <p>Chennai - 600018</p>
          <div className="flex-jc-btwn flex-wrap">
            <span>Phone: +91 22222 22222</span>
            <div className="align-c gap-3">
              <button className="btn default-address-btn flex-center">
                Set as Default
              </button>
              <button className="btn edit-btn flex-center">
                <FiEdit />
              </button>
              <button className="btn del-btn flex-center">
                <FiTrash />
              </button>
            </div>
          </div>
        </div>
      </Col>
      <AddNewAddressModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default AddressBookDetails;
