import { useDispatch, useSelector } from 'react-redux'
import './AuthModals.scss'
import { setLayoutStatus } from 'redux/features/authLayoutSlice'
import Login from 'components/Auth/Login'
import Register from 'components/Auth/Register'
import ForgotPassword from 'components/Auth/ForgotPassword'
function AuthModals() {
    const dispatch = useDispatch()
    const layout = useSelector((status) => status.authLayout)
    const closeLayout = () => {
        window.scroll(0, 0)

        dispatch(setLayoutStatus({
            status: false,
            type: layout.type
        }))
    }
    const LayoutTitle = () => {
        if (layout.type === 'login') {
            return "Sign In"
        }
        if (layout.type === 'register') {
            return "Create an Account"
        }
        return "Reset Your Password"
    }
    const LayoutForm = () => {
        switch (layout.type) {
            case 'login':
                return <Login />
            case 'register':
                return <Register />
            case 'forgot_password':
                return <ForgotPassword />
            default:
                return <Login />
        }
    }
    if (layout.status) return (
        <>
            <div className="fade modal-backdrop show"></div>
            <div className="modal auth-modal" >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img
                                src={require("../../assets/images/computer.png")}
                                className="d-block w-100"
                                height={120}
                                alt="menu"
                            />
                            <svg onClick={closeLayout} xmlns="http://www.w3.org/2000/svg" className='position-absolute top-0 end-0 m-4' width="27" height="27" viewBox="0 0 27 27" fill="none" style={{ cursor: 'pointer' }}>
                                <path d="M26 1L1 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 1L26 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="carousel-caption p-0">
                                <h2><LayoutTitle /></h2>
                            </div>
                        </div>
                        <div className="modal-body">
                            <LayoutForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModals