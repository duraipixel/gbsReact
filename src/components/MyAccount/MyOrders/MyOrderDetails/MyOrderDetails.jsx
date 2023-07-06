import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./styles.scss";
import PaymentDetails from "./PaymentDetails";
import { FaCheckCircle } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import { getOrderDetailApi } from "services/product.service";
import { Loader } from "utils";
import { CancelOrderRequested } from "../CancelOrderRequested";

const MyOrderDetails = () => {
  const { order_id } = useParams()
  const [fetching, setFetching] = useState(true)
  const [order, setOrder] = useState(false)
  const orderTracking = (order.status === 'cancelled' || order.status === 'delivered') ? order.tracking : order.orderTracking
  useEffect(() => {
    getOrderDetailApi(order_id).then(({ data }) => {
      setOrder(data)
      setFetching(false)
    })
  }, [])
  return (
    <>

      {
        fetching ?
          <Loader />
          :
          order ?
            <>
              <Col className="container-card card p-4 mb-3">
                <div className="flex-wrap flex-jc-btwn align-c">
                  <h2 className="order-details-title">
                    <span style={{ fontWeight: "600" }}>Order Details</span> -
                    #{order.order_no}
                  </h2>
                  <div>
                    <a href={order.status === 'delivered' ? order.delivery_document : order.invoice_file} download target="_blank" rel="noreferrer" className="btn btn-info mx-2">Download Invoice</a>
                    <CancelOrderRequested  order={order} /> 
                  </div>
                </div>
                <div className="time-line-group my-5">
                  {orderTracking.map((track, index) => (
                    <div className="time-line-item" key={index} style={{ minHeight: 100 }}>
                      <div className={`time-line-icon  ${track.has_tracking ? 'bg-info' : 'bg-secondary'}`}><FaCheckCircle /></div>
                      <div >
                        <div className="time-line-text">{track.status_name}</div>
                        <div className="time-line-text small text-success">{track?.tracking_info?.description}</div>
                        <div className="time-line-text small text-muted">{track?.tracking_info?.created_at}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex-jc-btwn align-c t-head-title">
                    <p>Product</p>
                    <div className="flex-jc-btwn align-c t-head-gap">
                      <p>Quantity</p>
                      <p>Price</p>
                    </div>
                  </div>
                  <hr className="mt-0" />
                  {
                    order.items.map((item, i) => (
                      <Fragment key={i}>
                        <div className="flex-jc-btwn pt-1">
                          <div className="flex gap-3 align-c flex-wrap">
                            <img src={item.image} alt="product-pic" width={60} />
                            <p>{item.product_name.substring(0, 50)}</p>
                          </div>
                          <div className="flex-jc-btwn t-head-gap align-c">
                            <p>{item.quantity}</p>
                            <p>₹{" "}{item.price}</p>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    ))
                  }
                </div>
                <div className="billing-details">
                  <h4>Shipping & Billing Details</h4>
                  <Row>
                    <Col>
                      <h5>Shipping Address</h5>
                      <h6>{order.shipping.name}</h6>
                      <p>{order.shipping.address}</p>
                      <p>Phone: +91 {order.shipping.mobile_no}</p>
                    </Col>
                    <div className="vr"></div>
                    <Col>
                      <h5>Billing Address</h5>
                      <h6>{order.billing.name}</h6>
                      <p>{order.billing.address}</p>
                      <p>Phone: +91 {order.billing.mobile_no}</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <PaymentDetails order={order} />
            </>
            : "Nodata"
      }

    </>
  );
};

export default MyOrderDetails;
