import React from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";
import call from "assets/images/call.png";
import location from "assets/images/location.png";
import mail from "assets/images/mail.png";
import locator1 from "assets/images/locator-1.jpg";

function ContactUs() {
    return (
        <div className='contact-us-page'>
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

                    <div className='row mt-5'>

                        <div className='col-lg-6'>
                            <div className="deals-imgs stre-lctr">
                                <img src={locator1} alt="" className="img-fluid" />
                                <div className="btm-liner text-left"><h4>Store Locator</h4><Link to=''> Locate Us</Link></div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="deals-imgs stre-lctr">
                                <img src={locator1} alt="" className="img-fluid" />
                                <div className="btm-liner text-left"><h4>Service Locator</h4><Link to=''> Locate Us</Link></div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className='maping'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9221913261663!2d80.19084101482271!3d13.040624590810598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d3e030826b%3A0x304be27d75766a7c!2s1070a%2C%20Munusamy%20Salai%2C%20Bangaru%20Colony%2C%20K.%20K.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600078!5e0!3m2!1sen!2sin!4v1682063402587!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

        </div>
    )
}

export default ContactUs