import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import call from "assets/images/call.png";
import location from "assets/images/location.png";
import mail from "assets/images/mail.png";
import locator1 from "assets/images/locator-1.jpg";
import { useSelector } from "react-redux";
import { Loader, openInNewTab } from "utils";
import ContactForm from "./ContactForm";

function ContactUs() {
  const [loader, setLoader] = useState(false);
  const siteInfo = useSelector((state) => state.footerCollection.siteInfo);
  return (
    <div className="contact-us-page">
      <section className="bg-banner-liner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-liners">
                <h1>Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className="container">
          {loader ? (
            <Loader />
          ) : (
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-0">Get in Touch</h2>
                <p>We'd love to hear from you</p>

                <div className="home-products testimonials">
                  <img src={location} alt="location-icon" />
                  <h3 className="contact-us-headings">Location</h3>
                  <h4 className="para h6">
                    1070A, Munusamy Salai,
                    <br />
                    KK Nagar, Chennai-600078.
                  </h4>
                </div>

                <div className="home-products testimonials">
                  <img src={call} alt="call-icon" />
                  <h4>Call Us</h4>
                  <h5 className="para">Sales : +91 91 96003 76222</h5>
                  <h6>Service : +91 98416 03332</h6>
                </div>

                <div className="home-products testimonials">
                  <img src={mail} alt="mail-icon" />
                  <h4>Mail Us</h4>
                  <h5 className="para">
                    
                    <Link
                      rel="noopener noreferrer"
                      style={{ textTransform:'lowercase' }}
                      onClick={() =>
                        openInNewTab(`mailto:${siteInfo.site_email}`)
                      }
                    >
                      {siteInfo.site_email}
                    </Link>
                  </h5>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-bg">
                  <h2 className="mb-0 text-white">How can we help?</h2>
                  <p className="text-white">Send us a Message</p>
                  <ContactForm setLoader={setLoader} />
                </div>
              </div>
            </div>
          )}
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="deals-imgs stre-lctr">
                <img src={locator1} alt="location-icon" className="img-fluid" />
                <div className="btm-liner text-left">
                  <h4>Store locator for Sales</h4>
                  <Link to="/store-locator-for-sales"> Locate Us</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="deals-imgs stre-lctr">
                <img src={locator1} alt="location-icon" className="img-fluid" />
                <div className="btm-liner text-left">
                  <h4>Service Locator</h4>
                  <Link to="/store-locator-for-service"> Locate Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maping">
        <iframe
          title="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9221913261663!2d80.19084101482271!3d13.040624590810598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d3e030826b%3A0x304be27d75766a7c!2s1070a%2C%20Munusamy%20Salai%2C%20Bangaru%20Colony%2C%20K.%20K.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600078!5e0!3m2!1sen!2sin!4v1682063402587!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

export default ContactUs;
