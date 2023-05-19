import { useRef } from 'react';
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Select from 'react-select'

function Filters({ stores, filter, setFilter }) {
    const selectRef = useRef();
    const selectRefTwo = useRef();
    const postCodeRef = useRef();

    const options = []
    const brandOptions = []
    stores.map((item) => (
        options.push({ value: item.id, label: item.title })
    ))
    const brands = useSelector(state => state.homePageCollection.brands)
    if (brands) {
        brands.map((item) => (
            brandOptions.push({ value: item.id, label: item.title })
        ))
    }

    const ClearAllFilters = () => {
        postCodeRef.current.value = ""
        selectRef.current.clearValue()
        selectRefTwo.current.clearValue()
        setFilter({
            center_id: null,
            brand_id: null,
            post_code: null
        })
    }
    return (
        <div className='row m-0 mb-3 mb-lg-0 col-lg-10'>
            <div className="mb-3 mb-lg-0 col-lg">
            {/* defaultValue={brandOptions[2]} */}
                <Select options={brandOptions}  placeholder="Select Brand" ref={selectRefTwo} onChange={(e) => setFilter({
                    center_id: filter.post_code,
                    brand_id: e?.value,
                    post_code: filter.post_code
                })} />
            </div>
            <div className="mb-3 mb-lg-0 col-lg">
                <Select options={options} ref={selectRef} placeholder="Select Location" onChange={(e) => setFilter({
                    center_id: e?.value,
                    brand_id: filter.brand_id,
                    post_code: filter.post_code
                })} />
            </div>
            <div className="mb-3 mb-lg-0 col-lg">
                <Form.Control type="number" ref={postCodeRef} placeholder="Enter pincode" onChange={(e) => setFilter({
                    center_id: filter.post_code,
                    brand_id: filter.brand_id,
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