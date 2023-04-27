import AddCartButton from 'components/AddCartButton'
import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setCart } from 'redux/features/cartSlice'
import { addToCartApi, updateCartApi } from 'services/product.service'
import { AuthUser, LoadingSpinner, checkCartBucket } from 'utils'

function ProductAddOns({ product, cartId, setCartId }) {
    return (
        <>
            {
                product.addons.length &&
                <>
                    <h5>Personalized Add-ons for your Product  </h5>
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
                                                <AddOnInput product={product} addon={addon} cartId={cartId} setCartId={setCartId} item={item} key={key} index={i} secIndex={key} />
                                            ))}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
                </>
            }
            <hr />
            {
                product.frequently_purchased.length !== 0 && <>
                    <h5>This Product is Frequently purchased with</h5>
                    <div className="list-group list-group-flush bg-light">
                        {
                            product.frequently_purchased.map((item, key) => (
                                <div key={key} className="px-0 bg-light d-flex align-items-center justify-content-between list-group-item list-group-item-action">
                                    <div className='d-flex'>
                                        <img src={item.image} alt="product-thumnail" className='product-thumnail' />
                                        <div className='ps-3'>
                                            <span >{item.product_name.substring(0, 60)}</span>
                                            <AddCartButton type='checkbox' className="mb-md-0 mb-3 btn btn-outline-primary px-5 fw-semibold" product={item} />
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
        <>
            <input type="radio" disabled={loading} checked={isChecked} className='addon' name={`add_on_${addon.id}`} onClick={() => addonHandler(addon, item)} value={item.id} id={`form_${secIndex}_add_on_${index}`} />
            <label className='btn-add-on' htmlFor={`form_${secIndex}_add_on_${index}`}>
                {loading ? <LoadingSpinner className="position-absolute" /> : ""}
                {item.label}<span className="text-info">₹{item.amount}</span>
            </label>
        </>
    )
}
export default ProductAddOns