import React from 'react'
import { Link } from 'react-router-dom';

function PaymentFaild() {
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
            src="https://cutewallpaper.org/24/gifs-png/%E2%9C%8Egifs-png-wiki-%E2%80%A2-higurashi-no-naku-koro-ni-%E2%80%A2-amino.gif"
            width="100%"
            alt="Success-gif"
          />
          <div style={{ zIndex: 1 }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2341/2341872.png"
              width="150px"
              className="mb-4"
              alt="img"
            />
            <h1 className='text-danger fw-bold'>PAYMENT FAILED</h1>
            <h3 className="my-3">
              Pleace try again later.
            </h3>
            <Link to="/" className="text-secondary">
              <i className="fa fa-arrow-left me-2"></i>
              <b>back to home</b> 
            </Link>
          </div>
        </div>
      );
}

export default PaymentFaild