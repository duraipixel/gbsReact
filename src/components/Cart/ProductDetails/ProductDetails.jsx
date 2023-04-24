
import { useDispatch } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
import { removeCart } from "redux/features/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { removeFromCartApi, updateCartApi } from "services/product.serice";
import { toast } from "react-hot-toast";
import { AuthUser } from "utils";
import { BiRepeat } from "react-icons/bi";

const ProductDetails = ({ cartProduct }) => {
  return (
    <div className="card border-0">
      <h3 className="card-header bg-white fw-bold">Shopping Cart</h3>
      <ul className="list-group rounded list-group-flush" style={{ maxHeight: '460px', overflow: 'auto' }}>
        {
          cartProduct?.length ?
            cartProduct.map(product => (
              <li key={product.id} className="d-md-flex gap-3 align-items-center justify-content-between list-group-item">
                <div className='d-md-flex col-lg-8 align-items-center'>
                  <img src={product.image} alt="product-thumnail" className='product-thumnail' />
                  <div className='ps-md-3'>
                    <span className="fs-14">{product.product_name}</span>
                    <div className="text-info fw-bold mt-2 mb-2 mb-md-0">
                      ₹{product.price}
                    </div>
                  </div>
                </div>
                <ProductQuantityInput product={product} />
                <ProductDeleteButton product={product} />
              </li>
            ))
            : ""
        }
      </ul>
      {/* <div className="card-footer">
        <div className="input-group">
          Have a Coupon?
          <input
            type="text"
            placeholder="Enter Coupon code here"
            id="coupon"
            name="coupon"
            maxLength="6"
            className="form-control"
          />
          <button type="button" className="btn-dark btn">
            Apply
          </button>
        </div>
        <button className="btn-danger btn">
          <BiRepeat />
        </button>
      </div> */}
    </div>
  );
};
const ProductDeleteButton = ({ product }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const removeCartHandler = (product) => {
    setLoading(true)
    removeFromCartApi({
      product_id: product.id,
      customer_id: AuthUser()?.id,
      guest_token: localStorage.getItem('guest_token'),
    }).then((response) => {
      if (response.data.error === 0) {
        toast.success(response.data.message);
        dispatch(removeCart(product))
        setTimeout(() => setLoading(false), 200)
      } else {
        toast.error('Network Error')
        setLoading(false)
      }
    })
  }
  return (
    <div>
      <button loading={`${loading}`} className="custom-btn border shadow-sm mx-3 rounded-pill btn btn-outline-primary btn-sm border-0" onClick={() => removeCartHandler(product)}>
        <FaTrash className="trash-btn" size={15} />
      </button>
    </div>
  )
}
const ProductQuantityInput = ({ product }) => {
  const [count, setCount] = useState(Number(product.quantity) === 0 ? 1 : Number(product.quantity))
  const [loading, setLoading] = useState(false)
  const updateCart = async (type) => {
    setLoading(true)
    var quantity = type === 'DECREASE' ? count > 1 ? count - 1 : 1 : count + 1
    const { data } = await updateCartApi({
      cart_id: product.cart_id,
      quantity: quantity
    })
    if (data.error === 0) {
      toast.success(data.message)
      setCount(quantity)
    }
    setLoading(false)
  }
  return (
    <div className="d-inline-flex">
      <button disabled={loading} onClick={() => updateCart('DECREASE')} className="btn btn-sm btn-outline-light text-secondary border-0 mx-2"><BsDash /></button>
      <button loading={`${loading}`} className="btn btn-sm btn-light fw-bold border shadow-sm rounded">{count}</button>
      <button disabled={count >= Number(product.max_quantity)} onClick={() => updateCart('INCREASE')} className="btn btn-sm btn-outline-light text-secondary border-0 mx-2"><BsPlus /></button>
    </div>
  )
}

export default ProductDetails;
