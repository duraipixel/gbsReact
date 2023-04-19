import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setLayoutStatus } from "redux/features/authLayoutSlice"

function Login() {
  const dispatch = useDispatch()
  return (
    <div className="mx-auto col-md-10">
      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Your Password" />
        </Form.Group>
        <p className="text-secondary fs-14">Forgot your password? <button class="btn-link btn btn-sm text-info px-0 border-0">Click Here</button></p>
        <div className="text-center">
          <Button variant="primary" type="button" className="my-4">
            Sign In
          </Button>
          <div>
            <div className="text-secondary fs-14">Don’t have an account? </div>
            <button onClick={() => dispatch(setLayoutStatus({
              status: true,
              type: 'register'
            }))} class="btn-link btn btn-sm text-info px-0 border-0">Click here to register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login