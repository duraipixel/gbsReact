import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { setfilter } from "redux/features/filterSlice"

function CheckBoxInput({ data, name }) {
    const [
        isChecked,
        setisChecked
    ] = useState(false)
    const dispatch     = useDispatch()
    const navigate     = useNavigate()
    const { search }   = useLocation()
    const searchParams = new URLSearchParams(search)

    const handler = () => {
        setisChecked(!isChecked)
        var array = []
        var checkboxes = document.querySelectorAll(`.${name}-product-check-input:checked`)
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        array.length > 0 ? searchParams.set(name, array.join("_")):  searchParams.delete(name)
        navigate(`/products?${searchParams.toString()}`);
        dispatch(setfilter(`/products?${searchParams.toString()}`))
    }

    useEffect(() => {
        if (search && search.includes(data?.slug)) {
            setisChecked(true)
        }
    }, [])

    if (data !== undefined) return (
        <div>
            <label className="cstm-chkbx" htmlFor={data.slug} >
                {data.name}
                <input type="checkbox" id={data.slug} value={data.slug} className={`${name}-product-check-input product-check-input`} checked={isChecked} onChange={handler} />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default CheckBoxInput