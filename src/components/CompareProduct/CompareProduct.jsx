import { useDispatch, useSelector } from "react-redux"
import { clearProduct, removeProduct, setCompareStatus } from "redux/features/compareSlice";
import './CompareProduct.scss'
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
function CompareProduct() {
    const products = useSelector((state) => state.compareProducts)
    const dispatch = useDispatch() 
    if (products.status) return (
        <div className={`compare-menu-bar animate__animated animate__slideInUp show`} >
            <button className="float-end btn btn-sm">
                <HiXMark color="#f00008" size={25} onClick={() => dispatch(setCompareStatus({ status: false}))} />
            </button>
            <div className="container p-0">
                <div className="d-md-flex align-items-center justify-content-center">
                    <div className="compare-card-group">
                        {
                            products.value.length > 0
                                ?
                                products.value.map((product) => (
                                    <div className="compare-card">
                                        <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664431264/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257040_0_yigvy6.png/mxw_1536,f_auto" alt="" />
                                        <p className="product-title">{product.product_name}</p>
                                        <b className="small">₹{product.price}</b>
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

export default CompareProduct