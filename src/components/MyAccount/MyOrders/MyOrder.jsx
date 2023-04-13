import { Col } from "react-bootstrap";
import "./styles.scss";
import { AiOutlineWarning } from "react-icons/ai";

function MyOrder() {
  return (
    <>
      <Col className="container-card card p-4 mb-3">
        <div className="order-details">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Order placed on:</th>
                  <th>Order ID:</th>
                  <th>Ship to: </th>
                  <th>Order Total </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 March 2023</td>
                  <td>403-9499889-4551543</td>
                  <td>Kabir L</td>
                  <td>₹80,933.8</td>
                </tr>
              </tbody>
            </table>
            <div className="view-invoice-btn">View Invoice</div>
          </div>
          <hr />
          <div>
            <div className="flex-jc-btwn flex-wrap gap-2 align-c pb-3">
              <h4>Your Order is on the way</h4>
              <button className="btn btn-outline-dblue">Track Order</button>
            </div>
            <div className="flex-jc-btwn flex-wrap gap-2 align-c pb-2">
              <div style={{ fontWeight: "400", fontSize: "18px" }}>
                2 items will be delivered by{" "}
                <span style={{ fontWeight: "500", fontSize: "18px" }}>
                  13 March 2023
                </span>
              </div>
              <button className="btn btn-cancel">Cancel Order</button>
            </div>
            <div className="flex gap-4 align-c pt-1 pb-1">
              <img
                src={require("assets/images/myOrders/Rectangle81.png")}
                alt=""
              />
              <img src={require("assets/images/Cart/warranty.png")} alt="" />
            </div>
          </div>
        </div>
      </Col>
      <Col className="container-card card p-4 mb-3">
        <div className="order-details">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Order placed on:</th>
                  <th>Order ID:</th>
                  <th>Ship to: </th>
                  <th>Order Total </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 February 2023</td>
                  <td>405-9466109-3240337</td>
                  <td>Kabir L</td>
                  <td>₹70,933.8</td>
                </tr>
              </tbody>
            </table>
            <div className="view-invoice-btn">View Invoice</div>
          </div>
          <hr />
          <div>
            <div className="flex-jc-btwn flex-wrap gap-2 align-c pb-3">
              <h4>Your order has been delivered</h4>
              <button className="btn btn-outline-dblue">View Order</button>
            </div>
            <div className="pb-2">
              <div style={{ fontWeight: "400", fontSize: "18px" }}>
                2 items were delivered on{" "}
                <span style={{ fontWeight: "500", fontSize: "18px" }}>
                  06 February 2023
                </span>
              </div>
            </div>
            <div className="flex gap-4 align-c pt-1 pb-1">
              <img
                src={require("assets/images/myOrders/Rectangle200.png")}
                alt=""
              />
              <img
                src={require("assets/images/myOrders/Rectangle198.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </Col>
      <Col className="container-card card p-4 mb-3">
        <div className="order-details">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Order placed on:</th>
                  <th>Order ID:</th>
                  <th>Ship to: </th>
                  <th>Order Total </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>25 Januray 2023</td>
                  <td>405-9466109-3240337</td>
                  <td>Kabir L</td>
                  <td>₹111,889</td>
                </tr>
              </tbody>
            </table>
            <div className="view-invoice-btn">View Invoice</div>
          </div>
          <hr />
          <div>
            <div className="flex-jc-btwn flex-wrap gap-2 align-c pb-3">
              <h4>Your order has been delivered</h4>
              <button className="btn btn-outline-dblue">View Order</button>
            </div>
            <div className="pb-2">
              <div style={{ fontWeight: "400", fontSize: "18px" }}>
                2 items were delivered on{" "}
                <span style={{ fontWeight: "500", fontSize: "18px" }}>
                  06 February 2023
                </span>
              </div>
            </div>
            <div className="flex gap-4 align-c pt-1 pb-1">
              <img
                src={require("assets/images/myOrders/Rectangle200.png")}
                alt=""
              />
              <img
                src={require("assets/images/myOrders/Rectangle198.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </Col>
      <Col className="container-card card p-4 mb-3">
        <div className="order-details">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Order placed on:</th>
                  <th>Order ID:</th>
                  <th>Ship to: </th>
                  <th>Order Total </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 February 2023</td>
                  <td>405-9466109-3240337</td>
                  <td>Kabir L</td>
                  <td>₹70,933.8</td>
                </tr>
              </tbody>
            </table>{" "}
            <div className="payment-canceled align-c gap-2">
              <AiOutlineWarning /> Payment Failed
            </div>
          </div>
          <hr />
          <div>
            <div className="flex-jc-btwn flex-wrap gap-2 align-c pb-3">
              <h4>Your order has been delivered</h4>
              <button className="btn btn-outline-dblue">Retry Payment</button>
            </div>
            <div className="pb-2">
              <div style={{ fontWeight: "400", fontSize: "18px" }}>
                2 items were delivered on{" "}
                <span style={{ fontWeight: "500", fontSize: "18px" }}>
                  06 February 2023
                </span>
              </div>
            </div>
            <div className="flex gap-4 align-c pt-1 pb-1">
              <img
                src={require("assets/images/myOrders/Rectangle198.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default MyOrder;
