import { useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { toast } from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { paymentVerifyApi } from "services/product.service"

function VerifyPayment() {
    const { token } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        paymentVerifyApi(token).then((response) => {
            if(response.data.message === 'PAYMENT_SUCCESS') {
                navigate('/payment-success')
            }
            if(response.data.message === 'PAYMENT_FAILD') {
                navigate('/payment-faild')
            }
            if (response.data.message === 'PAYMENT_TOKEN_INVALID' || response.data.status === 'error') {
                toast.error('Unauthorized access!')
                navigate('/')
            }
        })
    }, [token])
    return (
        <div className="section section-center-center">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-4"><img src="https://cdn-icons-png.flaticon.com/512/2691/2691758.png" width="100%" alt="" /></div>
                <div className="col-lg-6">
                    <h2>Please wait!</h2>
                    <h4>Now verifying your payment...</h4>
                    <Spinner animation="grow" />
                </div>
            </div>
        </div>
    )
}

export default VerifyPayment