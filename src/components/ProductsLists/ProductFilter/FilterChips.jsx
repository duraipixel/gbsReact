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
        if (item.split('=')[0] !== "fbclid") {
            tempArray.push(item.split('=')[1])
        }
    })

    const [currentFilters, setCurrentFilters] = useState(tempArray)
    useEffect(() => {
        if (search) {
            const tempFilter = search.split('&')
            var tempArray = []
            tempFilter.forEach(item => {
                if (item.split('=')[0] !== "fbclid") {
                    item = item.replace('?', '')
                    item = item.split('=')[1]
                    if (item.includes('_')) {
                        const tempstr = item.split('_')
                        tempArray.push(...tempstr)
                    } else {
                        tempArray.push(item)
                    }
                }
            })
            setCurrentFilters(tempArray)
        }
    }, [filter]);

    const setFilterUrl = (item, searchParams) => {
        const params = Object.fromEntries(searchParams.entries());
        const newParams = new URLSearchParams(search)
        var finalParams;
        var result = Object.entries(params).filter(param => param[1] === item)
        if (result.length) {
            newParams.delete(result[0][0])
            finalParams = newParams.toString()
        } else {
            finalParams = newParams.toString().replace(item, '').replace('_', '')
        }
        navigate(`/products?${finalParams}`);
        dispatch(setfilter(`/products?${finalParams}`))
    }
    const removeFilter = (item) => {
        const input = document.getElementById(item)
        const searchParams = new URLSearchParams(search)
        if (input) {
            input.checked = false
            var array = []
            var checkboxes = document.querySelectorAll(`.${input.name}-product-check-input:checked`)
            if (checkboxes.length === 0) {
                setFilterUrl(item, searchParams)
            } else {
                for (var i = 0; i < checkboxes.length; i++) {
                    array.push(checkboxes[i].value)
                }
                array.length > 0 ? searchParams.set(input.name, array.join("_")) : searchParams.delete(input.name)
                navigate(`/products?${searchParams.toString()}`);
                dispatch(setfilter(`/products?${searchParams.toString()}`))
            }
        } else {
            setFilterUrl(item, searchParams)
        }
    }
    if (search) {
        return (
            <div className="pt-2">
                <Stack direction="row" className="flex-wrap" gap={1}>
                    {
                        currentFilters.length && currentFilters.map((item, index) => (
                            <Chip
                                key={index}
                                label={item?.replaceAll('-', ' ')}
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