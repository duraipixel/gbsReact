import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { removeCart, setCart } from "redux/features/cartSlice"
import { removeFromCartApi } from "services/product.serice"
import { AuthUser, checkCartBucket, strRandom } from "utils"

function AddCartButton({ className, product, type }) {
    const dispatch = useDispatch()
    const [isAddCart, setIsAddCart] = useState(checkCartBucket(product.id))
    const [loading, setLoading] = useState(false)
    const addOrRemoveCart = () => {
        setLoading(true)
        if (checkCartBucket(product.id)) {
            removeFromCartApi({
                product_id: product.id,
                customer_id: AuthUser()?.id,
                guest_token: localStorage.getItem('guest_token'),
            }).then((response) => { 
                if (response.data.error === 0) {
                    toast.success(response.data.message);
                    dispatch(removeCart(product))
                    setIsAddCart(false)
                } else {
                    toast.error('Network Error')
                }
            })

        } else {
            dispatch(setCart(product))
            setIsAddCart(true)
        }
        setTimeout(() => setLoading(false), 200)
    }
    if (type === 'button') return (
        <button loading={`${loading}`} onClick={addOrRemoveCart} className={isAddCart ? 'btn btn-outline-primary' : className}>
            {isAddCart ? "Remove" : "Add to cart"}
        </button>
    )
    if (type === 'checkbox') {
        const key = strRandom(5);
        return (
            <label className='mt-2 text-primary d-block' htmlFor={`Frequently_${key}`} >
                <input type="checkbox" checked={isAddCart} onChange={addOrRemoveCart} id={`Frequently_${key}`} className='form-check-input me-2 rounded-0 border border-primary' />
                Selected
            </label>
        )
    }
}

export default AddCartButton