import "./styles.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductDetails from "./ProductDetails/ProductDetails";
import CartDetails from "./CartDetails/CartDetails";
import { useEffect, useState } from "react";
import { cartListApi } from "services/product.serice";
import { useSelector } from "react-redux";

const CartProduct = () => {
  const [cartProduct, setCartProduct] = useState(null)
  const [checkoutData, setCheckoutData] = useState(null)
  const cart = useSelector((state) => state.cart)
  const fetchCartData = () => {
    cartListApi().then(response => {
      setCartProduct(response.data?.carts)
      setCheckoutData(response.data?.cart_total)
    })
  }
  useEffect(() => {
    fetchCartData()
  }, [cart.data])
  return (
    <>
      <section className="bg-off-grey">
        <Container>
          <Row>
            <Col lg={8} className="align-self-start">
              <ProductDetails cartProduct={cartProduct}/>
            </Col>
            <Col lg={4} className="align-self-start">
              <Col className="card-cart p-4 pb-1">
                <CartDetails checkoutData={checkoutData} />
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CartProduct;
