/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CheckoutButton from "components/CheckoutButton";
import { useDispatch, useSelector } from "react-redux";
import { shippingChargesApi } from "services/product.serice";
import AddressBookDetails from "components/MyAccount/MyAddressBook/AddressBookDetails";
import { Modal } from "react-bootstrap";
import { setAdressForm } from "redux/features/addressSlice";
import PickupFromStoreAddress from "components/PickupFromStoreAddress/PickupFromStoreAddress";
const CartDetails = ({ checkoutData }) => {
  const authUser = useSelector((state) => state.auth)
  const myAddress = useSelector((state) => state.address.value)
  const address = useSelector((state) => state.cartAddress)
  const dispatch = useDispatch()
  const [shippingMethod, setShippingMethod] = useState('Standard_Shipping')
  const [addressModalType, setAddressModalType] = useState(null)
  const [addressForm, setAddressForm] = useState(false)
  const [shippingTypes, setshippingTypes] = useState([])
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (shippingMethod === 'Standard_Shipping' && checkoutData) {
      shippingChargesApi(checkoutData.product_tax_exclusive_total_without_format).then(response => {
        setshippingTypes(response.data)
      })
    }
  }, [checkoutData])
  const addAddresHandler = (type) => {
    setAddressForm(true);
    setAddressModalType(type);
    // setShow(!show)
    dispatch(setAdressForm({ status: true, type: 'CREATE' }));
  }
  if (checkoutData) return (
    <>
      <div className="card border-0 shadow-lg" >
        <h3 className="card-header bg-white fw-bold">Cart Details</h3>
        <div className="card-body">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td style={{ paddingLeft: "0", textAlign: "left" }}>Sub Total</td>
                <td style={{ paddingRight: "0", textAlign: "right" }}>₹{checkoutData.product_tax_exclusive_total}</td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "0", textAlign: "left" }}>Taxes</td>
                <td style={{ paddingRight: "0", textAlign: "right" }}>
                  ₹{checkoutData.tax_total}
                </td>
              </tr>
            </tbody>
          </table>
          {
            authUser.isLoggedIn ?
              <>
                <div className="line-spacer"></div>
                <div className="mb-3">
                  <h5 className="text-primary">Select Shipping Method</h5>
                  <label htmlFor="ShippingMethod" className="d-block py-2">
                    <input type="radio" checked={shippingMethod === 'Standard_Shipping'} onChange={(e) => setShippingMethod(e.target.value)} value='Standard_Shipping' name="ShippingMethod" id="ShippingMethod" className="form-check-input me-2" />
                    Standard Shipping
                  </label>
                  {
                    shippingTypes.length > 0 && shippingMethod === 'Standard_Shipping' ?
                      <ul className="list-group">
                        {
                          shippingTypes.map((type, index) => (
                            <label htmlFor={type.shipping_title} key={index} className="list-group-item list-group-item-action d-flex justify-content-between">
                              <span>{type.shipping_title}</span>
                              <div>
                                <b>{type.charges === "0.00" ? <span className="text-success">FREE</span> : type.charges}</b>
                                <input type="radio" name="shipping_type" id={type.shipping_title} className="ms-2" />
                              </div>
                            </label>
                          ))
                        }
                      </ul>
                      : ""
                  }
                  <label htmlFor="PickupFromStore" className="d-block py-2">
                    <input type="radio" checked={shippingMethod === 'Pickup_From_Store'} onChange={(e) => setShippingMethod(e.target.value)} value='Pickup_From_Store' name="ShippingMethod" id="PickupFromStore" className="form-check-input me-2" />
                    Pickup From Store
                  </label>
                </div>
                <div className="line-spacer"></div>
                {
                  shippingMethod === 'Pickup_From_Store' ?
                    <PickupFromStoreAddress />
                    :
                    <div>
                      <h5 className="text-primary d-flex align-items-center justify-content-between">
                        Shipping Address
                        {
                          typeof (myAddress) === 'object' && myAddress.length === 0 ?
                            <button className="fs-14 btn btn-sm" onClick={() => { addAddresHandler('SHIPPING_ADDRESS') }}>
                              Add Address
                            </button>
                            :
                            <button className="fs-14 btn btn-sm" onClick={() => { setAddressModalType('SHIPPING_ADDRESS'); setShow(!show) }}>
                              Change Address
                            </button>
                        }
                      </h5>
                      {
                        address.shipping_address ?
                          <div>
                            {address.shipping_address?.name} <br />
                            <p className="address-details">
                              {address.shipping_address?.address_line1} ,{address.shipping_address?.city} - {address.shipping_address?.post_code},{address.shipping_address?.state}, {address.shipping_address?.country}
                            </p>
                          </div>
                          : null
                      }
                    </div>
                }
                <div className="line-spacer"></div>
                <div>
                  <h5 className="text-primary d-flex align-items-center justify-content-between">
                    Billing Address
                    {
                      typeof (myAddress) === 'object' && myAddress.length === 0 ?
                        <button className="fs-14 btn btn-sm" onClick={() => { addAddresHandler('BILLING_ADDRESS') }}>
                          Add Address
                        </button>
                        :
                        <button className="fs-14 btn btn-sm" onClick={() => { setAddressModalType('BILLING_ADDRESS'); setShow(!show) }}>
                          Change Address
                        </button>
                    }
                  </h5>
                  {
                    address.billing_address !== null ?
                      <div>
                        {address.billing_address?.name} <br />
                        <p className="address-details">
                          {address.billing_address?.address_line1} ,{address.billing_address?.city} - {address.billing_address?.post_code},{address.billing_address?.state}, {address.billing_address?.country}
                        </p>
                      </div>
                      : null
                  }
                </div>
                <div className="line-spacer"></div>
              </>
              : <div className="line-spacer"></div>
          }
          <table className="table table-borderless end-point m-0">
            <tr>
              <td style={{ paddingLeft: "0", textAlign: "left" }}>Grand Total</td>
              <td style={{ paddingRight: "0", textAlign: "right" }}>
                ₹{checkoutData.total}
              </td>
            </tr>
          </table>
          <div>
            <CheckoutButton className="btn btn-dark w-100 mt-3" />
          </div>
        </div>
      </div>
      {addressModalType !== null && <Modal
        show={show}
        size="lg"
        onHide={() => setShow(!show)}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {addressModalType === 'SHIPPING_ADDRESS' ? 'Shipping address' : "Billing address"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddressBookDetails openCreateForm={addressForm} selectType="checkbox" modalType={addressModalType} />
        </Modal.Body>
      </Modal>}
    </>
  );
};

export default CartDetails;
