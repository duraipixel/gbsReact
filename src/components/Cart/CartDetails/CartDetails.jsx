import React from "react";
import { Link } from "react-router-dom";
import razorpay from "assets/images/Cart/razorpay.png";
const CartDetails = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <h4>Cart Details</h4>
      <h5 className="clr-accent">Cart Subtotal</h5>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}>Sub Total</td>
            <td style={{ paddingRight: "0", textAlign: "right" }}>₹98,506</td>
          </tr>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}>Taxes</td>
            <td style={{ paddingRight: "0", textAlign: "right" }}>
              ₹17,731.08
            </td>
          </tr>
        </tbody>
      </table>
      <div className="line-spacer"></div>
      <h5 className="clr-accent">Select Shipping Speed</h5>
      <table className="table table-borderless">
        <thead>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}> Ship To:</td>
            <td
              style={{
                position: "absolute",
                right: "0",
                paddingRight: "0",
              }}
            >
              <Link to="/" className="change-address">
                Change Address
              </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr colSpan="2">
            Kabir L <br />
            <p className="address-details" style={{ paddingLeft: "0", textAlign: "left" }}>
              1833, 18th Main Road, Thiruvalluvar Colony, Anna Nagar West,
              Chennai, Tamil Nadu 600040
            </p>
          </tr>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}>
              <label htmlFor="standard">
                <input type="radio" name="speed" id="standard" /> Standard
                Shipping
              </label>
            </td>
            <td style={{ paddingRight: "0", textAlign: "right" }}>FREE</td>
          </tr>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}>
              <label htmlFor="express">
                <input type="radio" name="speed" id="express" /> 2 Day Express
                Shipping
              </label>
            </td>
            <td style={{ paddingRight: "0", textAlign: "right" }}>₹500</td>
          </tr>
        </tbody>
      </table>
      <div className="line-spacer"></div>
      <h5 className="clr-accent">Select Payment Method</h5>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}>
              <label htmlFor="COD">
                <input type="radio" name="payment" id="COD" /> Cash on Delivery
              </label>
            </td>
          </tr>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}>
              <label htmlFor="razorpay">
                <input type="radio" name="payment" id="razorpay" />{" "}
                <img src={razorpay} alt="" />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table table-borderless end-point">
        <tbody>
          <tr>
            <td style={{ paddingLeft: "0", textAlign: "left" }}>Grand Total</td>
            <td style={{ paddingRight: "0", textAlign: "right" }}>
              116,237.08
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button>
                {/* <span className="spinner-grow spinner-grow-sm"></span> */}
                Proceed to Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartDetails;
