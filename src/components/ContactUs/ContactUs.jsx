import React from 'react' 
import "./styles.css";
import call from "assets/images/call.png";
import location from "assets/images/location.png";
import mail from "assets/images/mail.png";

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
                    <h2 className="mb-0">Get in Touch</h2>
                    <p>We'd love to hear from you</p>  
                    
                    <div className="home-products testimonials">
                    <img src={location} alt="" />
                    <h4>Location</h4>
                    <h6>1070A, Munusamy Salai,<br /> 
                    KK Nagar, Chennai-600078.</h6> 
					</div> 
                    
                    <div className="home-products testimonials">
                    <img src={call} alt="" />
                    <h4>Call Us</h4>
                    <h6>Sales : +91 91 96003 76222</h6>
                    <h6>Service : +91 98416 03332</h6> 
					</div>  
                    
                    <div className="home-products testimonials">
                    <img src={mail} alt="" />
                    <h4>Mail Us</h4>
                    <h6>info@gbssystems.in</h6> 
					</div> 

                    </div>

                    <div className='col-lg-6'>
                    <div className="form-bg">
			   		<h2 className="mb-0 text-white">How can we help?</h2>
					<p className="text-white">Send us a Message</p>
					<form id="contactusform" name="contactusform" className="reqquote" action="#" method="post">
						<div className="position-relative">
							<label className="text-white">Your Name <span className="text-danger">*</span></label>
							<input type="text" name="name" id="name" className="form-control jsrequired" placeholder="Name" />
						</div>	
						<div className="position-relative">
							<label className="text-white">Email Address <span className="text-danger">*</span></label>
							<input type="email" name="email" id="email" className="form-control jsrequired" placeholder="Email" required="" />
						</div>
						<div className="position-relative">
							<label className="text-white">Contact Number <span className="text-danger">*</span></label>
							<input type="tel" name="phone" id="phone" className="form-control jsrequired" placeholder="Phone Number" required="" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" maxlength="10" />
						</div>						
						<label className="text-white">Message</label>
						<textarea className="form-control" name="Message" id="Message" placeholder="Message"></textarea>
						<div className="text-right pad-top-20">
							<button type="button" onclick="btncontactsubmit()" className="submit-btn">Submit</button>
						</div>
					</form>
					</div>    
                    </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactUs