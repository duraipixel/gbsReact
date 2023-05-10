import { useDispatch, useSelector } from "react-redux"
import { clearProduct, removeProduct, setCompareStatus } from "redux/features/compareSlice";
import './CompareProduct.scss'
import { HiXMark } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
function CompareProduct() {
    const products = useSelector((state) => state.compareProducts)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
 
    if (products.status) {
        return (
            <div className={`compare-menu-bar animate__animated animate__slideInUp show`} >
                <button className="float-end btn btn-sm">
                    <HiXMark color="#f00008" size={25} onClick={() => dispatch(setCompareStatus({ status: false }))} />
                </button>
                <div className="container p-0">
                    <div className="d-md-flex align-items-center justify-content-center">
                        <div className="compare-card-group">
                            {
                                products.value.length > 0
                                    ?
                                    products.value.map((product) => (
                                        <div className="compare-card" key={product.id}>
                                            <img src={product.image} alt={product.product_name} />
                                            <p className="product-title">{product.product_name}</p>
                                            <b className="small">₹{" "}{product.price}</b>
                                            <button onClick={() => dispatch(removeProduct({ status: true, value: product.id }))} className="float-end btn-sm btn btn-outline-primary">Remove</button>
                                        </div>
                                    ))
                                    : ""
                            }
                        </div>
                        <div className="d-flex flex-md-column ms-md-3">
                            <Link to="/compare" onClick={() => dispatch(setCompareStatus({ status: false }))} className="rounded-0 w-100 btn btn-primary mb-md-3">Compare</Link>
                            <button onClick={() => dispatch(clearProduct())} className="rounded-0 w-100 btn btn-outline-dark">Clear all</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
    if(pathname !== "/compare" && products.value.length) {
        return (
            <Link to="/compare" onClick={() => dispatch(setCompareStatus({ status: false }))} className="compare-menu-button">Compare ({products.value.length})</Link>
        )
    }
}

export default CompareProduct