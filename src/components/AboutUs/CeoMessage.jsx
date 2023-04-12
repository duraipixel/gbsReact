import React from 'react'
import ceovideo from "assets/images/bg-6.jpg";

function CeoMessage() {
  return (
    <div>
        <section className="ceo-msg">
        <div className='container'>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='small-content text-center'>
                    <h3>CEO's Message</h3>
                    <p>My Guru ‘Mahatria’ once said, “Whatever we do, we should be #1 on<br /> 
                    that. Yes…!I should make GBS as #1 player in IT Industry in India.”</p>
                    <div className='ceovds'>
                    <img src={ceovideo} alt="" /> 
                    </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default CeoMessage