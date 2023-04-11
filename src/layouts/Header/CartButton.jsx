import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartButton = ({ className, text, size }) => {
    return (
        <Link to="/cart" className={`position-relative ${className}`}>
            <FiShoppingCart size={size} />
            {text && <div>Cart</div>}
            <span className="cart-count-badge">2</span>
        </Link>
    );
}; 

export default CartButton