import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { setSearchResults } from 'redux/features/searchSlice'

function SearchInput() {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    return (
        <>
            <Form.Control
                value={search}
                onChange={(e) => {dispatch(setSearchResults(e.target.value)); setSearch(e.target.value)}}
                size="sm"
                type="search"
                placeholder="Search Your Product ..."
            />
            <button className="btn bg-white btn-sm user-none">
                {search === "" ? <FiSearch size={20} color="#626262" onClick={() => dispatch(setSearchResults([]))} /> : <HiXMark size={20} onClick={() => {
                    dispatch(setSearchResults([]));
                    setSearch("")
                }} />}
            </button>
        </>
    )
}

export default SearchInput