import { useDispatch, useSelector } from "react-redux";
import { BsDash, BsPlus, BsX } from "react-icons/bs";
import { clearCart, removeCart } from "redux/features/cartSlice";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import {
  clearCartList,
  removeFromCartApi,
  updateCartApi,
} from "services/product.service";
import { toast } from "react-hot-toast";
import { AuthUser } from "utils";
import { useForm } from "react-hook-form";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { setLayoutStatus } from "redux/features/authLayoutSlice";

const ProductDetails = ({
  cartProduct,
  setCheckoutData,
  setCoupon,
  fetchCartData,
}) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [couponApplyed, setCouponApplyed] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth)

  const CouponHandler = (data) => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/apply/coupon`, {
        ...data,
        customer_id: AuthUser()?.id,
        shipping_fee_id: localStorage.getItem("shipping_charge_id"),
      })
      .then((response) => {
        setLoading(false);
        if (response.data.status === "error") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          setCouponApplyed(true);
          localStorage.setItem('coupon_amount', response.data.coupon_amount)
          localStorage.setItem("coupon_data", JSON.stringify(response.data))
          setCheckoutData(response.data.cart_info.cart_total);
          setCoupon(response.data);
          localStorage.setItem(
            "checkout_data",
            JSON.stringify(response.data.cart_info.cart_total)
          );
        }
      });
  };
  const removeAddons = (data) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/delete/addon`, data)
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          fetchCartData();
        }
      });
  };
  const removeCouponCode = async () => {
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/remove/coupon`, {
        customer_id: AuthUser()?.id,
        shipping_fee_id: localStorage.getItem("shipping_charge_id"),
      })
      .then((response) => {
        setLoading(false);
        if (response.data.status === "error") {
          toast.error(response.data.message);
        } else {
          toast.success(response.data.message);
          reset();
          setCouponApplyed(false);
          setCoupon(null);
          localStorage.removeItem('coupon_amount')
          localStorage.removeItem("coupon_data");
          setCheckoutData(response.data.cart_info.cart_total);
          localStorage.setItem(
            "checkout_data",
            JSON.stringify(response.data.cart_info.cart_total)
          );
        }
      });
  };
  const clearCartData = () => {
    clearCartList().then((response) => {
      if (response.data.error === 0) {
        toast.success(response.data.message);
        localStorage.removeItem("cart_list");
        fetchCartData();
        setDeleteAlert(false);
        dispatch(clearCart());
      }
    });
  };
  // useEffect(() => {
  //   var coupon_data = JSON.parse(localStorage.getItem('coupon_data'))
  //   if (coupon_data !== null) {
  //     setValue('coupon_code', coupon_data.coupon_code)
  //     setCouponApplyed(true)
  //   }
  // }, [])
  return (
    <>
      <div className="card border-0">
        <h1 className="h3 card-header bg-white fw-bold">Shopping Cart</h1>
        <ul
          className="list-group rounded list-group-flush"
          style={{ maxHeight: "460px", overflow: "auto" }}
        >
          {cartProduct?.length
            ? cartProduct.map((product, i) => (
              <li
                key={i}
                className="d-md-flex gap-3 align-items-center justify-content-between list-group-item"
              >
                <div className="d-md-flex col-lg-8 ">
                  <span
                    className="cursor cursor-clickable"
                    onClick={() =>
                      navigate(`/products/${product.product_url}`)
                    }
                  >
                    <img
                      src={product.image}
                      alt="product-thumnail"
                      className="product-thumnail "
                    />
                  </span>
                  <div className="ps-md-3">
                    <span
                      className="fs-14 cursor"
                      onClick={() =>
                        navigate(`/products/${product.product_url}`)
                      }
                    >
                      {product.product_name}
                    </span>
                    <div className="text-info fw-bold mt-2 mb-2 mb-md-0">
                      ₹{" "}{product.price}
                    </div>
                    {product.addons.length > 0 ? (
                      <ul className="border-top mt-3">
                        {product.addons.map((item, i) => (
                          <li
                            key={i}
                            className="mt-2 d-flex align-items-center"
                          >
                            <div>
                              <img
                                src={item.icon}
                                alt={item?.title}
                                width={35}
                              />
                            </div>
                            <div className="ms-2">
                              <span className="text-info">{item?.title}</span>
                              <div className="d-flex">
                                {item?.addon_item_label}
                                <span className="fw-bold ms-1">
                                  {" "}
                                  ₹{" "}{item?.amount}
                                </span>
                                <span
                                  onClick={() =>
                                    removeAddons({
                                      addon_id: item.addon_item_id,
                                      cart_id: product.cart_id,
                                      product_id: product.id,
                                    })
                                  }
                                  className="btn btn-sm text-primary py-0 ms-2"
                                >
                                  {" "}
                                  <BsX /> remove
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <ProductQuantityInput
                  product={product}
                  setCheckoutData={setCheckoutData}
                />
                <ProductDeleteButton
                  product={product}
                  fetchCartData={fetchCartData}
                  setCheckoutData={setCheckoutData}
                />
              </li>
            ))
            : ""}
        </ul>
        {
          authUser.isLoggedIn ?
            <div className="bg-white card-footer border-top">
              <div className="row align-items-center">
                <div className="col-md-11">
                  <form
                    className="d-inline-flex align-items-center my-3"
                    onSubmit={handleSubmit(CouponHandler)}
                  >
                    <b className="col-lg-4">Have a Coupon?</b>
                    <input
                      disabled={couponApplyed}
                      type="text"
                      placeholder="Enter Coupon code here"
                      id="coupon"
                      name="coupon"
                      maxLength="6"
                      className={`form-control ms-2 w-lg-50 ${errors.coupon_code ? "border-danger" : ""
                        }`}
                      {...register("coupon_code", { required: true })}
                    />
                    <div>
                      {couponApplyed ? (
                        <button
                          loading={`${loading}`}
                          type="button"
                          onClick={removeCouponCode}
                          className="btn-link btn text-info"
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          loading={`${loading}`}
                          type="submit"
                          className="btn-link btn text-info"
                        >
                          Apply
                        </button>
                      )}
                    </div>
                  </form>
                </div>
                <div className="col-md-1 text-end">
                  <button
                    className="btn-light btn-sm btn"
                    onClick={() => setDeleteAlert(true)}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1152_3000)">
                        <path
                          d="M0.916626 3.66699V9.16699H6.41663"
                          stroke="#A5A5A5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.0834 18.333V12.833H15.5834"
                          stroke="#A5A5A5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.7825 8.24978C18.3176 6.936 17.5274 5.7614 16.4858 4.83558C15.4441 3.90977 14.1849 3.2629 12.8257 2.95535C11.4664 2.64781 10.0514 2.6896 8.7127 3.07683C7.37397 3.46406 6.15514 4.18411 5.16996 5.16978L0.916626 9.16645M21.0833 12.8331L16.83 16.8298C15.8448 17.8155 14.6259 18.5355 13.2872 18.9227C11.9485 19.31 10.5335 19.3518 9.17422 19.0442C7.81497 18.7367 6.55578 18.0898 5.51414 17.164C4.4725 16.2382 3.68236 15.0636 3.21746 13.7498"
                          stroke="#A5A5A5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1152_3000">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            : <Alert variant='warning' className="m-0">
              Before buying this item, you must first <Alert.Link onClick={() => dispatch(setLayoutStatus({ status: true, type: "login" }))}>login</Alert.Link>. 
            </Alert>
        }
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
const ProductDeleteButton = ({ product, fetchCartData, setCheckoutData }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const removeCartHandler = (product) => {
    setLoading(true);
    removeFromCartApi({
      product_id: product.id,
      customer_id: AuthUser()?.id,
      guest_token: localStorage.getItem("guest_token"),
    }).then((response) => {
      if (response.data.error === 0) {
        toast.success(response.data.message);
        setCheckoutData(response.data.cart_total);
        dispatch(removeCart(product));
        setTimeout(() => setLoading(false), 200);
        fetchCartData();
      } else {
        toast.error("Network Error");
        setLoading(false);
      }
    });
  };
  return (
    <div>
      <button
        loading={`${loading}`}
        className="custom-btn border shadow-sm mx-3 rounded-pill btn btn-outline-primary btn-sm border-0"
        onClick={() => removeCartHandler(product)}
      >
        <FaTrash className="trash-btn" size={15} />
      </button>
    </div>
  );
};
const ProductQuantityInput = ({ product, setCheckoutData }) => {
  const [count, setCount] = useState(
    Number(product.quantity) === 0 ? 1 : Number(product.quantity)
  );
  const [loading, setLoading] = useState(false);
  const updateCart = async (type) => {
    setLoading(true);
    var quantity =
      type === "DECREASE" ? (count > 1 ? count - 1 : 1) : count + 1;
    const { data } = await updateCartApi({
      cart_id: product.cart_id,
      quantity: quantity,
    });
    if (data.error === 0) {
      toast.success(data.message);
      setCount(quantity);
      setCheckoutData(data.data.cart_total);
    }
    setLoading(false);
  };
  return (
    <div className="d-inline-flex">
      <button
        disabled={loading}
        onClick={() => updateCart("DECREASE")}
        className="btn btn-sm btn-outline-light text-secondary border-0 mx-2"
      >
        <BsDash />
      </button>
      <button
        loading={`${loading}`}
        className="btn btn-sm btn-light fw-bold border shadow-sm rounded"
      >
        {count}
      </button>
      <button
        disabled={count >= Number(product.max_quantity)}
        onClick={() => updateCart("INCREASE")}
        className="btn btn-sm btn-outline-light text-secondary border-0 mx-2"
      >
        <BsPlus />
      </button>
    </div>
  );
};

export default ProductDetails;
