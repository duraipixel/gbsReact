import NoDataComponent from 'components/NoDataComponent/NoDataComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetSearch } from 'redux/features/searchSlice'

function SearchResult() {
    const search = useSelector((state) => state.search.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchResultHandler = (item) => {
        navigate(`/product-list/${item.product_url}`)
        dispatch(resetSearch())
    }
    if (search.status) return (
        <div className="search-result rounded">
            <ul className="list-group rounded list-group-flush">
                {
                    search.products.map((item, i) => (
                        <li key={i} onClick={() => searchResultHandler(item)} className="d-md-flex align-items-center justify-content-between list-group-item list-group-item-action">
                            <div className='d-md-flex'>
                                <img src={item.image} alt="product-thumnail" className='product-thumnail' />
                                <div className='ps-md-3'>
                                    <span className='fs-14'>{item.product_name}</span>
                                    <div className="text-info fw-bold">
                                        ₹{item.price}
                                    </div>
                                </div>
                            </div>
                            <div className="badge badge-soft-primary btn-sm small ms-md-3"> {item.category_name} </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
    return (
        <div className="search-result rounded">
            <ul className="list-group rounded list-group-flush">
                {
                    search?.products?.map((item, i) => (
                        <li className="d-md-flex align-items-center justify-content-center list-group-item list-group-item-action">
                            <NoDataComponent />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SearchResult