import { Chip, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setfilter } from "redux/features/filterSlice";

function FilterChips() {
    const { search } = useLocation();
    const filter = useSelector((state) => state.filter)
    const tempFilter = search.split('&')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var tempArray = []
    tempFilter.forEach(item => {
        tempArray.push(item.split('=')[1])
    })
    const [currentFilters, setCurrentFilters] = useState(tempArray)
    useEffect(() => {
        if (search) {
            const tempFilter = search.split('&')
            var tempArray = []
            tempFilter.forEach(item => {
                tempArray.push(item.replace('?', ''))
            })
            setCurrentFilters(tempArray)
        }
    }, [filter])

    const removeFilter = (item) => { 
        const name = item.split('=')[0]
        document.getElementById(item.split('=')[1]).checked = false
        const searchParams = new URLSearchParams(search)
        var array = []
        var checkboxes = document.querySelectorAll(`.${name}-product-check-input:checked`)
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        array.length > 0 ? searchParams.set(name, array.join("_")) : searchParams.delete(name)
        navigate(`/products?${searchParams.toString()}`);
        dispatch(setfilter(`/products?${searchParams.toString()}`))
    }
    if (search) return (
        <div className="border-bottom border-top mx-lg-4 row p-3">
            <Stack direction="row" className="flex-wrap" gap={1}>
                <div className=" p-0 fw-bold">Filter by :</div>
                {
                    currentFilters.length && currentFilters.map((item, index) => (
                        <Chip
                            key={index}
                            label={item.replace('=', ' : ').replace('_', ' ')}
                            size="small"
                            color="primary"
                            onDelete={(e) => removeFilter(item)}
                        />
                    ))
                }
            </Stack>
        </div>
    )
}

export default FilterChips