import ProductAddOns from './ProductAddOns'
import ProductOverview from './ProductOverview'

function ProductInfo() {
    return (
        <div>
            <h1 className='product-section-title'>Acer Nitro 5 Gaming Laptop - Black</h1>
            <div className="d-flex align-items-end mb-3">
                <div className="text-sku">SKU: AC-NI588843345</div>
                <div>
                    <span className="text-secondary ms-4 me-2 d-inline-flex align-items-center">
                        <img src={require('../../assets/icons/star-dark-gray.png')} className="me-1" />
                        4.9
                    </span>
                    <span className="text-info">235 Reviews</span>
                </div>
            </div>
            <div className="d-flex align-items-end mb-4">
                <del className="text-secondary fw-600">₹88,999</del>
                <div className="fw-bold fs-3 text-info mx-3 lh-1">₹62,558</div>
                <div className="text-info fs-6">You Save (₹26,441) </div>
            </div>
            <div className="d-inline-flex mb-4">
                <button className="btn btn-primary me-3 px-5 fw-semibold">Buy Now</button>
                <button className="btn btn-outline-primary me-3 px-5 fw-semibold">Add to Cart</button>
                <button className="btn btn-outline-info rounded-box-circle me-3">
                    <img src={require('../../assets/icons/heart.png')} />
                </button>
                <button className="btn btn-outline-info rounded-box-circle">
                    <img src={require('../../assets/icons/compare.png')} />
                </button>
            </div>
            <h3 className="mb-3">Check availability for Delivery</h3>
            <div className="d-flex align-items-center col-md-6 p-0 mb-4">
                <input type="number" min={0} className="form-control-sm pincode-input" value={600039} />
                <input type="button" value='Check' className="btn btn-sm btn-link text-info fw-bold" />
            </div>
            <div className="row align-items-center mb-3">
                <div className="col-1 text-center p-0">
                    <img src={require('../../assets/icons/delivery-truck.png')} width={50} />
                </div>
                <div className="text-info col-11">
                    <span className="fw-bold"> Standard Shipping:</span>
                    <span className="text-dark"> 10 April - 11 April</span>
                </div>
            </div>
            <div className="row align-items-center mb-2">
                <div className="col-1 text-center p-0">
                    <img src={require('../../assets/icons/shopping-bag.png')} width={30} />
                </div>
                <div className="col-11 text-info d-flex align-items-center">
                    <span className="fw-bold">Pickup From Store:</span>
                    <span className="text-dark"> Available for Pickup</span>
                    <div className="vr ms-2"></div>
                    <button className="text-primary btn-link btn">Find Stores</button>
                </div>
            </div>
            <ProductOverview />
            <ProductAddOns />
        </div>
    )
}

export default ProductInfo