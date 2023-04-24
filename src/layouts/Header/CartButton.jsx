import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartButton = ({ className, text, size }) => {
    const cartCount = useSelector((state) => state.cart.value)
    return (
        <Link to="/cart" className={`${className}`}>
            <span className="position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" width={size} height="22" viewBox="0 0 23 22" fill="none">
                    <path d="M8.61937 21.0005C9.14536 21.0005 9.57175 20.5741 9.57175 20.0481C9.57175 19.5221 9.14536 19.0957 8.61937 19.0957C8.09339 19.0957 7.66699 19.5221 7.66699 20.0481C7.66699 20.5741 8.09339 21.0005 8.61937 21.0005Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.095 21.0005C19.6209 21.0005 20.0473 20.5741 20.0473 20.0481C20.0473 19.5221 19.6209 19.0957 19.095 19.0957C18.569 19.0957 18.1426 19.5221 18.1426 20.0481C18.1426 20.5741 18.569 21.0005 19.095 21.0005Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1H4.80952L7.3619 13.7524C7.44899 14.1909 7.68753 14.5847 8.03576 14.865C8.38398 15.1454 8.81971 15.2943 9.26667 15.2857H18.5238C18.9708 15.2943 19.4065 15.1454 19.7547 14.865C20.1029 14.5847 20.3415 14.1909 20.4286 13.7524L21.9524 5.76191H5.7619" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="cart-count-badge">{cartCount}</span>
            </span>
            {text && <div className="small ms-3 ms-lg-0">Cart</div>}
        </Link>
    );
};

export default CartButton