import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartButton = ({ className, text, size }) => {
    return (
        <Link to="/cart" className={`${className}`}>
            <span className="position-relative">
                <FiShoppingCart size={size} />
                <span className="cart-count-badge">2</span>
            </span>
            {text && <div className="small ms-3 ms-lg-0">Cart</div>}
        </Link>
    );
};

export default CartButton