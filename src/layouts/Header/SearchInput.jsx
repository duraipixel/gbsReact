import { Form } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import { HiXMark } from 'react-icons/hi2'

function SearchInput({search, setSearch}) {
    return (
        <>
            <Form.Control
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="sm"
                type="search"
                className="h-100"
                placeholder="Search Your Product ..."
            />
            <button className="btn bg-white btn-sm user-none">
                {search === "" ? <FiSearch size={20} color="#626262" onClick={() => setSearch("")} /> : <HiXMark size={20} onClick={() => setSearch("")} />}
            </button>
        </>
    )
}

export default SearchInput