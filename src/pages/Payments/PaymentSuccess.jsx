import { Link, useLocation } from "react-router-dom";
export default function PaymentSuccess() {
  const { state } = useLocation();
  
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <img
        style={{ position: "absolute", top: 0, left: 0 }}
        src="https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif"
        width="100%"
        alt="Success-gif"
      />
      <div style={{ zIndex: 1 }} className="card p-4 text-center shadow border-0 rounded-4">
        <img
          src={require('../../assets/images/check.png')}
          width="80px"
          className="mx-auto"
          alt="img"
        />
        <h2 className="mt-3 mb-2">Payment Successful</h2>
        <h1 className="fw-bold mb-3" style={{color: '#48914b' }}>₹{state?.amount}</h1>
        <p className="text-secondary">#Order ID : <Link to={`/my-account/myorders/${state?.order_no}`} className="text-dark mb-2"><u>{state?.order_no}</u></Link></p>
        <p className="text-secondary">#Transaction  ID :  <u>{state?.payment_no}</u> </p>
        <hr />
        <Link to="/" className="text-secondary">
          <b>Continue Order</b> <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
