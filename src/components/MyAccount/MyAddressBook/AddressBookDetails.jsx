import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import AddNewAddressModal from "../FormModal/AddNewAddressModal";
import { customerAddressApi, deleteAddressApi, setDefaultAddressApi } from 'services/customer.service'
import { useDispatch, useSelector } from "react-redux";
import { setAdressForm } from '../../../redux/features/addressSlice'
import SweetAlert from "react-bootstrap-sweetalert";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { setBillingAddress, setShippingAddress } from "redux/features/cartAddressSlice";
const AddressBookDetails = ({ selectType, modalType }) => {
  const [modalShow, setModalShow] = useState(false);
  const address = useSelector((state) => state.address.value)
  const dispatch = useDispatch()
  const [addresses, setAddress] = useState([])
  const [addressesId, setAddressId] = useState(null)
  const [deleteAlert, setDeleteAlert] = useState(false);
  const fetchData = async () => {
    const { data } = await customerAddressApi()
    setAddress(data.addresses)
  }
  document.querySelector('nav').classList.toggle('sticky-top')
  const deleteAddress = async () => {
    const { data } = await deleteAddressApi(addressesId)
    toast.success(data?.message)
    setDeleteAlert(false)
    setAddressId(null)
    setAddress(data.addresses)
  }
  const setDefaultAddressHanlder = async (id, address) => {
    const { data } = await setDefaultAddressApi(id)
    toast.success(data?.message)
    if (modalType === 'SHIPPING_ADDRESS') {
      dispatch(setShippingAddress(address))
    }
    if (modalType === 'BILLING_ADDRESS') {
      dispatch(setBillingAddress(address))
    }
  }
  useEffect(() => {
    fetchData()
  }, [address])
  const checkIsAddress = (type, id) => {
    if (type === 'SHIPPING_ADDRESS') {
      const shipping_address = JSON.parse(localStorage.getItem("shipping_address"));
      if (shipping_address?.customer_address_id === id) {
        return true
      }
      else {
        return false
      }
    }
    if (type === 'BILLING_ADDRESS') {
      const billing_address = JSON.parse(localStorage.getItem("billing_address"));
      if (billing_address?.customer_address_id === id) {
        return true
      }
      else {
        return false
      }
    }
  }
  return (
    <div className="address-book-details">
      <div className="flex-jc-btwn align-c flex-wrap mb-3">
        {
          selectType !== 'checkbox' ?
            <h2>Address</h2>
            : ""
        }
        <button
          className="btn btn-outline-info"
          onClick={() => {
            dispatch(setAdressForm({ status: true, type: 'CREATE' }));
          }}
        >
          Add New Address
        </button>
      </div>
      {
        addresses?.length ?
          <ul className="list-group">
            {
              addresses.map((address, i) => (
                <label htmlFor={address?.name} key={i} className="list-group-item d-flex justify-content-between" >
                  <div className="d-flex">
                    <div>
                      {
                        selectType === "checkbox" ?
                          <input type="radio" checked={checkIsAddress(modalType, address?.customer_address_id)} className="me-3 form-check-input" name="default_address" onChange={() => setDefaultAddressHanlder(address?.customer_address_id, address)} id={address?.name} />
                          : ""
                      }
                    </div>
                    <div>
                      <div className="h3">
                        {address?.name}
                        <span className="badge bg-warning text-dark rounded-pill ms-2 fs-6 py-0">{address.address_type}</span>
                        {
                          address?.is_default === "1" ?
                            <span className="badge bg-dark text-white rounded-pill ms-2 small py-0">
                              <SlLocationPin /> Default Address
                            </span>
                            : ""
                        }
                      </div>
                      <p>{address?.address_line1} ,{address.city} - {address.post_code},{address.state}, {address.country}</p>
                      <span>Phone:  {address.mobile_no}</span>
                    </div>
                  </div>
                  <div>
                    <div className="btn-group">
                      {
                        address?.is_default === "0" && selectType !== "checkbox" ?
                          <button onClick={() => setDefaultAddressHanlder(address?.customer_address_id)} className="btn-sm btn btn-light border">
                            Set as Default
                          </button>
                          : ""
                      }
                      <button onClick={() => dispatch(setAdressForm({ status: true, type: 'EDIT', edit_value: address }))} className="btn-sm btn btn-info">
                        <FiEdit />
                      </button>
                      <button onClick={() => { setDeleteAlert(true); setAddressId(address?.customer_address_id) }} className="btn-sm btn btn-primary">
                        <FiTrash />
                      </button>
                    </div>
                  </div>
                </label>
              ))
            }
          </ul>
          : ""
      }
      <AddNewAddressModal show={modalShow} onHide={() => setModalShow(false)} />
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={deleteAddress}
        onCancel={() => setDeleteAlert(false)}
        focusCancelBtn
        show={deleteAlert}
      >
        You will not be able to recover this data!
      </SweetAlert>
    </div >
  );
};

export default AddressBookDetails;
