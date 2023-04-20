import { FiUser } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLayoutStatus } from 'redux/features/authLayoutSlice'

function AccountButton({text,size,className}) {
    const dispatch = useDispatch()
    const authUser = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const LoginAuth =  () => {
        document.querySelector('nav').classList.toggle('sticky-top')
        dispatch(setLayoutStatus({ status: true, type: 'login' }))
    }
    console.log(authUser)
    return (
        <button onClick={() => authUser.isLoggedIn ? navigate('/my-account/profile') : LoginAuth()} className={`${className} border-0 text-white btn-sm btn ps-lg-3 d-block d-lg-flex flex-lg-column justify-content-center align-items-center`}>
            <FiUser size={size} />
            {text &&  <span className="small ms-3 ms-lg-0">My Account</span>}
        </button>
    )
}

export default AccountButton