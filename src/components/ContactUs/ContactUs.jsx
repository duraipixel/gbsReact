import React from 'react' 
import "./styles.css";
import call from "assets/images/call.svg";

function ContactUs() {
    return (
        <div>
            <section className='bg-banner-liner'>
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-12'>
                            <div className='banner-liners'>
                                <h1>Contact Us</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='contact-us'>
                <div className='container'>
                    <div className='row'>

                    <div className='col-lg-6'>
                    <h2 class="mb-0">Get in Touch</h2>
                    <p>We'd love to hear from you</p> 
                    
                    <div class="home-products testimonials">
                    <img src={call} alt="" />
                    <h4>Call Us</h4>
                    <h6>Sales : +91 91 96003 76222</h6>
                    <h6>Service : +91 98416 03332</h6> 
					</div> 

                    </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactUs