import { useMemo } from "react"
import { Spinner } from "react-bootstrap"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { setAuthUser } from "redux/features/authSlice"
import { VerfiyAccountApi } from "services/auth.service"

function VerifyAccount() {
    const { token } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const VerfiyAccountHandler = async () => {
        const response = await VerfiyAccountApi(token)
        if (response.data.error) {
            toast.error(response.data.message)
        } else {
            toast.success(response.data.message)
            localStorage.setItem("user_verfied", true)
            dispatch(setAuthUser({
                data: response.data.customer,
                isLoggedIn: true
            }))
        }
        navigate('/')
    }
    useMemo(() => {
        VerfiyAccountHandler()
    }, [])
    return (
        <div className="section section-center-center">
            <h2>Verifying Your Account <Spinner animation="grow" className="ms-3" /></h2>
        </div>
    )
}

export default VerifyAccount