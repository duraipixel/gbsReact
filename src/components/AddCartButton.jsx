import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeCart, setCart } from "redux/features/cartSlice"
import { checkCartBucket, strRandom } from "utils"

function AddCartButton({ className, product, type }) {
    const dispatch = useDispatch()
    const [isAddCart, setIsAddCart] = useState(checkCartBucket(product.id))
    const [loading, setLoading] = useState(false)
    const addOrRemoveCart = () => {
        setLoading(true)
        if (checkCartBucket(product.id)) {
            dispatch(removeCart(product))
            setIsAddCart(false)
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