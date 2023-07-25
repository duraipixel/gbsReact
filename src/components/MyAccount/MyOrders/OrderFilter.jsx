import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useEffect } from 'react';
import { getOrdersStstusListApi } from 'services/product.service';
import { BsFilterCircleFill } from 'react-icons/bs';
function OrderFilter({ setOrdersStatus, setFetching }) {
  const [options, setOptions] = useState([])
  useEffect(() => {
    getOrdersStstusListApi().then(response => {
      setOptions(response.data.data.map(item => item.replaceAll('_', ' ')))
      setFetching(false)
    })
  }, [])
  const [value, setValue] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
    setOrdersStatus(event.target.value)
  };
  return (
    <div className="d-flex align-items-center justify-content-end">
      <b className='me-2 d-none d-md-flex align-items-center justify-content-end'><BsFilterCircleFill color='gray' size={22} className='me-2'/>Filter : </b>
      <FormControl style={{ minWidth: 250 }} size="small" className='text-capitalize'>
        <InputLabel id="order-status-select-label">Order Status</InputLabel>
        <Select labelId="order-status-select-label" id="order-status-select" value={value} label="Order Status" onChange={handleChange} >
          {options.length ?
            options.map(item => <MenuItem className='text-capitalize' value={item}>{item.replaceAll('_', ' ')}</MenuItem>)
            : null}
        </Select>
      </FormControl>
    </div>
  )
}

export default OrderFilter