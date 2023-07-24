import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setLayoutStatus } from "redux/features/authLayoutSlice"
import { LoginApi } from "services/auth.service"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from "react";
import { toast } from "react-hot-toast";
import { setAuthUser } from "redux/features/authSlice";
import { setCartCount } from "redux/features/cartSlice";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

function Login() {
  const dispatch = useDispatch()
  const formSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, formState, reset } = useForm(formOptions)
  const { errors } = formState
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [eye, setEye] = useState(true)

  const LoginHandler = async (data) => {
    setLoading(true)
    const response = await LoginApi(data)
    if (response.data.error) {
      setErrorMessage(response.data.message)
      setTimeout(() => setErrorMessage(), 3000)
    } else {
      toast.success(response.data.message)
      dispatch(setAuthUser({
        data: response.data.customer_data,
        isLoggedIn: true
      }))
      dispatch(setCartCount(response.data.cart_count))
      dispatch(setLayoutStatus({
        status: false,
        type: 'login'
      }))
      reset()
    }
    setLoading(false)
  }
  return (
    <div className="mx-auto col-md-10">
      <Form onSubmit={handleSubmit(LoginHandler)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control {...register("email")} className={`${errors.email ? 'border-danger' : ''}`} type="email" placeholder="Enter Your Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <Form.Control {...register("password")} className={`${errors.password ? 'border-danger' : ''}`} type={eye ? 'password' : 'text'} placeholder="Enter Your Password" />
            <button type="button" onClick={() => setEye((prev) => !prev)} className="btn btn-light border">
              {eye ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </button>
          </div>
        </Form.Group>
        <p className="text-secondary fs-14">
          Forgot your password?
          <button type="button" onClick={() => dispatch(setLayoutStatus({
            status: true,
            type: 'forgot_password'
          }))}
            className="btn-link btn btn-sm text-info px-0 border-0">
            Click Here
          </button>
        </p>
        <div className="text-center">
          {errorMessage && <p className="text-primary mt-4">{errorMessage}</p>}
          <Button variant="primary" loading={`${loading}`} type="submit" className="my-4">
            Sign In
          </Button>
          <div>
            <div className="text-secondary fs-14">Don’t have an account? </div>
            <button type="button" onClick={() => dispatch(setLayoutStatus({
              status: true,
              type: 'register'
            }))} className="btn-link btn btn-sm text-info px-0 border-0">Click here to register</button>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default Login