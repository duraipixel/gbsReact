import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css";
import award1 from "assets/images/award-1.jpg";
import award2 from "assets/images/award-2.jpg";
import award3 from "assets/images/award-3.jpg";
import award4 from "assets/images/award-4.jpg";
import award5 from "assets/images/award-5.jpg";
import award6 from "assets/images/award-6.jpg";

function AwardsAcolades() {
  return (
    <div>
            <div>
        <section className="awardspage-section">
        <div className='container'>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='small-content text-light text-center'>
                    <h3>Awards & Accolades</h3>  
            </div>
            <div className='row'>

            <div className='col-lg-4'>
            <div className='award-container'>
            <img className='w-100' src={award1} alt="" /> 
            <span>2017</span>
            <h4>Transform 2017 - Partner Meet</h4>
            </div>
            </div>

<div className='col-lg-4'>
<div className='award-container'>
<img className='w-100' src={award2} alt="" /> 
<span>2017</span>
<h4>Transform 2017 - Partner Meet</h4>
</div>
</div>

<div className='col-lg-4'>
<div className='award-container'>
<img className='w-100' src={award3} alt="" /> 
<span>2017</span>
<h4>Transform 2017 - Partner Meet</h4>
</div>
</div>

<div className='col-lg-4'>
<div className='award-container'>
<img className='w-100' src={award4} alt="" /> 
<span>2017</span>
<h4>Transform 2017 - Partner Meet</h4>
</div>
</div>

<div className='col-lg-4'>
<div className='award-container'>
<img className='w-100' src={award5} alt="" /> 
<span>2017</span>
<h4>Transform 2017 - Partner Meet</h4>
</div>
</div>

<div className='col-lg-4'>
<div className='award-container'>
<img className='w-100' src={award6} alt="" /> 
<span>2017</span>
<h4>Transform 2017 - Partner Meet</h4>
</div>
</div>
 
            </div>

<div className='col-lg-12 text-center'>
<div className='bordered-button'>
<Link to="/" className="">
View More
</Link>
</div>
</div>

        </div>
        </div>
        </div>
    </section>
    </div>
    </div>
  )
}

export default AwardsAcolades