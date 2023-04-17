import { Accordion } from 'react-bootstrap'

function ProductAddOns() {
    return (
        <>
            <h5>Personalized Add-ons for your Product</h5>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="d-flex align-items-center">
                            <img src={require('../../assets/icons/warranty.png')} alt="product-thumnail"  />
                            <div className='ms-3'>
                                <span className="fw-bold">Extended Warranty</span>
                                <div className='mt-2'>Enjoy peace of mind and added protection for your device</div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="d-md-inline-flex g-3">
                            <button className='btn-add-on active'>1 Year<span className="text-info">₹6,000</span></button>
                            <button className='btn-add-on'>2 Year<span className="text-info">₹8,000</span></button>
                            <button className='btn-add-on'>3 Year<span className="text-info">₹10,000</span></button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className="d-flex align-items-center">
                            <img src={require('../../assets/icons/service.png')} alt="product-thumnail"  />
                            <div className='ms-3'>
                                <span className="fw-bold">Accidental Damage Protection</span>
                                <div className='mt-2'>From drops to spills and everything in between, we've got you covered</div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="d-md-inline-flex g-3">
                            <button className='btn-add-on'>1 Year<span className="text-info">₹6,000</span></button>
                            <button className='btn-add-on active'>2 Year<span className="text-info">₹8,000</span></button>
                            <button className='btn-add-on'>3 Year<span className="text-info">₹10,000</span></button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div className="d-flex align-items-center">
                            <img src={require('../../assets/icons/laptop.png')} alt="product-thumnail"  />
                            <div className='ms-3'>
                                <span className="fw-bold">Screen Replacement Plan</span>
                                <div className='mt-2'>Don't let a cracked or shattered screen ruin your day</div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="d-md-inline-flex g-3">
                            <button className='btn-add-on'>1 Year<span className="text-info">₹6,000</span></button>
                            <button className='btn-add-on'>2 Year<span className="text-info">₹8,000</span></button>
                            <button className='btn-add-on active'>3 Year<span className="text-info">₹10,000</span></button>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />
            <h5>This Product is Frequently purchased with</h5>
            <div className="list-group list-group-flush bg-light">
                <div className="px-0 bg-light d-flex align-items-center justify-content-between list-group-item list-group-item-action">
                    <div className='d-flex'>
                        <img src={require('../../assets/images/products/product-thumnail-1.png')} alt="product-thumnail" className='product-thumnail' />
                        <div className='ps-3'>
                            <span >Acer Nitro 5 Gaming Laptop - Black</span>
                            <div className='mt-2 text-primary '>
                                <input type="checkbox" checked className='form-check-input me-2 rounded-0 border border-primary' />
                                Selected
                            </div>
                        </div>
                    </div>
                    <div className="text-info fw-bold ps-2">
                        ₹62,558
                    </div>
                </div>
                <div className="px-0 bg-light d-flex align-items-center justify-content-between list-group-item list-group-item-action">
                    <div className='d-flex'>
                        <img src={require('../../assets/images/products/product-thumnail-2.png')} alt="product-thumnail" className='product-thumnail' />
                        <div className='ps-3'>
                            <span >ASUS ROG Strix Scope RX Mechanical Gaming Keyboard </span>
                            <div className='mt-2 text-primary '>
                                <input type="checkbox" className='form-check-input me-2 rounded-0 border border-primary' />
                                Select this product
                            </div>
                        </div>
                    </div>
                    <div className="text-info fw-bold ps-2">
                        ₹9,200
                    </div>
                </div>
                <div className="px-0 bg-light d-flex align-items-center justify-content-between list-group-item list-group-item-action">
                    <div className='d-flex'>
                        <img src={require('../../assets/images/products/product-thumnail-3.png')} alt="product-thumnail" className='product-thumnail' />
                        <div className='ps-3'>
                            <span >SanDisk 1TB Extreme Portable SSD</span>
                            <div className='mt-2 text-primary '>
                                <input type="checkbox" className='form-check-input me-2 rounded-0 border border-primary' />
                                Select this product
                            </div>
                        </div>
                    </div>
                    <div className="text-info fw-bold ps-2">
                        ₹10,349
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAddOns