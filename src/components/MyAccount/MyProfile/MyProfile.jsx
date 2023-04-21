import { useState } from "react";
import { Row, Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FiEdit, FiSave } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
import { MdPublishedWithChanges } from "react-icons/md";

import { updatePasswordApi, updateProfileApi } from "services/customer.service";
import { AuthUser } from "utils";

const MyProfile = () => {
  const customer = AuthUser();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      first_name: customer?.first_name,
      last_name: customer?.last_name,
      email: customer?.email,
      mobile_no: customer?.mobile_no,
      customer_id: customer.id
    }
  });
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const editProfileHandler = async (data) => {
    setLoading(true)
    const response = await updateProfileApi(data)
    if (response.error === 0) {
      toast.success(response.message)
      setDisabled(!disabled)
    }
    setLoading(false)
  };
  return (
    <Col className="container-card card p-4">
      <div className="myaccount-personal-details">
        <Form onSubmit={handleSubmit(editProfileHandler)} onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault() }}>
          <SectionHeader
            title={"Personal Information"}
            loading={loading}
            disabled={disabled}
            setDisabled={setDisabled}
            editBtnText={"Edit Profile"}
            saveBtnText={"Save Changes"}
          />
          <Form.Group as={Row} className="mb-4" controlId="firstName">
            <Form.Label className="fs-6" column sm="3">
              First Name
            </Form.Label>
            <Col sm="5">
              <Form.Control
                disabled={disabled}
                type="text"
                placeholder="First Name"
                {...register('first_name', { required: true })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4" controlId="LastName">
            <Form.Label className="fs-6" column sm="3">
              Last Name
            </Form.Label>
            <Col sm="5">
              <Form.Control
                disabled={disabled}
                type="text"
                placeholder="Last Name"
                {...register('last_name', { required: true })}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4" controlId="contactNumber">
            <Form.Label className="fs-6" column sm="3">
              Contact Number
            </Form.Label>
            <Col sm="5">
              <Form.Control
                disabled={disabled}
                {...register('mobile_no', { required: true })}
                placeholder="Contact Number"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4" controlId="email">
            <Form.Label className="fs-6" column sm="3">
              E-mail
            </Form.Label>
            <Col sm="5">
              <Form.Control
                disabled
                type="text"
                placeholder="email"
                defaultValue={customer.email}
              />
            </Col>
          </Form.Group>
        </Form>
        <hr className="my-5" /> 
        <SecuritySetting />
      </div>
    </Col>
  );
};

const SecuritySetting = () => {
  const { handleSubmit, register, reset } = useForm();
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  const editPasswordHandler = async (formData) => {
    setLoading(true)
    const { data } = await updatePasswordApi({ ...formData, customer_id: AuthUser().id })
    if (data.error === 0) {
      toast.success(data.message)
      setDisabled(!disabled)
    } else {
      toast.error(data.message)
    }
    setLoading(false)
    reset()
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(editPasswordHandler)} onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault() }}>
        <SectionHeader
          title={"Security Setting"}
          loading={loading}
          disabled={disabled}
          setDisabled={setDisabled}
          editBtnText={"Change Password"}
          saveBtnText={"Set Password"}
        />
        <Form.Group
          as={Row}
          className="mb-4"
          controlId="Password"
        >
          <Form.Label className="fs-6" column sm="3">   Password    </Form.Label>
          <Col sm="5">
            <Form.Control
              disabled={disabled}
              type="password"
              placeholder="********"
              {...register('current_password', { required: true })}
            />
          </Col>
        </Form.Group>
        {
          !disabled ?
            <Form.Group
              as={Row}
              className="mb-4 "
              controlId="Password"
            >
              <Form.Label className="fs-6" column sm="3">
                Enter New Password
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  autoComplete="off"
                  disabled={disabled}
                  type="password"
                  placeholder="********"
                  {...register('password', { required: true })}
                />
              </Col>
            </Form.Group>
            : null
        }
        <p className="mb-0">Last Changed: 4 May 2022</p>
      </Form>
    </div>
  )
}

const SectionHeader = ({ disabled, setDisabled, loading, title, editBtnText, saveBtnText }) => {
  return (
    <div className="flex-jc-btwn flex-wrap heading-div">
      <h2 className="m-0 fs-5">{title}</h2>
      {
        disabled ?
          <button type="button" className="btn-sm btn btn-outline-info" onClick={() => setDisabled(!disabled)}>
            <FiEdit className="me-2" />  {editBtnText}
          </button>
          :
          <div className="btn-group">
            <button type="submit" loading={`${loading}`} className="btn-sm btn btn-success" >
              <FiSave className="me-2" /> {saveBtnText}
            </button>
            <button type="button" className="btn-sm btn btn-success" onClick={() => setDisabled(!disabled)}>
              <IoCloseCircle size={25} />
            </button>
          </div>
      }
    </div>
  )
}

export default MyProfile;
