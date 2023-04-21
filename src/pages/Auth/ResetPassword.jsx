import { useState } from "react"
import { useMemo } from "react"
import { Button, Spinner } from "react-bootstrap"
import { toast } from "react-hot-toast"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ResetPasswordApi, VerfiyResetPasswordApi } from "services/auth.service"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

function ResetPassword() {
  const { token } = useParams()
  const navigate = useNavigate()
  const [isVerfying, setIsVerfying] = useState(true)
  const [customerId, setCustomerId] = useState(0)
  const VerfiyTokenHandler = async () => {
    const response = await VerfiyResetPasswordApi(token)
    if (response.data.error) {
      toast.error(response.data.message)
      navigate('/')
    } else {
      setCustomerId(response.data.customer.id)
      setIsVerfying(false)
    }
  }
  useMemo(() => {
    VerfiyTokenHandler()
  }, [])
  return (
    <div className="section section-center-center">
      {
        isVerfying === true ?
          <h2>Verifying Your Account <Spinner animation="grow" className="ms-3" /></h2>
          :
          <ResetPasswordComponent customerId={customerId} />
      }
    </div>
  )
}

const ResetPasswordComponent = ({ customerId }) => {
  const formSchema = Yup.object().shape({
    password: Yup.string().required().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const FormHandler = async (data) => {
    data.customer_id = customerId
    setLoading(true)
    const response = await ResetPasswordApi(data)
    if (response.error) {
      toast.error(response.data.message)
    } else {
      toast.success(response.data.message)
      navigate('/')
    }
    setLoading(false)
  }
  return ( 
    <form onSubmit={handleSubmit(FormHandler)} className="col-lg-3">
      <h3 className="text-center mb-4 text-primary">Set Your New Password</h3>
      <div className="mb-3 form-group" controlId="Password">
        <label className="mb-2">Password</label>
        <input {...register("password")} className={`form-control ${errors.password ? 'border-danger' : ''}`} size="sm" type="password" placeholder="Enter Your Password" />
      </div>
      <div className="mb-3 form-group" controlId="ConfirmPassword">
        <label className="mb-2">Confirm Password</label>
        <input {...register("confirm_password")} className={`form-control ${errors.confirm_password ? 'border-danger' : ''}`} size="sm" type="password" placeholder="Enter Your Password" />
      </div>
      <div className="text-muted form-text d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="me-1">
          <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10.8V8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 5.20032H8.007" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Your password must contain minimum eight alphanumeric and special characters, excluding: & , ^ , | , “ & .
      </div>
      <div className="text-center">
        <Button variant="primary" loading={`${loading}`} disabled={loading} type="submit" className="my-4">
          Reset Password
        </Button>
        <div>
          <div className="text-secondary fs-14">Already have an account? </div>
          <Link to='/' className="btn-link btn btn-sm text-info px-0 border-0">Click here to register</Link>
        </div>
      </div>
    </form>
  )
}

export default ResetPassword
