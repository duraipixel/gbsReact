import ProductAddOns from "./ProductAddOns";
import ProductOverview from "./ProductOverview";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { CheckProductAvailabilityApi } from "services/product.service";
import AddCartButton from "components/AddCartButton";
import AddFavButton from "components/AddFavButton";
import CompareButton from "components/CompareButton";
import BuyButton from "components/BuyButton";
import PickupFromStoreAddress from "components/PickupFromStoreAddress/PickupFromStoreAddress";
import { useDispatch, useSelector } from "react-redux";
import { RiMapPinLine } from "react-icons/ri";
import { setStoreAddress } from "redux/features/cartAddressSlice";
import { toast } from "react-hot-toast";
function ProductInformation({ product }) {
  console.log(product)
  const address = useSelector((state) => state.cartAddress);
  const dispatch = useDispatch();
  const [checkAvailability, setAvailability] = useState(false);
  const [information, setInformation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [cartId, setCartId] = useState(product.cart_id);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const CheckAvailabilityHander = async (formData) => {
    setLoading(true);
    const { data } = await CheckProductAvailabilityApi(formData);
    if (data.error === 1) {
      setErrorMessage(data.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      reset();
    } else {
      setAvailability(true);
      setInformation(data.information);
    }
    setLoading(false);
  };

  return (
    <div>
      <h6 className="product-title">{product.product_name}</h6>
      <div className="d-md-flex align-items-end mb-md-3 mb-2">
        <div className="text-sku mb-md-0 mb-2">SKU: {product?.sku}</div>
        {product?.common_review?.rating ? (
          <div>
            <span className="text-secondary ms-md-3 me-2 d-inline-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M8.22419 0.470891L9.916 4.05545C10.0336 4.30476 10.2611 4.47751 10.5243 4.51743L14.3074 5.09228C14.9702 5.19305 15.2345 6.04437 14.7552 6.53285L12.0177 9.32302C11.8275 9.51704 11.7405 9.79678 11.7855 10.0706L12.4317 14.0105C12.5449 14.7005 11.8522 15.2266 11.2596 14.9011L7.87594 13.0411C7.64065 12.9118 7.35935 12.9118 7.12406 13.0411L3.74044 14.9011C3.14782 15.227 2.45508 14.7005 2.56834 14.0105L3.21447 10.0706C3.25952 9.79678 3.17254 9.51704 2.9823 9.32302L0.244804 6.53285C-0.234547 6.04404 0.029847 5.19273 0.692553 5.09228L4.47574 4.51743C4.73888 4.47751 4.96635 4.30476 5.084 4.05545L6.77581 0.470891C7.07181 -0.156964 7.92788 -0.156964 8.22419 0.470891Z"
                  fill="#929292"
                />
              </svg>
              4.9
            </span>
            <span className="text-info">
              {product?.common_review?.rating} Reviews
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="d-md-flex align-items-end mb-md-4 mb-2">
        <del className="text-secondary fw-600">₹ {product.strike_price}</del>
        <div className="fw-bold fs-3 text-info mx-md-3 lh-1 py-md-0 py-2">
          ₹ {product.price}
        </div>
        <div className="text-info fs-6">You Save (₹ {product.save_price}) </div>
      </div>
      <div className="action-group mb-lg-4">
        <BuyButton
          className="mb-md-0 mb-3 btn btn-primary px-5 fw-semibold"
          product={product}
        />
        <AddCartButton
          setCartId={setCartId}
          type="button"
          className="ms-md-3 mb-md-0 mb-3 btn btn-outline-primary px-5 fw-semibold"
          product={product}
        />
        <AddFavButton
          className="ms-md-3 mb-md-0 mb-3 btn btn-outline-info rounded-box-circle"
          product={product}
        />
        <CompareButton
          className="mb-md-0 mb-3 btn btn-outline-info rounded-box-circle ms-md-3"
          product={product}
        />
      </div>
      <h3 className="sub-product-title my-3">
        Check availability for Delivery
      </h3>
      {errorMessage ? (
        <div className="text-primary small mb-3">{errorMessage}</div>
      ) : (
        ""
      )}
      <Form
        onSubmit={handleSubmit(CheckAvailabilityHander)}
        className="pincode-input-group d-inline-flex col-md-6 mb-4"
      >
        <input
          type="number"
          min={0}
          {...register("pin_code", { required: true })}
          className={`form-control form-control-sm ${
            errors.pin_code ? "border border-danger" : ""
          }`}
          placeholder="Pincode"
        />
        <button
          loading={`${loading}`}
          type="submit"
          className="btn pe-3 btn-sm btn-link text-info h-100 fw-bold"
        >
          Check
        </button>
      </Form>
      {checkAvailability ? (
        <div className="row align-items-center mb-3">
          <div className="col-md-1 col-3 text-center p-0">
            <img
              src={require("../../assets/icons/delivery-truck.png")}
              width={50}
              alt="gps"
            />
          </div>
          <div className="col-md-11 col-9 text-info d-md-flex">
            <div className="fw-bold"> Standard Shipping:</div>
            <div className="text-dark ps-2"> {information} </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* <div className="row align-items-center mb-2">
        <div className="col-md-1 col-3 text-center p-0">
          <img
            src={require("../../assets/icons/shopping-bag.png")}
            width={30}
            alt="gps"
          />
        </div>
        <div className="col-md-11 col-9 text-info  d-md-flex align-items-center">
          <div className="d-md-flex">
            <div className="row">
              <div className="fw-bold col-lg-5 align-c">Pickup From Store:</div>
              <div className="text-dark ps-lg-2 align-c col-lg-7">
                <>
                  {product?.has_pickup_store && address.store_address?.address ? (
                    <span>
                      {address?.store_address && address.store_address?.address}
                    </span>
                  ) : (
                    <>
                      {product.has_pickup_store ? "Available" : "Un available"}{" "}
                      for Pickup
                    </>
                  )}
                </>
              </div>
            </div>
            {product.has_pickup_store && (
              <div className="col-lg-4 align-c">
                <PickupFromStoreAddress type="button" />
              </div>
            )}
          </div>
        </div>
      </div> */}
      <div className="flex-wrap align-c gap-2">
        <div className="me-1">
          <img
            src={require("../../assets/icons/shopping-bag.png")}
            width={30}
            alt="gps"
          />
        </div>
        <div className="fw-bold">Pickup From Store:</div>
          <div>
            {!product.has_pickup_store && "Un available for Pickup"} 
          </div>
          <div>
            {!address.store_address?.address && "Available for Pickup"} 
          </div>
        <div>
          {product.has_pickup_store && (
            <div>
              <PickupFromStoreAddress type="button" brandId={product.brand_id}/>
            </div>
          )}
        </div>
      </div>
      {product?.has_pickup_store && address.store_address?.address && (
        <div>
          <div className="fw-bold mt-1">
            {address?.store_address && address.store_address?.title}
          </div>
          <div className="flex gap-1 mt-1">
            <RiMapPinLine className="mt-1" />
            <span>
              {address?.store_address && address.store_address?.address}
            </span>
            <div className="col-lg-1 text-end">
              <button
                onClick={() => {
                  localStorage.removeItem("store_address");
                  dispatch(setStoreAddress(""));
                  toast.success("Store location removed")
                }}
                loading="false"
                className="custom-btn border shadow-sm mx-3 rounded-pill btn btn-outline-primary btn-sm border-0"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="trash-btn"
                  height="15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <ProductOverview product={product} />
      <ProductAddOns setCartId={setCartId} cartId={cartId} product={product} />
    </div>
  );
}

export default ProductInformation;
