import React from "react";
import "./styles.css";
import "../styles.css";
import { Col, Container, Row } from "react-bootstrap";
import Cart1 from "assets/images/Cart/Cart1.png";
import Cart2 from "assets/images/Cart/Cart2.png";
import PlusSign from "assets/images/Cart/PlusSign.png";
import MinusSign from "assets/images/Cart/MinusSign.png";
import RefreshBtn from "assets/images/Cart/refreshBtn.png";

const CartProduct = () => {
  return (
    <>
      <section className="bg-off-grey">
        <Container>
          <Row>
            <Col lg={8} className="card-cart p-4 pb-0">
              <h2>Shopping Cart</h2>
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
                          <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                      </td>
                      <td>
                        <img className="prdt-clsimg" src={Cart1} alt="empty" />
                      </td>
                      <td>ASUS ROG Strix G17 - G713IE-HX040W</td>

                      <td>
                        <button style={{ paddingRight: "5px" }}>
                          <img src={MinusSign} alt="MinusSign" />
                        </button>
                        <span> 1 </span>
                        <button style={{ paddingLeft: "5px" }}>
                          <img src={PlusSign} alt="PlusSign" />
                        </button>
                      </td>
                      <td>
                        <span className="price"> ₹89,306</span>
                      </td>
                    </tr>
                    <hr className="m-0" />
                    <tr>
                      <td>
                        <button>
                          <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                      </td>
                      <td>
                        <img className="" src={Cart2} alt="empty" />
                      </td>
                      <td>ASUS TUF K1 USB Gaming Keyboard </td>

                      <td>
                        <button style={{ paddingRight: "5px" }}>
                          <img src={MinusSign} alt="MinusSign" />
                        </button>
                        <span> 1 </span>
                        <button style={{ paddingLeft: "5px" }}>
                          <img src={PlusSign} alt="PlusSign" />
                        </button>
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
                      <td
                        colSpan="2"
                        style={{ textAlign: "right", border: "0px" }}
                      >
                        <button className="refreshing">
                          <img src={RefreshBtn} alt="refresh-btn" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>

            <Col lg={{ span: 3, offset: 1 }} className="card-cart p-4">
              <h3>Cart Details</h3>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CartProduct;
