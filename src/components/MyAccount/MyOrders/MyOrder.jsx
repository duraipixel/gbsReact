import { Col } from "react-bootstrap";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrdersListApi } from "services/product.service";
import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import { Loader } from "utils";
import { CancelOrderRequested } from "./CancelOrderRequested";

function MyOrder() {
  const [orders, setOrders] = useState([])
  const [fetching, setFetching] = useState(true)
  const fetchData = () => {
    getOrdersListApi().then((response) => {
      setOrders(response.data)
      setFetching(false)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {fetching ?
        <Loader />
        :
        orders.length
          ?
          orders.map((order, i) => (
            <Col className="container-card card p-4 mb-3" key={i}>
              <div className="order-details">
                <div className="table align-c flex-jc-btwn">
                  <div className="flex flex-wrap gap-5">
                    <div>
                      <p>Order Placed On</p>
                      <p>{order.order_date}</p>
                    </div>
                    <div>
                      <p>Order ID:</p>
                      <p>{order.order_no}</p>
                    </div>
                    <div>
                      <p>Ship to: </p>
                      <p>{order.customer.first_name} {order.customer.last_name}</p>
                    </div>
                    <div>
                      <p>Order Total </p>
                      <p>₹{order.amount}</p>
                    </div>
                  </div>
                  <div className="view-invoice-btn">View Invoice</div>
                </div>
                <hr />
                <div>
                  <div className="flex-jc-btwn flex-wrap gap-2 align-c pb-3">
                    <h4>Your Order is {order.status}</h4>
                    <Link
                      to={`/my-account/myorders/${order.order_no}`}
                      className="btn btn-info"
                    >
                      Track Order
                    </Link>
                  </div>
                  <div className="flex-jc-btwn flex-wrap gap-2 align-c pb-2">
                    <div style={{ fontWeight: "400", fontSize: "18px" }}>
                      {order.items.length} items will be delivered soon
                      {/* by */}
                      {/* <span style={{ fontWeight: "500", fontSize: "18px" }}>
                        13 March 2023
                      </span> */}
                    </div>
                    <CancelOrderRequested order_id={order.id} />
                  </div>
                  <div className="flex gap-4 align-c pt-1 pb-1">
                    {
                      order.items.map((item, i) => (
                        <img key={i} src={item.image} height={50} width={50} className="object-cover" alt="order" />
                      ))
                    }
                  </div>
                </div>
              </div>
            </Col>
          ))
          : <NoDataComponent />
      }
    </>
  );
}

export default MyOrder;
