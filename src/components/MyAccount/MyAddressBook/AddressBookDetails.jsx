import { useState } from "react";
import { Col } from "react-bootstrap";
import { FiEdit, FiTrash } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import AddNewAddressModal from "../FormModal/AddNewAddressModal";
import { customerAddressApi } from 'services/customer.service'
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdressForm } from '../../../redux/features/addressSlice'
const AddressBookDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const address = useSelector((state) => state.address.value)
  const dispatch = useDispatch()
  const [addresses, setAddress] = useState([])
  const fetchData = async () => {
    const { data } = await customerAddressApi()
    setAddress(data.addresses)
  }
  useMemo(() => {
    fetchData()
  }, [address])
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
            dispatch(setAdressForm({ status: true }));
          }}
        >
          Add New Address
        </button>
      </div>
      {
        addresses?.length ?
          <ul className="list-group">
            {
              addresses.map(address => (
                <div key={address.id} className="list-group-item">
                  <div>
                    <h3>{address.name}</h3>
                  </div>
                  <div className="mt-3">
                    <p>{address.address_line1}</p>
                    <p>{address.city} - {address.post_code}</p>
                    <p>{address.state}, {address.country}</p>
                    <div className="flex-jc-btwn flex-wrap">
                      <span>Phone:  {address.mobile_no}</span>
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
                </div>
              ))
            }
          </ul>
          : null
      }
      <AddNewAddressModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default AddressBookDetails;
