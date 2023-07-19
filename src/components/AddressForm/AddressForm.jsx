import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addAddress, setAddress, setAdressForm } from "redux/features/addressSlice";
import { MdOutlineClose } from "react-icons/md";
import { AuthUser } from 'utils';
import { customerAddressApi, updateOrCreateAddressApi } from 'services/customer.service';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';

function AddressForm() {
  const address = useSelector((state) => state.address)
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();
  const onSubmit = (formData) => {
    var payload = { ...formData, customer_id: AuthUser()?.id, id: address?.edit_value?.customer_address_id }
    updateOrCreateAddressApi(payload).then(response => {
      toast.success(response.data.message)
      dispatch(addAddress({ status: false, type: address.type, value: response.data.addresses }))
      reset()
    })
  };
  const [addressMaster, setAdressMaster] = useState([])
  const [countryMaster, setCountryMaster] = useState([])
  const [stateMaster, setStateMaster] = useState([])
  const [pincodeMaster, setPincodeMaster] = useState([])
  const getMasters = async () => {
    const { data } = await customerAddressApi()
    if (data?.status === "success") {
      setAdressMaster(data.address_type)
      setStateMaster(data.state)
      setCountryMaster(data.country)
      setPincodeMaster(data.pincode)
    }
  }
  useEffect(() => {
    getMasters()
    if (address?.edit_value) {
      setValue('id', address?.edit_value?.id)
      setValue('name', address?.edit_value?.name)
      setValue('address_type_id', address?.edit_value?.address_type_id)
      setValue('email', address?.edit_value?.email)
      setValue('mobile_no', address?.edit_value?.mobile_no)
      setValue('address', address?.edit_value?.address_line1)
      setValue('city', address?.edit_value?.city)
      setValue('state', address?.edit_value?.stateid)
      setValue('country', address?.edit_value?.countryid)
      setValue('post_code', address?.edit_value?.post_code)
    } else {
      reset()
    }
  }, [address?.edit_value])
  if (address.status) return (
    <Modal
      show={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="new-address-modal"
    >
      <Modal.Header className='bg-light'>
        <Modal.Title className="fs-5 fw-bold text-info">
          {address.type === "CREATE" ? "Add a New Shipping Address" : "Edit Shipping Address"}
        </Modal.Title>
        <button className="btn btn-light" onClick={() => dispatch(setAdressForm({ status: false, type: address.type }))}>
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
              <Form.Select
                {...register("address_type_id", {
                  required: "This is required.",
                })}
                className={`${errors.address_type_id ? 'border-danger' : ''}`} >
                <option value=""> Select Your Address type </option>
                {
                  addressMaster.length !== 0 && addressMaster.map((address_type) => (
                    <option key={address_type.id} value={address_type.id}>{address_type.name}</option>
                  ))
                }
              </Form.Select>
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
              <Form.Select
                {...register("post_code", {
                  required: "This is required.",
                })}
                className={`${errors.post_code ? 'border-danger' : ''}`} >
                <option value=""> Select Your Pincode </option>
                {
                  pincodeMaster.length !== 0 && pincodeMaster.map((item) => (
                    <option key={item.id} value={item.id}>{item.pincode}</option>
                  ))
                }
              </Form.Select>
              {/* <Form.Control
                type="text"
                placeholder="Pincode"
                className={`${errors.post_code ? 'border-danger' : ''}`}
                {...register("post_code", {
                  required: "This is required.",
                })}
              /> */}
            </Form.Group>
          </div>
          <div className="flex-jc-btwn gap-1 flex-wrap">
            <Form.Group
              className="mb-3"
              controlId="state"
              style={{ width: "49%" }}
            >
              <Form.Select
                {...register("state", {
                  required: "This is required.",
                })}
                className={`${errors.state ? 'border-danger' : ''}`} >
                <option value=""> Select Your State </option>
                {
                  stateMaster.length !== 0 && stateMaster.map((state) => (
                    <option key={state.id} value={state.id}>{state.state_name}</option>
                  ))
                }
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="country"
              style={{ width: "49%" }}
            >
              <Form.Select
                {...register("country", {
                  required: "This is required.",
                })}
                className={`${errors.country ? 'border-danger' : ''}`} >
                <option value=""> Select Your Country </option>
                {
                  countryMaster.length !== 0 && countryMaster.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))
                }
              </Form.Select>
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