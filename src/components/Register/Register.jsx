import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setLayoutStatus } from "redux/features/authLayoutSlice"

function Register() {
  const dispatch = useDispatch()
  return (
    <div className="mx-auto col-md-10">
      <div>
        <Form.Group className="mb-3" controlId="First">
          <Form.Label className="small">First Name</Form.Label>
          <Form.Control size="sm"  type="text" placeholder="Enter Your First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Last">
          <Form.Label className="small">Last Name</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Enter Your Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label className="small">Email</Form.Label>
          <Form.Control size="sm" type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label className="small">Password</Form.Label>
          <Form.Control size="sm" type="password" placeholder="Enter Your Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ConfirmPassword">
          <Form.Label className="small">Confirm Password</Form.Label>
          <Form.Control size="sm" type="password" placeholder="Confirm Your Password" />
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
            By continuing, you're agreeing to our <button class="btn btn-sm text-info p-0 border-0">customer terms of service</button> ,<button class="btn btn-sm text-info px-0 border-0">privacy policy</button>  and
            <button class="btn btn-sm text-info p-0 border-0">cookie policy</button>
          </span>
        </Form.Text>
        <div className="text-center">
          <Button variant="primary" type="button" className="my-4">
            Create an Account
          </Button>
          <div>
            <div className="text-secondary fs-14">Already have an account? </div>
            <button onClick={() => dispatch(setLayoutStatus({
              status: true,
              type: 'login'
            }))} class="btn-link btn btn-sm text-info px-0 border-0">Click here to register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register