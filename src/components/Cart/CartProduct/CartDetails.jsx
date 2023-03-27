import React from "react";

const CartDetails = () => {
  return (
    <div>
      <div className="cart-boduy">
        <h4>Cart Details</h4>
        <h5>Cart Subtotal</h5>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Sub Total</td>
              <td>₹98,506</td>
            </tr>
            <tr>
              <td>Taxes</td>
              <td>₹17,731.08</td>
            </tr>
          </tbody>
        </table>
        <div className="line-spacer"></div>

        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Ship To:</td>
            </tr>
            <tr>
              Kabir L 1833, 18th Main Road, Thiruvalluvar Colony, Anna Nagar
              West, Chennai, Tamil Nadu 600040
            </tr>
          </tbody>
        </table>
        <div className="line-spacer"></div>
        <table className="table table-borderless end-point">
          <tbody>
            <tr>
              <td>Grand Total</td>
              <td> ₹456454 </td>
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
    </div>
  );
};

export default CartDetails;
