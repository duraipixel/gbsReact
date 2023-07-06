import axios from 'axios'
import AddCartButton from 'components/AddCartButton'
import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { updateCartApi } from 'services/product.service'
import { LoadingSpinner, checkCartBucket } from 'utils'

function ProductAddOns({ product, cartId, setCartId }) {
    return (
        <>
            {
                product.addons.length ?
                    <>
                        {
                            product?.warranty_available?.name ?
                                <div className='bg-white p-3 rounded mb-3 shadow-sm border'>
                                    <div className="lead fw-bold d-flex align-items-center mb-2">{product?.warranty_available.name} <div className="vr mx-2"></div> <b className='text-primary fs-14 fw-bold'>{product?.warranty_available?.warranty_period} {product?.warranty_available?.warranty_period_type} warranty</b></div>
                                    <div>{product?.warranty_available.description}</div>
                                </div>
                                : ''
                        }
                        <h5 className='sub-product-title'>Personalized Add-ons for your Product  </h5>
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
                                            <div className="d-md-inline-flex flex-wrap gap-1">
                                                {addon.items.map((item, key) => (
                                                    <AddOnInput product={product} addon={addon} cartId={cartId} setCartId={setCartId} item={item} key={key} index={i} secIndex={key} />
                                                ))}
                                                <RemoveAddOnInput addon={addon} product={product} cartId={cartId} />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                    </>
                    : ''
            }
            <hr/>
            {
                product.frequently_purchased.length !== 0 ?
                    <>
                        <h5 className='sub-product-title'>This Product is Frequently purchased with</h5>
                        <ul className="list-group list-group-flush">
                            {
                                product.frequently_purchased.map((item, key) => (
                                    <li key={key} className="list-group-item list-group-item-action">
                                        <div className="row align-items-center">
                                            <div className="col-md">
                                                <img src={item.image} alt="product-thumnail" className='product-thumnail' />
                                            </div>
                                            <div className="col-md-8">
                                                <small >{item.product_name}</small>
                                                <AddCartButton type='checkbox' className="mb-md-0 mb-3 btn btn-outline-primary px-5 fw-semibold" product={item} />
                                            </div>
                                            <div className="col-md">
                                                <span className='text-info fw-bold'>₹{item.price}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                    : ''
            }

        </>
    )
}

const AddOnInput = ({ item, index, cartId, secIndex, addon, product, setCartId }) => {
    const [loading, setLoading] = useState(false)
    const updateCartApiHandler = () => {
        updateCartApi({
            cart_id: cartId,
            quantity: 1,
            addon_id: addon.id,
            addon_item_id: item.id,
        }).then((response) => {
            if (response.data.error === 0) {
                toast.success(response.data.message)
                setIsChecked(true)
            } else {
                toast.error(response.data.message)
            }
            setLoading(false)
        })
    }
    const addonHandler = (addon, item) => {
        if (checkCartBucket(product.id)) {
            setLoading(true)
            updateCartApiHandler()
        } else {
            toast.error('You need add cart list first')
        }
    }
    const [isChecked, setIsChecked] = useState(item.is_selected)
    return (
        <div>
            <input type="radio" disabled={loading} checked={isChecked} className='addon' name={`add_on_${addon.id}`} onClick={() => addonHandler(addon, item)} value={item.id} id={`form_${secIndex}_add_on_${index}`} />
            <label className='btn-add-on m-0 border shadow-sm' htmlFor={`form_${secIndex}_add_on_${index}`}>
                {loading ? <LoadingSpinner className="position-absolute" /> : ""}
                {item.label}<span className="text-info">₹{item.amount}</span>
            </label>
        </div>
    )
}

const RemoveAddOnInput = ({ addon, cartId, product }) => {
    const [isChecked, setIsChecked] = useState(false)
    const [loading, setLoading] = useState(false)
    const Handler = () => {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_BASE_URL}/delete/addon`, {
            addon_id: addon.id,
            cart_id: cartId,
            product_id: product.id
        }).then((response) => {
            if(response.data.error) {
                toast.error(response.data.message)
            } else {
                toast.success(response.data.message)
            }
            setLoading(false)
            setIsChecked(true)
        })
    }
    return (
        <div>
            <input type="radio" onClick={Handler} disabled={loading} checked={isChecked} className='addon' name={`add_on_${addon.id}`} id={`form_${addon.id}_remove_on${addon.id}`} />
            <label className='btn-add-on m-0 border shadow-sm' htmlFor={`form_${addon.id}_remove_on${addon.id}`}>
                {loading ? <LoadingSpinner className="position-absolute" /> : ""}
                <span className="text-info">None</span>
            </label>
        </div>
    )
}
export default ProductAddOns