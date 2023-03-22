import React from "react";

const CartDetails = () => {
  return (
    <div>
      {/* <div className="cart-boduy">
        <h4>Cart Details</h4>
        <h5>Cart Subtotal</h5>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Sub Total</td>
              <td>₹{cart_total.product_tax_exclusive_total}</td>
            </tr>
            <tr>
              <td>Taxes</td>
              <td>₹{cart_total.tax_total}</td>
            </tr>
            {cart_total.coupon_amount ? (
              <tr>
                <td>
                  Coupon {cart_total.coupon_code} (-)
                  <div className="coupon-pane">
                    {couponInfo &&
                      couponInfo.length > 0 &&
                      couponInfo.map((items) => (
                        <div>
                          <div>Coupon Applied for {items.category_name}</div>
                          <div>
                            Coupon Applied amount for{" "}
                            {items.coupon_applied_amount}
                          </div>
                          <div>
                            Coupon Amount : {items.discount_amount}{" "}
                            {items.coupon_type.discount_type == "percentage"
                              ? "(" +
                                parseInt(items.coupon_type.discount_value) +
                                "%)"
                              : ""}{" "}
                          </div>
                        </div>
                      ))}
                  </div>
                </td>
                <td>₹{cart_total.coupon_amount}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
        <div className="line-spacer"></div>

        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Ship To:</td>
            </tr>
            <tr>
              {shippingAddress && (
                <td colSpan="2">
                  {shippingAddress.name}
                  <br /> {shippingAddress.address_line1},{shippingAddress.city}
                  {shippingAddress.state}
                  {shippingAddress.post_code}
                </td>
              )}
            </tr>
          </tbody>
        </table>

        <ShippingFee
          shippCharges={shippCharges}
          updateCartAmount={updateCartAmount}
          cartInfo={cartInfo}
        />
        <div className="line-spacer"></div>
        <div className="line-spacer"></div>
        <table className="table table-borderless end-point">
          <tbody>
            <tr>
              <td>Grand Total</td>
              <td> ₹{cart_total.total} </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  onClick={() => handlePayment()}
                  disabled={`${checkoutFormloading ? "disabled" : ""}`}
                >
                  {checkoutFormloading && (
                    <span className="spinner-grow spinner-grow-sm"></span>
                  )}
                  Proceed to Checkout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default CartDetails;
