import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { setfilter } from "redux/features/filterSlice"

function CheckBoxInput({ data, name }) {
    const [
        isChecked,
        setisChecked
    ] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const filter = useSelector((state) => state.filter)

    const handler = () => {
        setisChecked(!isChecked)
        var array = []
        var checkboxes = document.querySelectorAll(`.${name}-product-check-input:checked`)
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        array.length > 0 ? searchParams.set(name, array.join("_")) : searchParams.delete(name)
        navigate(`/products?${searchParams.toString()}`);
        dispatch(setfilter(`/products?${searchParams.toString()}`))
        window.scroll(0,0)
    }
    useEffect(() => {
        const baseFilterUrl = search.toString().split("=")[1]
        if (baseFilterUrl !== undefined) {
            var checkboxes = document.querySelectorAll(`.${name}-product-check-input`)
            for (let index = 0; index < checkboxes.length; index++) {
                const element = checkboxes[index];
                baseFilterUrl.split("_").forEach(item => {
                    if(element.id === item) {
                        element.checked = true
                    }
                })
            }
        }
    }, [filter])

    if (data !== undefined) return (
        <div>
            <label className="cstm-chkbx" htmlFor={data.slug} >
                <div className="filter-text">{data.name}</div>
                <input type={name === 'categories' ? 'radio' :  'checkbox'} id={data.slug} value={data.slug} name={name} className={`${name}-product-check-input product-check-input`} onChange={handler} />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default CheckBoxInput