import React from "react";
import Cart1 from "assets/images/Cart/Cart1.png";
import Cart2 from "assets/images/Cart/Cart2.png";
import Warrenty from "assets/images/Cart/warranty.png";
import PlusSign from "assets/images/Cart/PlusSign.png";
import MinusSign from "assets/images/Cart/MinusSign.png";
import RefreshBtn from "assets/images/Cart/refreshBtn.png";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "redux/features/cartSlice";
import { FaTrash } from "react-icons/fa";

const ProductDetails = () => {
  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className="finalcart-list">
        <table className="table table-bordered desky-verson">
          <thead>
            <tr>
              <th>Product</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th width="130"> Quantity </th>
              <th width="130"> Price </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button>
                  <FaTrash className="trash-btn" />
                </button>
              </td>
              <td>
                <img src={Cart1} alt="empty" />
              </td>
              <td>ASUS ROG Strix G17 - G713IE-HX040W</td>

              <td>
                <img
                  src={MinusSign}
                  alt="MinusSign"
                  style={{ paddingRight: "5px" }}
                  onClick={() => dispatch(decrement())}
                />
                <span> {count} </span>
                <img
                  src={PlusSign}
                  alt="PlusSign"
                  style={{ paddingLeft: "5px" }}
                  onClick={() => dispatch(increment())}
                />
              </td>
              <td>
                <span className="price"> ₹89,306</span>
              </td>
            </tr>
            <hr className="m-0" />
            <tr>
              <td>
                <button>
                  <FaTrash className="trash-btn" />
                </button>
              </td>
              <td>
                <img src={Warrenty} alt="empty" />
              </td>
              <td>Extended Warranty - 1 Year</td>

              <td>&nbsp;</td>
              <td>
                <span className="price"> ₹6,000</span>
              </td>
            </tr>
            <hr className="m-0" />
            <tr>
              <td>
                <button>
                  <FaTrash className="trash-btn" />
                </button>
              </td>
              <td>
                <img src={Cart2} alt="empty" />
              </td>
              <td>ASUS TUF K1 USB Gaming Keyboard </td>

              <td>
                <img
                  src={MinusSign}
                  alt="MinusSign"
                  style={{ paddingRight: "5px" }}
                />
                <span> 1 </span>
                <img
                  src={PlusSign}
                  alt="PlusSign"
                  style={{ paddingLeft: "5px" }}
                />
              </td>
              <td>
                <span className="price"> ₹9,200</span>
              </td>
            </tr>

            <tr>
              <td colSpan="4" style={{ border: "0px" }}>
                Have a Coupon?
                <input
                  type="text"
                  placeholder="Enter Coupon code here"
                  id="coupon"
                  name="coupon"
                  // value="1"
                  // disabled="disabled"
                  maxLength="6"
                />
                <button type="button" className="cpn-btn">
                  Apply
                </button>
              </td>
              <td colSpan="2" style={{ textAlign: "right", border: "0px" }}>
                <button className="refreshing">
                  <img src={RefreshBtn} alt="refresh-btn" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
