import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setLayoutStatus } from "redux/features/authLayoutSlice"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { RegisterApi } from "services/auth.service";
import { useState } from "react"; 
import { toast } from "react-hot-toast";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function Register() {
  const dispatch = useDispatch()
  const formSchema = Yup.object().shape({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    mobile: Yup.string().matches(/^[6-9]\d{9}$/).required(),
    email: Yup.string().required(),
    password: Yup.string().required().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [eye, setEye] = useState(true)
  const [eyeConfirm, setConfirmEye] = useState(true)
  
  const RegisterHandler = async (data) => {
    setLoading(true)
    const response = await RegisterApi(data)
    if (response.error) {
      toast.error(response.message[0])
      setErrorMessage(response.message[0])
      setTimeout(() => setErrorMessage(), 3000)
    } else {
      toast.success(response.message)
      reset()
      dispatch(setLayoutStatus({
        status: false,
        type: 'login'
      }))
    }
    setLoading(false)
  }
  return (
    <div className="mx-auto col-md-10">
      <Form onSubmit={handleSubmit(RegisterHandler)}>
        <Form.Group className="mb-3" controlId="First">
          <Form.Label className="small">First Name</Form.Label>
          <Form.Control {...register("first_name")} className={`${errors.first_name ? 'border-danger' : ''}`} size="sm" type="text" placeholder="Enter Your First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Last">
          <Form.Label className="small">Last Name</Form.Label>
          <Form.Control {...register("last_name")} className={`${errors.last_name ? 'border-danger' : ''}`} size="sm" type="text" placeholder="Enter Your Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label className="small">Email</Form.Label>
          <Form.Control {...register("email")} className={`${errors.email ? 'border-danger' : ''}`} size="sm" type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="MobileNumber">
          <Form.Label className="small">Mobile Number</Form.Label>
          <Form.Control {...register("mobile")} className={`${errors.mobile ? 'border-danger' : ''}`} size="sm" type="number" placeholder="Enter Your Mobile Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="small">Password</Form.Label>
          <div className="input-group">
            <Form.Control {...register("password")} className={`${errors.password ? 'border-danger' : ''}`} size="sm" type={eye ? 'password' : 'text'} placeholder="Enter Your Password" />
            <button type="button" onClick={() => setEye((prev) => !prev)} className="btn-sm btn btn-light border">
              {eye ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </button>
          </div>
        </Form.Group> 
        <Form.Group className="mb-3" controlId="ConfirmPassword">
          <Form.Label className="small">Confirm Password</Form.Label>
          <div className="input-group">
            <Form.Control {...register("confirm_password")} className={`${errors.confirm_password ? 'border-danger' : ''}`} size="sm" type={eyeConfirm ? 'password' : 'text'} placeholder="Confirm Your Password" />
            <button type="button" onClick={() => setConfirmEye((prev) => !prev)} className="btn-sm btn btn-light border">
              {eyeConfirm ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </button>
          </div>
        </Form.Group>
        <Form.Text className="text-muted d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="me-2">
            <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 10.8V8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 5.20032H8.007" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Your password must contain minimum eight alphanumeric and special characters, excluding: & , ^ , | , “ & .
        </Form.Text>
        <Form.Text className="text-muted d-flex mt-3">
          <Form.Check type="checkbox" />
          <span className="fs-14 ms-2">
            By continuing, you're agreeing to our <button className="btn btn-sm text-info p-0 border-0">customer terms of service</button> ,<button className="btn btn-sm text-info px-0 border-0">privacy policy</button>  and
            <button className="btn btn-sm text-info p-0 border-0">cookie policy</button>
          </span>
        </Form.Text>
        <div className="text-center">
          {errorMessage && <p className="text-primary mt-4">{errorMessage}</p>}
          <Button variant="primary" loading={`${loading}`} disabled={loading} type="submit" className="my-4">
            Create an Account
          </Button>
          <div>
            <div className="text-secondary fs-14">Already have an account? </div>
            <button onClick={() => dispatch(setLayoutStatus({
              status: true,
              type: 'login'
            }))} className="btn-link btn btn-sm text-info px-0 border-0">Click here to Login</button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Register