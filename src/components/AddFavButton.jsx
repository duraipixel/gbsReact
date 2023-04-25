import { useState } from "react"
import { toast } from "react-hot-toast"
import { addOrRemoveWhishListApi } from "services/product.serice"

function AddFavButton({ className, product }) { 
    const [loading, setLoading] = useState(false)
    const [isSelected, setIsSelected] = useState(product.is_wishlist)
    const addToFavList = () => {
        setLoading(true)
        addOrRemoveWhishListApi({
            product_id: product.id,
            status: true,
        }).then((response) => {
            if (response.data.error === 0) {
                toast.success(response.data.message);
                setIsSelected(true)
            } else {
                toast.error('Network Error')
            }
        })
        setTimeout(() => setLoading(false), 200)
    }
    return (
        <button disabled={isSelected}  loading={`${loading}`} className={className} onClick={() => addToFavList()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill={isSelected ? '#212363' : 'none'}>
                <path d="M21.9515 3.48201C21.393 2.92145 20.7299 2.47679 20 2.1734C19.2702 1.87002 18.4879 1.71387 17.6979 1.71387C16.9079 1.71387 16.1256 1.87002 15.3957 2.1734C14.6659 2.47679 14.0028 2.92145 13.4443 3.48201L12.2852 4.6448L11.1261 3.48201C9.99796 2.35026 8.46788 1.71445 6.87247 1.71445C5.27705 1.71445 3.74697 2.35026 2.61884 3.48201C1.49071 4.61375 0.856934 6.14873 0.856934 7.74925C0.856934 9.34978 1.49071 10.8848 2.61884 12.0165L3.77793 13.1793L12.2852 21.7138L20.7924 13.1793L21.9515 12.0165C22.5103 11.4562 22.9535 10.791 23.2559 10.0588C23.5583 9.3266 23.714 8.54181 23.714 7.74925C23.714 6.9567 23.5583 6.17191 23.2559 5.43972C22.9535 4.70754 22.5103 4.04229 21.9515 3.48201V3.48201Z" stroke="#212363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Add to favourite</span>
        </button>
    )
}

export default AddFavButton