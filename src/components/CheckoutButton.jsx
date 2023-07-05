import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setLayoutStatus } from 'redux/features/authLayoutSlice'
import { checkoutApi } from 'services/product.service'
import { AuthUser } from 'utils'

function CheckoutButton({ className }) {
    const authUser            = useSelector((state) => state.auth)
    const dispatch            = useDispatch()
    const billing_address     = JSON.parse(localStorage.getItem('billing_address'))
    const shipping_address    = JSON.parse(localStorage.getItem('shipping_address'))
    const shipping_method     = localStorage.getItem('shipping_method')
    const shipping_charge_id  = localStorage.getItem('shipping_charge_id')
    const store_address       = JSON.parse(localStorage.getItem('store_address'));
    const [loader, setLoader] = useState(false)
    const validateProcess = (data) => {
        if(data.shipping_method.type === null) {
            toast.error('Select Shipping Method!')
            return false
        } 
        if(data.shipping_method.type === "STANDARD_SHIPPING" && data.shipping_method.charge_id === null ) {
            toast.error('Select Shipping Charge type!')
            return false
        }
        if(data.shipping_method.type === "STANDARD_SHIPPING" && shipping_address === null ) {
            toast.error('Shippping address is required!')
            return false
        }
        if(data.billing_address_id === undefined) {
            toast.error('Billing address is required!')
            return false
        }
        
        if(data.shipping_method.type === "PICKUP_FROM_STORE" && data.shipping_method.address_id === undefined ) {
            toast.error('Store address is required!')
            return false
        }
        return true
    }
    const checkoutHandler = () => {
        const checkData = {
            customer_id: AuthUser()?.id,
            billing_address_id : billing_address?.customer_address_id,
            shipping_method : {
                type      : shipping_method,
                address_id: shipping_method === "PICKUP_FROM_STORE" ? store_address?.id : shipping_address?.customer_address_id,
                charge_id : shipping_method === "PICKUP_FROM_STORE" ? null : shipping_charge_id
            } 
        }
        if(validateProcess(checkData)) {
            setLoader(true)
            checkoutApi(checkData).then(response => {
                if(response.data.error === 0) {
                    window.location.href = response.data.redirect_url
                }
                setLoader(false)
            })
        }
    }
    return (
        <button loading={`${loader}`} disabled={loader} className={className} onClick={() => authUser.isLoggedIn ? checkoutHandler() : dispatch(setLayoutStatus({ status: true, type: 'login' }))}>
            Proceed to Checkout
        </button>
    )
}

export default CheckoutButton