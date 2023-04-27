import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCart } from "redux/features/cartSlice"
import { addToCartApi } from "services/product.serice"
import { AuthUser, checkCartBucket } from "utils"

export default function BuyButton({ className, product }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const buttonHandler = () => {
        setLoading(true)
        if (checkCartBucket(product.id)) {
            navigate('/cart')
        } else {
            addToCartApi({
                product_id: product.id,
                customer_id: AuthUser()?.id,
                guest_token: localStorage.getItem('guest_token'),
                quantity: 1
            }).then((response) => {
                if (response.data.error === 0) {
                    dispatch(setCart(product))
                    navigate('/cart')
                } else {
                    toast.error('Network Error')
                }
                setLoading(false)
            })
        }
    }
    return (
        <button className={className} loading={`${loading}`} onClick={buttonHandler}>BuyButton</button>
    )
}
