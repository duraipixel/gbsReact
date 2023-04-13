import { Col } from "react-bootstrap";
import "./styles.scss";

function MyOrder() {
  return (
    <Col className="container-card card p-4">
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
          <div className="flex-jc-btwn align-c pb-3">
            <h4>Your Order is on the way</h4>
            <button className="btn btn-outline-dblue">Track Order</button>
          </div>
          <div className="flex-jc-btwn align-c pb-2">
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
  );
}

export default MyOrder;
