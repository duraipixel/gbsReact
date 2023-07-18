/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import CheckoutButton from "components/CheckoutButton";
import { useSelector } from "react-redux";
import {
  setShippingChargesApi,
  shippingChargesApi,
} from "services/product.service";
import AddressBookDetails from "components/MyAccount/MyAddressBook/AddressBookDetails";
import { Modal } from "react-bootstrap";
import PickupFromStoreAddress from "components/PickupFromStoreAddress/PickupFromStoreAddress";
import { toast } from "react-hot-toast";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
const CartDetails = ({ checkoutData, setCheckoutData, coupon }) => {
  const authUser = useSelector((state) => state.auth);
  const address = useSelector((state) => state.cartAddress);
  const [shippingMethod, setShippingMethod] = useState(
    checkoutData?.has_pickup_store === false ? "Standard_Shipping" : "Standard_Shipping"
  );
  const [pickupFromStore, setPickupFromStore] = useState(
    checkoutData?.has_pickup_store
  );
  useMemo(() => setPickupFromStore(checkoutData?.has_pickup_store), [checkoutData?.has_pickup_store])
  const [addressModalType, setAddressModalType] = useState(null);
  const [shippingTypes, setshippingTypes] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (shippingMethod === "Standard_Shipping" && checkoutData) {
      shippingChargesApi(
        checkoutData.product_tax_exclusive_total_without_format
      ).then((response) => {
        setshippingTypes(response.data);
      });
    }
  }, [checkoutData, shippingMethod]);

  const shippingMethodHandler = (e, value) => {
    setShippingMethod(value);
    localStorage.setItem("shipping_method", value?.toUpperCase());
  };
  const setShippingCharges = async (id) => {
    localStorage.setItem("shipping_charge_id", id);
    const response = await setShippingChargesApi(id);
    setCheckoutData(response.data.data.cart_total);
    localStorage.setItem(
      "checkout_data",
      JSON.stringify(response.data.data.cart_total)
    );
    toast.success(response.data.message)
  };

  if (checkoutData)
    return (
      <>
        <div className="card border-0 shadow-lg">
          <div className="card-body">
            <div className="mb-3 "><b className="fw-500"> Cart Details</b></div>
            <ul className="list-group mb-3">
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>Sub Total</span>
                <div>₹ {checkoutData.product_tax_exclusive_total}</div>
              </li>
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>Taxes</span>
                <div>₹ {checkoutData.tax_total}</div>
              </li>
              {coupon ? (
                <li class="list-group-item d-flex align-items-center justify-content-between">
                  <span>Coupon</span>
                  <div className="text-success"> - ₹ {coupon.coupon_amount}</div>
                </li>
              ) : (
                ""
              )}
            </ul>
            {authUser.isLoggedIn ? (
              <>
                <div>
                  <div className="mb-2"><b className="fw-500">Shipping Method</b></div>
                  <TabContext value={shippingMethod} >
                    <div className="bg-light border rounded overflow-hidden mb-2">
                      <TabList onChange={shippingMethodHandler} >
                        <Tab label="Standard" value="Standard_Shipping" />
                        <Tab label="Pickup From Store" value="Pickup_From_Store" />
                      </TabList>
                    </div>
                    <TabPanel value="Standard_Shipping" className="px-0 py-2">
                      <ul className="list-group mb-3">
                        {
                          shippingTypes.length > 0 ?
                            shippingTypes.map((type, index) => (
                              <label htmlFor={type.shipping_title} key={index} onChange={() => setShippingCharges(type.id)}
                                className="list-group-item list-group-item-action d-flex justify-content-between"
                              >
                                <span>{type.shipping_title}</span>
                                <div>
                                  <b>
                                    {type.charges === "0.00" ? (
                                      <span className="text-success">FREE</span>
                                    ) : (
                                      type.charges
                                    )}
                                  </b>
                                  <input
                                    type="radio"
                                    name="shipping_type"
                                    id={type.shipping_title}
                                    className="ms-2"
                                  />
                                </div>
                              </label>
                            ))
                            : "Fetching..."
                        }
                      </ul>
                      <div className="border rounded py-1 p-3">
                        <p className="m-0 text-primary d-flex align-items-center justify-content-between">
                          <span><i className="fa fa-map-marker"></i> Shipping Address</span>
                          <button
                            className="fs-14 btn btn-sm"
                            onClick={() => {
                              setAddressModalType("SHIPPING_ADDRESS");
                              setShow(!show);
                            }}
                          >
                            {address.shipping_address == null ? <>  <i className="fa fa-map-signs me-1"></i> Select </> : <><i className="fa fa-edit me-1"></i>Change</>}
                          </button>
                        </p>
                        {address.shipping_address ? (
                          <div>
                            <b className="text-secondary">{address.shipping_address?.name}</b> <br />
                            <p className="address-details">
                              {address.shipping_address?.address_line1} ,
                              {address.shipping_address?.city} -
                              {address.shipping_address?.post_code},
                              {address.shipping_address?.state},
                              {address.shipping_address?.country}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </TabPanel>
                    <TabPanel value="Pickup_From_Store" className="px-0 py-2">
                      <PickupFromStoreAddress brandId={checkoutData?.brand_id} />
                    </TabPanel>
                  </TabContext>
                </div>
                <div className="border rounded py-1 p-3">
                  <p className="m-0 text-primary d-flex align-items-center justify-content-between">
                    <span><i className="fa fa-map-marker"></i> Billing Address</span>
                    <button
                      className="fs-14 btn btn-sm"
                      onClick={() => {
                        setAddressModalType("BILLING_ADDRESS");
                        setShow(!show);
                      }}
                    >
                      {address.billing_address == null ? <>  <i className="fa fa-map-signs me-1"></i> Select </> : <><i className="fa fa-edit me-1"></i>Change</>}
                    </button>
                  </p>
                  {address.billing_address !== null ? (
                    <div>
                      <b className="text-secondary">{address.billing_address?.name}</b> <br />
                      <p className="address-details">
                        {address.billing_address?.address_line1} ,
                        {address.billing_address?.city} -
                        {address.billing_address?.post_code},
                        {address.billing_address?.state},
                        {address.billing_address?.country}
                      </p>
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}
            <table className="table table-borderless end-point m-0">
              <tbody>
                <tr>
                  <td style={{ paddingLeft: "0", textAlign: "left" }}>
                    Grand Total
                  </td>
                  <td style={{ paddingRight: "0", textAlign: "right" }}>
                    ₹ {checkoutData.total}
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <CheckoutButton
                className="btn btn-dark w-100 mt-3"
                checkoutData={checkoutData}
              />
            </div>
          </div>
        </div>
        {addressModalType !== null && (
          <Modal
            show={show}
            size="lg"
            onHide={() => setShow(!show)}
            backdrop="static"
            keyboard={false}
            scrollable={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {addressModalType === "SHIPPING_ADDRESS"
                  ? "Shipping address"
                  : "Billing address"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddressBookDetails
                selectType="checkbox"
                modalType={addressModalType}
              />
            </Modal.Body>
          </Modal>
        )}
      </>
    );
};

export default CartDetails;
