import { Link } from 'react-router-dom'
export default function index() {
  return (
    <div style={{ minHeight: "70vh", display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
      <img style={{ position: 'absolute', top: 0, left: 0 }} src="https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif" width="100%" alt="" />
      <div style={{ zIndex: 1 }}>
        <img src="https://cdn-icons-png.flaticon.com/128/5442/5442020.png" width="150px" className='mb-4' alt='img' />
        <h1 >YOUR ORDER HAS BEEN RECEIVED</h1>
        <h3  className='my-3 text-success'>Thank you for your payment, it’s processing</h3>
        <p className='mb-4'>You will receive an order confirmation email with details of your order and a link to track your process.</p>
        <Link to="/" className='text-primary'><b>Continue Order</b> <i className="fa fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}
