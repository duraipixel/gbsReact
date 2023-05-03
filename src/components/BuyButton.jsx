import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AuthUser, checkCartBucket } from "utils"
import { setCart } from "redux/features/cartSlice"
import { addToCartApi } from "services/product.service"

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
    if (product.stock_status !== 'out_of_stock') return (
        <button className={className} loading={`${loading}`} onClick={buttonHandler}>Buy Now</button>
    )
}
