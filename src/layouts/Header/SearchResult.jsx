function SearchResult() {
    return (
        <ul className="list-group rounded list-group-flush">
            <li className="d-md-flex align-items-center justify-content-between list-group-item list-group-item-action">
                <div className='d-md-flex'>
                    <img src={require('../../assets/images/products/product-thumnail-1.png')} alt="product-thumnail" className='product-thumnail' />
                    <div className='ps-md-3'>
                        <span >Acer Nitro 5 Gaming Laptop - Black</span>
                        <div className="text-info fw-bold ps-2 mt-2 mb-2 mb-md-0">
                            ₹62,558
                        </div>
                    </div>
                </div>
                <div className="badge badge-soft-primary"> Keyboards </div>
            </li>
            <li className="d-md-flex align-items-center justify-content-between list-group-item list-group-item-action">
                <div className='d-md-flex'>
                    <img src={require('../../assets/images/products/product-thumnail-2.png')} alt="product-thumnail" className='product-thumnail' />
                    <div className='ps-md-3'>
                        <span >ASUS ROG Strix Scope RX Mechanical Gaming Keyboard </span>
                        <div className="text-info fw-bold ps-2 mt-2 mb-2 mb-md-0">
                            ₹9,200
                        </div>
                    </div>
                </div>
                <div className="badge badge-soft-primary"> Laptops </div>
            </li>
            <li className="d-md-flex align-items-center justify-content-between list-group-item list-group-item-action">
                <div className='d-md-flex'>
                    <img src={require('../../assets/images/products/product-thumnail-3.png')} alt="product-thumnail" className='product-thumnail' />
                    <div className='ps-md-3'>
                        <span >SanDisk 1TB Extreme Portable SSD</span>
                        <div className="text-info fw-bold ps-2 mt-2 mb-2 mb-md-0">
                            ₹9,200
                        </div>
                    </div>
                </div>
                <div className="badge badge-soft-primary"> Laptops </div>
            </li>
        </ul>
    )
}

export default SearchResult