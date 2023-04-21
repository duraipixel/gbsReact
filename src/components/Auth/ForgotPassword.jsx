import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setLayoutStatus } from "redux/features/authLayoutSlice"
import { sendResetPasswordApi } from "services/auth.service"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useState } from "react";
import { toast } from "react-hot-toast";

function ForgotPassword() {
    const dispatch = useDispatch()
    const formSchema = Yup.object().shape({
        email: Yup.string().required(),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState, reset } = useForm(formOptions)
    const { errors } = formState
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const FormHandler = async (data) => {
        setLoading(true)
        const response = await  sendResetPasswordApi(data)
        if (response.data.error) {
            setErrorMessage(response.data.message)
            setTimeout(() => setErrorMessage(), 3000)
        } else {
            toast.success(response.data.message)
            dispatch(setLayoutStatus({
                status: false,
                type: 'forgot_password'
            }))
            reset()
        }
        setLoading(false)
    }
    return (
        <div className="mx-auto col-md-10">
            <Form onSubmit={handleSubmit(FormHandler)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control {...register("email")} className={`${errors.email ? 'border-danger' : ''}`} type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <div className="text-center">
                    {errorMessage && <p className="text-primary mt-4">{errorMessage}</p>}
                    <Button variant="primary" loading={`${loading}`} type="submit" className="my-4">
                        Reset Password
                    </Button>
                    <div>
                        <div className="text-secondary fs-14">Already have an account? </div>
                        <button onClick={() => dispatch(setLayoutStatus({
                            status: true,
                            type: 'login'
                        }))} className="btn-link btn btn-sm text-info px-0 border-0">Click here to register</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default ForgotPassword