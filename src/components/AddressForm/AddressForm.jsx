import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addAddress, setAdressForm } from "redux/features/addressSlice";
import { MdOutlineClose } from "react-icons/md";
import { AuthUser } from 'utils';
import { updateOrCreateAddressApi } from 'services/customer.service';
import { toast } from 'react-hot-toast';
function AddressForm() {
  const address = useSelector((state) => state.address)
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (formData) => {
    const { data } = await updateOrCreateAddressApi({ ...formData, customer_id: AuthUser()?.id })
    toast.success(data.message)
    dispatch(addAddress({ status: false, value: data.addresses}))
    reset()
  };
  if (address.status) return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="new-address-modal"
    >
      <Modal.Header className='bg-light'>
        <Modal.Title className="fs-5 fw-bold text-info">Add a New Shipping Address</Modal.Title>
        <button className="btn btn-light" onClick={() => dispatch(setAdressForm({ status: false }))}>
          <MdOutlineClose />
        </button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="fs-5 text-info">Contact Details</h3>
          <div className="flex-jc-btwn gap-1 flex-wrap">
            <Form.Group
              className="mb-3"
              controlId="name"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "This is required.",
                })}
                className={`${errors.name ? 'border-danger' : ''}`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="contactnumber"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="tel"
                placeholder="Mobile Number"
                className={`${errors.mobile_no ? 'border-danger' : ''}`}
                {...register("mobile_no", {
                  required: "This is required.",
                  pattern: {
                    value:
                      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Not a valid Mobile Number",
                  },
                })}
              />
            </Form.Group>
          </div>
          <div className="flex-jc-btwn gap-1 flex-wrap">
            <Form.Group
              className="mb-3"
              controlId="Email"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "This is required.",
                })}
                className={`${errors.email ? 'border-danger' : ''}`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="addresstype"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="text"
                placeholder="Address Type"
                {...register("address_type_id", {
                  required: "This is required.",
                })}
                className={`${errors.address_type_id ? 'border-danger' : ''}`}
              />
            </Form.Group>
          </div>
          <h3 className="fs-5 text-info">Address</h3>
          <Form.Group className="mb-3" controlId="street">
            <Form.Control
              type="text"
              placeholder="Building Number, Street Name & Locality"
              {...register("address", {
                required: "This is required.",
              })}
              className={`${errors.address ? 'border-danger' : ''}`}
            />
          </Form.Group>
          <div className="flex-jc-btwn gap-1 flex-wrap">
            <Form.Group
              className="mb-3"
              controlId="city"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="text"
                placeholder="City"
                {...register("city", {
                  required: "This is required.",
                })}
                className={`${errors.city ? 'border-danger' : ''}`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="post_code"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="text"
                placeholder="Pincode"
                className={`${errors.post_code ? 'border-danger' : ''}`}
                {...register("post_code", {
                  required: "This is required.",
                })}
              />
            </Form.Group>
          </div>
          <div className="flex-jc-btwn gap-1 flex-wrap">
            <Form.Group
              className="mb-3"
              controlId="state"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="text"
                placeholder="State"
                {...register("state", {
                  required: "This is required.",
                })}
                className={`${errors.state ? 'border-danger' : ''}`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="country"
              style={{ width: "49%" }}
            >
              <Form.Control
                type="text"
                placeholder="Country"
                {...register("country", {
                  required: "This is required.",
                })}
                className={`${errors.country ? 'border-danger' : ''}`}
              />
            </Form.Group>
          </div>
          <div className="text-center mt-3 mb-1">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal >
  )
}

export default AddressForm