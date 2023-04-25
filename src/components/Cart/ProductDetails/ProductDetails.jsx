
import { useDispatch } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
import { removeCart } from "redux/features/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import { clearCartList, removeFromCartApi, updateCartApi } from "services/product.serice";
import { toast } from "react-hot-toast";
import { AuthUser } from "utils";
import { BiRepeat } from "react-icons/bi";
import { useForm } from "react-hook-form";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

const ProductDetails = ({ cartProduct, setCheckoutData, fetchCartData }) => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm()
  const [loading, setLoading] = useState(false)
  const [couponApplyed, setCouponApplyed] = useState(false)
  const [deleteAlert, setDeleteAlert] = useState(false);

  const CouponHandler = (data) => {
    setLoading(true)
    axios.post(`${process.env.REACT_APP_BASE_URL}/apply/coupon`, { ...data, customer_id: AuthUser()?.id }).then((response) => {
      setLoading(false)
      if (response.data.status === "error") {
        toast.error(response.data.message)
      } else {
        toast.success(response.data.message)
        setCouponApplyed(true)
        setCheckoutData(response.data.cart_info.cart_total)
      }
    });
  }
  const removeCouponCode = async () => {
    setLoading(true)
    const { data } = await fetchCartData()
    if (data) {
      reset()
      setCouponApplyed(false)
      setLoading(false)
      toast.success('coupon removed!')
    }
  }
  const clearCartData = () => {
    clearCartList().then((response) => {
      if(response.data.error === 0) {
        toast.success(response.data.message)
        localStorage.clear('cart_list')
        fetchCartData()
      }
    })
  }
  return (
    <>
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
        <div className="bg-white card-footer border-top">
          <div className="row align-items-center">
            <div className="col-md-11">
              <form className="d-inline-flex align-items-center my-3" onSubmit={handleSubmit(CouponHandler)}>
                <b className="col-lg-4">Have a Coupon?</b>
                <input
                  disabled={couponApplyed}
                  type="text"
                  placeholder="Enter Coupon code here"
                  id="coupon"
                  name="coupon"
                  maxLength="6"
                  className={`form-control ms-2 w-lg-50 ${errors.coupon_code ? 'border-danger' : ''}`}
                  {...register('coupon_code', { required: true })}
                />
                <div>
                  {
                    couponApplyed ?
                      <button loading={`${loading}`} type="button" onClick={removeCouponCode} className="btn-link btn text-info">
                        Remove
                      </button>
                      :
                      <button loading={`${loading}`} type="submit" className="btn-link btn text-info">
                        Apply
                      </button>
                  }
                </div>
              </form>
            </div>
            <div className="col-md-1 text-end">
              <button className="btn-light btn-sm btn" onClick={() => setDeleteAlert(true)}>
                <BiRepeat />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, clear it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={clearCartData}
        onCancel={() => setDeleteAlert(false)}
        focusCancelBtn
        show={deleteAlert}
      >
        You will not be able to recover this cart data!
      </SweetAlert>
    </>
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
