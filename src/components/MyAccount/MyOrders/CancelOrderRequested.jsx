import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { cancelOrderApi } from "services/product.service";
import { AuthUser } from "utils";

export const CancelOrderRequested = ({ order }) => {
  const [formLoader, setFormLoader] = useState(false);
  const [status, setStatus] = useState(order.status);
  const [textFieldNotShow, setTextFieldNotShow] = useState(true);
  const [radioValue, setRadioValue] = useState(false);
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleChange = (e) => {
    setRadioValue(e.target.value);
  };
  async function updateCancelOrder(formData) {
    if (radioValue === false) {
      toast.error('Reason is required !')
      return false
    }
    if (radioValue !== false & radioValue !== 'other') {
      formData.cancelReason = radioValue
    }
    setFormLoader(true);
    formData.order_id = order.id;
    formData.customer_id = AuthUser().id;
    cancelOrderApi(formData).then((res) => {
      setFormLoader(false);
      if (res.data.error === 1) {
        toast.error(res.data.message);
        reset();
      } else {
        setStatus('cancel_requested')
        toast.success(res.data.message);
        setModal(!modal);
      }
    })
  }

  const cancelReasons = [
    "Product is being delivered to a wrong address(Customer’s mistake)",
    "Product is not required anymore.",
    "Cheaper alternative available for lesser price.",
    "Bad review from friends/relatives after ordering the product",
  ]
  if (status === 'cancel_requested') return <b className="text-primary">Cancel Requested</b>
  if (status !== 'cancelled') return (
    <>
      <button className="btn btn-outline-primary" onClick={() => setModal(true)}>Cancel Order</button>
      <Modal
        className="passwordModal cstmzed"
        size="md"
        backdrop="static"
        keyboard={false}
        show={modal}
        onHide={() => setModal(!modal)}
      >
        <Modal.Header closeButton className="bg-light">
          <Modal.Title>
            <h5 className="text-primary fw-bold fs-6">What is a good reason to cancel order?</h5>
          </Modal.Title>
        </Modal.Header>
        <form id="cancelOrderForm" onSubmit={handleSubmit(updateCancelOrder)}>
          <Modal.Body>
            <FormControl>
              <RadioGroup
                className="list-group"
                onChange={handleChange}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="none"
                name="radio-buttons-group"
              >
                {
                  cancelReasons.map((item, i) => {
                    return (
                      <FormControlLabel
                        key={i}
                        value={item}
                        control={<Radio onClick={() => setTextFieldNotShow(true)} size="small" />}
                        label={item}
                        className="fs-6 list-group-item list-group-item-action m-0"
                      />
                    );
                  })}

                <FormControlLabel
                  value="other"
                  control={<Radio onClick={() => setTextFieldNotShow(false)} size="small" />}
                  label="Other"
                  className="fs-6 list-group-item list-group-item-action m-0"
                />
              </RadioGroup>
            </FormControl>
            {
              textFieldNotShow === false ?
                <TextField
                  className="mt-3"
                  hidden={textFieldNotShow}
                  id="outlined-textarea"
                  label="Your comments"
                  placeholder="Type here...."
                  multiline
                  rows={8}
                  autoFocus={true}
                  errors={errors.cancelReason ? true : false}
                  fullWidth
                  inputProps={{ maxLength: 500 }}
                  {...register("cancelReason", { required: true })}
                />
                : ""
            }
          </Modal.Body>
          <Modal.Footer className="justify-content-end">
            <button type="button" className="btn btn-light border me-2" onClick={() => setModal(!modal)} >Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={formLoader} >
              {formLoader ? (
                <span className="spinner-grow spinner-grow-sm me-1"></span>
              ) : (
                <i className="bi bi-send-fill me-1"></i>
              )}
              Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
