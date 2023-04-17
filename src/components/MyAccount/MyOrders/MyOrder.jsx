import { Col } from "react-bootstrap";
import "./styles.scss";
import { AiOutlineWarning } from "react-icons/ai";

function MyOrder() {
  return (
    <>
      <Col className="container-card card p-4 mb-3">
        <div className="order-details">
          <div className="table align-c flex-jc-btwn">
            <div className="flex flex-wrap gap-5">
              <div>
                <p>Order Placed On</p>
                <p>10 March 2023</p>
              </div>
              <div>
                <p>Order ID:</p>
                <p>403-9499889-4551543</p>
              </div>
              <div>
                <p>Ship to: </p>
                <p>Kabir L</p>
              </div>
              <div>
                <p>Order Total </p>
                <p>₹80,933.8</p>
              </div>
            </div>
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
          <div className="table align-c flex-jc-btwn">
            <div className="flex flex-wrap gap-5">
              <div>
                <p>Order Placed On</p>
                <p>10 March 2023</p>
              </div>
              <div>
                <p>Order ID:</p>
                <p>403-9499889-4551543</p>
              </div>
              <div>
                <p>Ship to: </p>
                <p>Kabir L</p>
              </div>
              <div>
                <p>Order Total </p>
                <p>₹80,933.8</p>
              </div>
            </div>
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
          <div className="table align-c flex-jc-btwn">
            <div className="flex flex-wrap gap-5">
              <div>
                <p>Order Placed On</p>
                <p>10 March 2023</p>
              </div>
              <div>
                <p>Order ID:</p>
                <p>403-9499889-4551543</p>
              </div>
              <div>
                <p>Ship to: </p>
                <p>Kabir L</p>
              </div>
              <div>
                <p>Order Total </p>
                <p>₹80,933.8</p>
              </div>
            </div>
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
          <div className="table align-c flex-jc-btwn">
            <div className="flex flex-wrap gap-5">
              <div>
                <p>Order Placed On</p>
                <p>10 March 2023</p>
              </div>
              <div>
                <p>Order ID:</p>
                <p>403-9499889-4551543</p>
              </div>
              <div>
                <p>Ship to: </p>
                <p>Kabir L</p>
              </div>
              <div>
                <p>Order Total </p>
                <p>₹80,933.8</p>
              </div>
            </div>{" "}
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
