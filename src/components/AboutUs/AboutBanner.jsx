import React from 'react'
import banner from "assets/images/banner-1.jpg";

function AboutBanner() {
  return (
    <div>
    <section className="p-0">
        <div className='col-lg-12 col-md-12 col-sm-12'>
        <img className='w-100' src={banner} alt="" /> 
        </div>
    </section>
    </div>
  )
}

export default AboutBanner