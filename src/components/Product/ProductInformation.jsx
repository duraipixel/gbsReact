import { useDispatch } from 'react-redux'
import ProductAddOns from './ProductAddOns'
import ProductOverview from './ProductOverview'
import { TbCurrentLocation } from 'react-icons/tb'
import { addProduct } from 'redux/features/compareSlice'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap'
import { CheckProductAvailabilityApi } from 'services/product.serice'
import AddCartButton from 'components/AddCartButton'
import AddFavButton from 'components/AddFavButton'
function ProductInformation({ product }) {
    const dispatch = useDispatch()
    const [checkAvailability, setAvailability] = useState(false)
    const [information, setInformation] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [addOnsStatus, setAddOnsStatus] = useState(product.is_cart)
    const [cartId, setCartId] = useState(product.cart_id)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();
    const CheckAvailabilityHander = async (formData) => {
        setLoading(true)
        const { data } = await CheckProductAvailabilityApi(formData)
        if (data.error === 1) {
            setErrorMessage(data.message)
            setTimeout(() => {
                setErrorMessage("")
            }, 5000);
            reset()
        } else {
            setAvailability(true)
            setInformation(data.information)
        }
        setLoading(false)
    }
    return (
        <div>
            <h6 className='h5'>{product.product_name}</h6>
            <div className="d-md-flex align-items-end mb-3">
                <div className="text-sku mb-md-0 mb-2">SKU: {product?.sku}</div>
                <div>
                    <span className="text-secondary ms-md-4 me-2 d-inline-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" className="me-1">
                            <path d="M8.22419 0.470891L9.916 4.05545C10.0336 4.30476 10.2611 4.47751 10.5243 4.51743L14.3074 5.09228C14.9702 5.19305 15.2345 6.04437 14.7552 6.53285L12.0177 9.32302C11.8275 9.51704 11.7405 9.79678 11.7855 10.0706L12.4317 14.0105C12.5449 14.7005 11.8522 15.2266 11.2596 14.9011L7.87594 13.0411C7.64065 12.9118 7.35935 12.9118 7.12406 13.0411L3.74044 14.9011C3.14782 15.227 2.45508 14.7005 2.56834 14.0105L3.21447 10.0706C3.25952 9.79678 3.17254 9.51704 2.9823 9.32302L0.244804 6.53285C-0.234547 6.04404 0.029847 5.19273 0.692553 5.09228L4.47574 4.51743C4.73888 4.47751 4.96635 4.30476 5.084 4.05545L6.77581 0.470891C7.07181 -0.156964 7.92788 -0.156964 8.22419 0.470891Z" fill="#929292" />
                        </svg>
                        4.9
                    </span>
                    <span className="text-info">235 Reviews</span>
                </div>
            </div>
            <div className="d-flex align-items-end mb-4">
                <del className="text-secondary fw-600">₹{product.strike_price}</del>
                <div className="fw-bold fs-3 text-info mx-3 lh-1">₹{product.price}</div>
                <div className="text-info fs-6">You Save (₹{product.save_price}) </div>
            </div>
            <div className="action-group mb-4">
                <button className="mb-md-0 mb-3 btn btn-primary me-md-3 px-5 fw-semibold">Buy Now</button>
                <AddCartButton setCartId={setCartId} setAddOnsStatus={setAddOnsStatus} type='button' className="mb-md-0 mb-3 btn btn-outline-primary px-5 fw-semibold" product={product} />
                <AddFavButton className="ms-md-3 mb-md-0 mb-3 btn btn-outline-info rounded-box-circle me-md-3" product={product} />
                <button className="mb-md-0 mb-3 btn btn-outline-info rounded-box-circle" onClick={() => dispatch(addProduct({ status: true, value: product }))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 25" fill="none">
                        <path d="M2.61475 7.27423C2.61475 10.2697 2.61475 13.2653 2.61475 16.2608C2.61475 16.5846 2.69571 17.4752 3.42434 18.2038C4.55778 19.4992 6.33889 19.1753 6.50081 19.1753C6.50081 17.799 6.50081 16.3417 6.50081 14.9654L10.225 18.6896L6.41985 22.4947C6.41985 21.3612 6.41985 20.1468 6.50081 19.0134" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                        <path d="M2.6147 7.51646C3.55367 7.51646 4.31486 6.75527 4.31486 5.8163C4.31486 4.87733 3.55367 4.11615 2.6147 4.11615C1.67574 4.11615 0.914551 4.87733 0.914551 5.8163C0.914551 6.75527 1.67574 7.51646 2.6147 7.51646Z" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                        <path d="M15.2445 17.6364C15.2445 14.6409 15.2445 11.6454 15.2445 8.64989C15.2445 8.32605 15.1635 7.43549 14.4349 6.70685C13.3015 5.4115 11.5203 5.73534 11.3584 5.73534C11.3584 7.11165 11.3584 8.56893 11.3584 9.94524L7.63428 6.30206L11.4394 2.49695C11.4394 3.63038 11.4394 4.84478 11.3584 5.97822" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                        <path d="M15.2446 20.7937C16.1836 20.7937 16.9447 20.0326 16.9447 19.0936C16.9447 18.1546 16.1836 17.3934 15.2446 17.3934C14.3056 17.3934 13.5444 18.1546 13.5444 19.0936C13.5444 20.0326 14.3056 20.7937 15.2446 20.7937Z" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                    </svg>
                    <span>Compare</span>
                </button>
            </div>
            <h3 className="mb-3">Check availability for Delivery</h3>
            {errorMessage ? <div className='text-primary small mb-3'>{errorMessage}</div> : ""}
            <Form onSubmit={handleSubmit(CheckAvailabilityHander)} className="d-inline-flex col-md-6 mb-4">
                <input type="number" min={0} {...register('pin_code', { required: true })} className={`form-control form-control-sm ${errors.pin_code ? 'border border-danger' : ''}`} placeholder='Pincode' />
                <button loading={`${loading}`} type="submit" className="btn pe-3 btn-sm btn-link text-info h-100 fw-bold" >
                    Check
                </button>
            </Form>
            {
                checkAvailability &&
                <div className="row align-items-center mb-3">
                    <div className="col-md-1 col-3 text-center p-0">
                        <img src={require('../../assets/icons/delivery-truck.png')} width={50} alt='gps' />
                    </div>
                    <div className="col-md-11 col-9 text-info d-md-flex">
                        <div className="fw-bold"> Standard Shipping:</div>
                        <div className="text-dark ps-2"> {information} </div>
                    </div>
                </div>
            }
            <div className="row align-items-center mb-2">
                <div className="col-md-1 col-3 text-center p-0">
                    <img src={require('../../assets/icons/shopping-bag.png')} width={30} alt='gps' />
                </div>
                <div className="col-md-11 col-9 text-info  d-flex align-items-center">
                    <div className="d-md-flex">
                        <div className="fw-bold">Pickup From Store:</div>
                        <div className="text-dark ps-2"> Available for Pickup</div>
                    </div>
                    <div className="vr ms-2"></div>
                    <button className="text-primary btn-link btn"><TbCurrentLocation className='me-1' /> Find Stores</button>
                </div>
            </div>
            <ProductOverview product={product} />
            {addOnsStatus === true && <ProductAddOns setCartId={setCartId} cartId={cartId} product={product} />}
        </div>
    )
}

export default ProductInformation