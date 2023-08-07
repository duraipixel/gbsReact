import { useRef } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'
import { useDispatch, useSelector } from 'react-redux'
import { resetSearch, setSearchResults, setSearchStatus } from 'redux/features/searchSlice'
import { globalSearchApi } from 'services/page.service'

const SearchInput = ({ type }) => {
    const search = useSelector((state) => state.search)
    const dispatch = useDispatch()
    const input = useRef()

    const searchHandler = e => {
        dispatch(setSearchStatus({
            isSuccess: true,
            query: e.target.value,
            type: type
        }))
        globalSearchApi(e.target.value, 10).then(response => {
            dispatch(setSearchResults({
                value: response.data,
                isSuccess: false,
                query: e.target.value,
                type: type
            }));
        })
    }
    const resetSearchHandler = () => {
        dispatch(resetSearch())
        input.current.value = ''
    }
    const _handleKeyDown = e => {
        if (e.key === 'Enter') {
            window.location.href = `/products?search=${e.target.value}`
        }
    }

    return (
        <>
            <Form.Control
                onChange={searchHandler}
                onKeyDown={_handleKeyDown}
                ref={input}
                size="sm"
                type="search"
                placeholder="Search Your Product ..."
            />
            <button className="btn bg-white btn-sm user-none">
                {
                    search.isSuccess ?
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        :
                        search.value.length === 0 ? (
                            <FiSearch size={20} color="#626262" />
                        ) : (
                            <HiXMark size={20} onClick={resetSearchHandler} />
                        )
                }
            </button>
        </>
    )
}

export default SearchInput