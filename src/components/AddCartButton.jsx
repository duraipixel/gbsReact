import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeCart, setCart } from "redux/features/cartSlice"
import { checkCartBucket } from "utils"

function AddCartButton({ className, product }) {
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
        setTimeout(()=> setLoading(false) , 200)
    }
    return (
        <button loading={`${loading}`} onClick={addOrRemoveCart} className={isAddCart ? 'btn btn-outline-primary' : className}>
            {isAddCart ? "Remove" : "Add to cart"}
        </button>
    )
}

export default AddCartButton