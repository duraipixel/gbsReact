import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setLayoutStatus } from 'redux/features/authLayoutSlice'
import { checkoutApi } from 'services/product.serice'

function CheckoutButton({ className }) {
    const authUser = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const billing_address = JSON.parse(localStorage.getItem('billing_address'))
    const shipping_address = JSON.parse(localStorage.getItem('shipping_address'))
    const shipping_method = localStorage.getItem('shipping_method')
    const shipping_charge_id = localStorage.getItem('shipping_charge_id')
    const store_address = JSON.parse(localStorage.getItem('store_address'));
    const isCheckoutData = () => {
        if (billing_address === null || billing_address === undefined) {
            toast.error('Billing address required!')
            return false
        }
        if (shipping_address === null || shipping_address === undefined) {
            toast.error('Shipping address required!')
            return false
        }
        if (shipping_method === null || shipping_method === undefined) {
            toast.error('Please select the shipping method')
            return false
        }
        if (shipping_charge_id === null || shipping_charge_id === undefined) {
            toast.error('Please select the shipping type')
            return false
        }
        if (shipping_method === 'PICKUP_FROM_STORE' & store_address === null || store_address === undefined) {
            toast.error('Store address required')
            return false
        }
        return true
    }
    const checkoutHandler = () => {
        const checkData = {
            shipping_method: shipping_method,
            shipping_address: shipping_address,
            billing_address: billing_address,
            pickup_store_id: JSON.parse(localStorage.getItem('store_address'))?.id,
            pickup_store_address: JSON.parse(localStorage.getItem('store_address')),
            coupon_data: JSON.parse(localStorage.getItem('coupon_data')),
            cart_items: JSON.parse(localStorage.getItem('cart_list')),
            standard_shipping_charge_id: shipping_charge_id,
            checkout_data: JSON.parse(localStorage.getItem('checkout_data'))
        }
        console.log(checkData)
        if (isCheckoutData()) checkoutApi(JSON.stringify(checkData))
    }
    return (
        <button className={className} onClick={() => authUser.isLoggedIn ? checkoutHandler() : dispatch(setLayoutStatus({ status: true, type: 'login' }))}>
            Proceed to Checkout
        </button>
    )
}

export default CheckoutButton