import { useState } from "react";
import { Col } from "react-bootstrap";
import { FiEdit, FiTrash } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import AddNewAddressModal from "../FormModal/AddNewAddressModal";
import { customerAddressApi, deleteAddressApi, setDefaultAddressApi } from 'services/customer.service'
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdressForm } from '../../../redux/features/addressSlice'
import SweetAlert from "react-bootstrap-sweetalert";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
const AddressBookDetails = () => {
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
  const deleteAddress = async () => {
    const { data } = await deleteAddressApi(addressesId)
    toast.success(data?.message)
    setDeleteAlert(false)
    setAddressId(null)
    setAddress(data.addresses)
  }
  const setDefaultAddressHanlder = async (id) => {
    const { data } = await setDefaultAddressApi(id)
    toast.success(data?.message)
    fetchData()
  }
  useEffect(() => {
    fetchData()
  }, [address])
  return (
    <div className="address-book-details">
      <div className="flex-jc-btwn align-c flex-wrap mb-3">
        <h2>Other Addresses</h2>
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
                <div key={i} className="list-group-item">
                  <div className="flex-jc-btwn flex-wrap">
                    <h3>{address.name}</h3>
                    <div>
                      {
                        address?.is_default === "1" ?
                          <button className="btn btn-dark btn-sm ">
                            <SlLocationPin /> Default Address
                          </button>
                          : ""
                      }
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>{address.address_line1}</p>
                    <p>{address.city} - {address.post_code}</p>
                    <p>{address.state}, {address.country}</p>
                    <div className="flex-jc-btwn flex-wrap">
                      <span>Phone:  {address.mobile_no}</span>
                      <div className="btn-group">
                        {
                          address?.is_default === "0" ?
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
                  </div>
                </div>
              ))
            }
          </ul>
          : null
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
