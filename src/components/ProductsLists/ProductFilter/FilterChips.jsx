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
                item = item.replace('?', '')
                item = item.split('=')[1]
                if (item.includes('_')) {
                    const tempstr = item.split('_')
                    console.log(...tempstr)
                    tempArray.push(...tempstr)
                } else {
                    tempArray.push(item)
                }
            })
            setCurrentFilters(tempArray)
        }
    }, [filter])

    const removeFilter = (item) => {
        const input = document.getElementById(item)
        input.checked = false
        const searchParams = new URLSearchParams(search)
        var array = []
        var checkboxes = document.querySelectorAll(`.${input.name}-product-check-input:checked`)
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        array.length > 0 ? searchParams.set(input.name, array.join("_")) : searchParams.delete(input.name)
        navigate(`/products?${searchParams.toString()}`);
        dispatch(setfilter(`/products?${searchParams.toString()}`))
    }
    if (search) {
        return (
            <div className="pt-2">
                <Stack direction="row" className="flex-wrap" gap={1}>
                    {
                        currentFilters.length && currentFilters.map((item, index) => (
                            <Chip
                                key={index}
                                label={item?.replace('-', ' ')}
                                size="small"
                                color="warning"
                                onDelete={(e) => removeFilter(item)}
                            />
                        ))
                    }
                </Stack>
            </div>
        )
    }
}

export default FilterChips