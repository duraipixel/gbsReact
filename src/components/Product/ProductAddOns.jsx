import { Accordion } from 'react-bootstrap'

function ProductAddOns({ product }) {
    return (
        <>
            <h5>Personalized Add-ons for your Product</h5>
            <Accordion defaultActiveKey="0" flush>
                {
                    product.addons.map((addon, i) => (
                        <Accordion.Item eventKey={`${i}`} key={i}>
                            <Accordion.Header>
                                <div className="d-flex align-items-center">
                                    <img src={addon.icon} alt="product-thumnail" width={60} height={60} />
                                    <div className='ms-3'>
                                        <span className="fw-bold">{addon.title}</span>
                                        <div className='mt-2'>{addon.description}</div>
                                    </div>
                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="d-md-inline-flex g-3">
                                    {addon.items.map((item, key) => (
                                        <>
                                            <input type="radio" name="addon" value={item.id} id={`add_on_${key}`} />
                                            <label key={key} className='btn-add-on' htmlFor={`add_on_${key}`}>
                                                {item.label}<span className="text-info">₹{item.amount}</span>
                                            </label>
                                        </>
                                    ))}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))
                }
            </Accordion>
            <hr />
            <h5>This Product is Frequently purchased with</h5>
            <div className="list-group list-group-flush bg-light">
                {
                    product.frequently_purchased.map((item, key) => (
                        <div className="px-0 bg-light d-flex align-items-center justify-content-between list-group-item list-group-item-action">
                            <div className='d-flex'>
                                <img src={item.image} alt="product-thumnail" className='product-thumnail' />
                                <div className='ps-3'>
                                    <span >{item.product_name.substring(0, 60)}</span>
                                    <label className='mt-2 text-primary d-block' htmlFor={`Frequently_${key}`}>
                                        <input type="checkbox" id={`Frequently_${key}`} className='form-check-input me-2 rounded-0 border border-primary' />
                                        Selected
                                    </label>
                                </div>
                            </div>
                            <div className="text-info fw-bold ps-2">
                                ₹{item.price}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProductAddOns