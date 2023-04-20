import { useMemo } from "react"
import { Spinner } from "react-bootstrap"
import { toast } from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { VerfiyAccountApi } from "services/auth.service"

function VerifyAccount() {
    const { token } = useParams()
    const navigate = useNavigate()

    const VerfiyAccountHandler = async () => {
        const response = await VerfiyAccountApi(token)
        if (response.data.error) {
            toast.error(response.data.message)
        } else {
            toast.success(response.data.message)
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