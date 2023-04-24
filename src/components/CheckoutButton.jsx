import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLayoutStatus } from 'redux/features/authLayoutSlice'

function CheckoutButton() {
    const authUser = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const LoginAuth =  () => {
        document.querySelector('nav').classList.toggle('sticky-top')
        dispatch(setLayoutStatus({ status: true, type: 'login' }))
    }
    const checkoutHandler = () => {

    }
    return (
        <button onClick={() => authUser.isLoggedIn ? checkoutHandler : LoginAuth()}>
            Proceed to Checkout
        </button>
    )
}

export default CheckoutButton