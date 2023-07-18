const { useDispatch } = require("react-redux");
const { useNavigate } = require("react-router-dom");
const { setfilter } = require("redux/features/filterSlice");

const FilterLink = ({ children, to }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const linkHandler = () => {
        navigate(to);
        dispatch(setfilter(to));
    };
    return <div className="scale-hover cursor-pointer position-relative" onClick={linkHandler}>{children}</div>
}
export { FilterLink }