import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeCart, setCart } from "redux/features/cartSlice";
import { addToCartApi, removeFromCartApi } from "services/product.service";
import { AuthUser, LoadingSpinner, checkCartBucket, strRandom } from "utils";

function AddCartButton({ className, product, type, setCartId }) {
  const dispatch = useDispatch();
  const [isAddCart, setIsAddCart] = useState(checkCartBucket(product.id));
  const [loading, setLoading] = useState(false);
  const addOrRemoveCart = () => {
    setLoading(true);
    if (checkCartBucket(product.id)) {
      removeFromCartApi({
        product_id: product.id,
        customer_id: AuthUser()?.id,
        guest_token: localStorage.getItem("guest_token"),
      }).then((response) => {
        if (response.data.error === 0) {
          toast.success(response.data.message);
          dispatch(removeCart(product));
          setIsAddCart(false);
        } else {
          toast.error("Network Error");
        }
      });
    } else {
      addToCartApi({
        product_id: product.id,
        customer_id: AuthUser()?.id,
        guest_token: localStorage.getItem("guest_token"),
        quantity: 1,
      }).then((response) => {
        if (response.data.error === 0) {
          dispatch(setCart(product));
          toast.success(response.data.message);
          setIsAddCart(true);
          if (setCartId !== undefined) {
            setCartId(response.data.data.carts[0].cart_id);
          }
        } else {
          toast.error("Network Error");
        }
      });
    }
    setTimeout(() => setLoading(false), 1000);
  };
  if (product.stock_status === "out_of_stock" && type === "button") {
    return (
      <button disabled className="btn btn-outline-primary ms-md-3">out of stock</button>
    );
  }
  if (product.stock_status === "out_of_stock" && type === "checkbox") {
    return (
      <label className="mt-2 text-dark d-block">
        <input
          type="checkbox"
          disabled
          className="form-check-input me-2 rounded-0 border border-dark"
        />
        out of stock
      </label>
    );
  }
  if (type === "button")
    return (
      <button
        loading={`${loading}`}
        onClick={addOrRemoveCart}
        className={isAddCart ? "btn btn-outline-primary ms-md-3 mb-md-0 mb-3" : className}
      >
        {isAddCart ? "Remove" : "Add to cart"}
      </button>
    );
  if (type === "checkbox") {
    const key = strRandom(5);
    return (
      <label
        className="mt-2 text-primary d-block"
        htmlFor={`Frequently_${key}`}
      >
        {loading ? (
          <LoadingSpinner className="me-2" />
        ) : (
          <input
            type="checkbox"
            checked={isAddCart}
            onChange={addOrRemoveCart}
            id={`Frequently_${key}`}
            className="form-check-input me-2 rounded-0 border border-primary"
          />
        )}
       {isAddCart === true ? 'Selected' : 'Select'} 
      </label>
    );
  }
}

export default AddCartButton;
