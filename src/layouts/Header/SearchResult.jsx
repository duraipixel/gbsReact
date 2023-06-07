import CompareButton from 'components/CompareButton'
import NoDataComponent from 'components/NoDataComponent/NoDataComponent'
import { useSelector } from 'react-redux'

function SearchResult({ setMobileSearch, type }) {
    const search = useSelector((state) => state.search.value)
    const searchType = useSelector((state) => state.search.type)
 
    if (search.status === 0 && searchType === type) {
        return (
            <div className="search-result rounded">
                <ul className="list-group rounded list-group-flush">
                    <li className="d-md-flex align-items-center justify-content-center list-group-item list-group-item-action">
                        <NoDataComponent />
                    </li>
                </ul>
            </div>
        )
    } else {
        if (search.status && searchType === type) {
            return (
                <div className="search-result rounded">
                    <ul className="list-group rounded list-group-flush">
                        {
                            search.products.map((item, i) => (
                                <li key={i} className="d-md-flex align-items-center justify-content-between list-group-item list-group-item-action">
                                    <div className='d-md-flex'>
                                        <img src={item.image} alt="product-thumnail" className='product-thumnail' />
                                        <div className='ps-md-3'>
                                            <span className='fs-14 cursor'>{item.product_name}</span>
                                            <div className="text-info fw-bold">
                                                ₹{item.price}
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        item?.category_name !== '' ?
                                            <div className="badge badge-soft-primary btn-sm small ms-md-3"> {item.category_name} </div>
                                            : ''
                                    }
                                    {
                                        type === 'COMPARE' ?
                                            <CompareButton buttonType="icon" className="btn btn-outline-info ms-2 rounded-box-circle rounded-box-sm" product={item} />
                                            : ''
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default SearchResult