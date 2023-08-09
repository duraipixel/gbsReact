import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import {
  customerAddressApi,
  deleteAddressApi,
  setDefaultAddressApi,
} from "services/customer.service";
import { useDispatch, useSelector } from "react-redux";
import { setAddress, setAdressForm } from "../../../redux/features/addressSlice";
import SweetAlert from "react-bootstrap-sweetalert";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import {
  clearBillingAddress,
  clearShippingAddress,
  setBillingAddress,
  setShippingAddress,
} from "redux/features/cartAddressSlice";
import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import { HalfHeightLoader } from "utils";
const AddressBookDetails = ({ selectType, modalType, setShow }) => {
  const addresses = useSelector((state) => state.address.value);
  const cartAddress = useSelector((state) => state.cartAddress);

  const dispatch = useDispatch();
  const [addressesId, setAddressId] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const fetchData = () => {
    setIsFetching(true);
    customerAddressApi().then(response => {
      dispatch(setAddress(response.data.addresses))
      setIsFetching(false);
    });
  };
  const deleteAddress = async () => {
    let selectedAddress = cartAddress[modalType === 'SHIPPING_ADDRESS' ? 'shipping_address' : 'billing_address']['customer_address_id']
    if (selectedAddress === addressesId) {
      if (modalType === "SHIPPING_ADDRESS") {
        dispatch(clearShippingAddress());
      }
      if (modalType === "BILLING_ADDRESS") {
        dispatch(clearBillingAddress());
      }
    }
    if (addressesId !== null) {
      deleteAddressApi(addressesId).then(response => {
        toast.success(response.data?.message);
        setDeleteAlert(false);
        setAddressId(null); 
        dispatch(setAddress(response.data.addresses))
      })
    }
  };
  const setDefaultAddressHanlder = async (id, address) => {
    const { data } = await setDefaultAddressApi(id);
    toast.success(data?.message);
    if (modalType === "SHIPPING_ADDRESS") {
      dispatch(setShippingAddress(address));
    }
    if (modalType === "BILLING_ADDRESS") {
      dispatch(setBillingAddress(address));
    }
    setShow(false)
  };
  useEffect(() => {
    fetchData();
  }, []);
  const checkIsAddress = (type, id) => {
    if (type === "SHIPPING_ADDRESS") {
      const shipping_address = JSON.parse(
        localStorage.getItem("shipping_address")
      );
      if (shipping_address?.customer_address_id === id) {
        return true;
      } else {
        return false;
      }
    }
    if (type === "BILLING_ADDRESS") {
      const billing_address = JSON.parse(
        localStorage.getItem("billing_address")
      );
      if (billing_address?.customer_address_id === id) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <div className="address-book-details">
      <div className="flex-jc-btwn align-c flex-wrap mb-3">
        {selectType !== "checkbox" ? <h2>Address</h2> : ""}
        <button
          className="btn btn-outline-info"
          onClick={() => {
            dispatch(setAdressForm({ status: true, type: "CREATE" }));
          }}
        >
          Add New Address
        </button>
      </div>
      {addresses.length > 0 ? (
        <ul className="list-group">
          {addresses.map((address, i) => (
            <label
              htmlFor={address?.name}
              key={i}
              className="list-group-item d-flex justify-content-between"
            >
              <div className="d-flex">
                <div>
                  {selectType === "checkbox" ? (
                    <input
                      type="radio"
                      checked={checkIsAddress(
                        modalType,
                        address?.customer_address_id
                      )}
                      className="me-3 form-check-input"
                      name="default_address"
                      onChange={() =>
                        setDefaultAddressHanlder(
                          address?.customer_address_id,
                          address
                        )
                      }
                      id={address?.name}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div className="h3">
                    {address?.name}
                    <span className="badge bg-warning text-dark rounded-pill ms-2 fs-6 py-0">
                      {address.address_type}
                    </span>
                    {address?.is_default === "1" ? (
                      <span className="badge bg-dark text-white rounded-pill ms-2 small py-0">
                        <SlLocationPin /> Default Address
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>
                    {address?.address_line1} ,{address.city} -
                    {address.post_code_number},{address.state}, {address.country}
                  </p>
                  <span>Phone: {address.mobile_no}</span>
                </div>
              </div>
              <div>
                <div className="btn-group">
                  {address?.is_default === "0" && selectType !== "checkbox" ? (
                    <button
                      onClick={() =>
                        setDefaultAddressHanlder(address?.customer_address_id)
                      }
                      className="btn-sm btn btn-light border"
                    >
                      Set as Default
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    onClick={() =>
                      dispatch(
                        setAdressForm({
                          status: true,
                          type: "EDIT",
                          edit_value: address,
                        })
                      )
                    }
                    className="btn-sm btn btn-info"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => {
                      setDeleteAlert(true);
                      setAddressId(address?.customer_address_id);
                    }}
                    className="btn-sm btn btn-primary"
                  >
                    <FiTrash />
                  </button>
                </div>
              </div>
            </label>
          ))}
        </ul>
      ) : null}
      {isFetching && <HalfHeightLoader />}
      {addresses.length === 0 && isFetching === false && <NoDataComponent />}
      {/* <AddNewAddressModal show={modalShow} onHide={() => setModalShow(false)} /> */}
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
    </div>
  );
};

export default AddressBookDetails;
