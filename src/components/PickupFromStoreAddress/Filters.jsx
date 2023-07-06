import { useRef } from 'react';
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Select from 'react-select'

function Filters({ stores, filter, setFilter,brandId }) {
    const selectRef = useRef();
    const selectRefTwo = useRef();
    const postCodeRef = useRef();

    const options = []
    stores.map((item) => (
        options.push({ value: item.id, label: item.title })
    ))

    const ClearAllFilters = () => {
        postCodeRef.current.value = ""
        selectRef.current.clearValue()
        !brandId && selectRefTwo.current.clearValue()
        setFilter({
            center_id: null,
            brand_id: brandId ? brandId :null,
            post_code: null
        })
    }
    return (
        <div className='row m-0 mb-3 mb-lg-0 col-lg-10'>
            <div className="mb-3 mb-lg-0 col-lg">
                <Select options={options} ref={selectRef} placeholder="Select Location" onChange={(e) => setFilter({
                    center_id: e?.value,
                    brand_id: brandId,
                    post_code: filter.post_code
                })} />
            </div>
            <div className="mb-3 mb-lg-0 col-lg">
                <Form.Control type="number" ref={postCodeRef} placeholder="Enter pincode" onChange={(e) => setFilter({
                    center_id: filter.post_code,
                    brand_id: brandId,
                    post_code: e.target.value
                })} />
            </div>
            <div className="mb-3 mb-lg-0 col-lg-2">
                <button onClick={ClearAllFilters} className='btn btn-outline-primary'>X Clear filters</button>
            </div>
        </div>
    )
}

export default Filters