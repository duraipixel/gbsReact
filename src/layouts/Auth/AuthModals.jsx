import { useDispatch, useSelector } from 'react-redux'
import './AuthModals.scss'
import { setLayoutStatus } from 'redux/features/authLayoutSlice'
function AuthModals() {
    const dispatch = useDispatch()
    const status = useSelector((status) => status.authLayout)
    if (status) return (
        <>
            <div className='auth-modal-overlay'>
            </div>
            <div className="auth-modal animate__animated animate__slideInRight">
                <div className="card rounded-0 h-100 border-0">
                    <div className="position-relative">
                        <img
                            src={require("../../assets/images/computer.png")}
                            className="d-block w-100"
                            height={120}
                            alt="menu"
                        />
                        <svg onClick={() => dispatch(setLayoutStatus(false))} xmlns="http://www.w3.org/2000/svg" className='position-absolute top-0 end-0 m-4' width="27" height="27" viewBox="0 0 27 27" fill="none" style={{ cursor: 'pointer' }}>
                            <path d="M26 1L1 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 1L26 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="carousel-caption p-0">
                            <h2>Sign In</h2>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis magnam mollitia voluptatem, necessitatibus quia saepe, nam, eos dolor incidunt expedita maxime dolorem voluptatum exercitationem. Voluptates suscipit tenetur molestiae quod.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModals