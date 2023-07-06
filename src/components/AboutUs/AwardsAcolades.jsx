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
                <div className='small-content text-center'>
                  <h2 className='h3 text-light'>Awards & Accolades</h2>
                </div>
                <div className='row'>

                  <div className='col-lg-4'>
                    <div className='award-container'>
                      <img className='w-100' src={award1} alt="Awards & Accolades - GBS Systems" />
                      <span>2017</span>
                      <h3>Transform 2017 - Partner Meet</h3>
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='award-container'>
                      <img className='w-100' src={award2} alt="Awards & Accolades - GBS Systems" />
                      <span>2017</span>
                      <h3>Transform 2017 - Partner Meet</h3>
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='award-container'>
                      <img className='w-100' src={award3} alt="Awards & Accolades - GBS Systems" />
                      <span>2017</span>
                      <h3>Transform 2017 - Partner Meet</h3>
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='award-container'>
                      <img className='w-100' src={award4} alt="Awards & Accolades - GBS Systems" />
                      <span>2017</span>
                      <h3>Transform 2017 - Partner Meet</h3>
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='award-container'>
                      <img className='w-100' src={award5} alt="Awards & Accolades - GBS Systems" />
                      <span>2017</span>
                      <h3>Transform 2017 - Partner Meet</h3>
                    </div>
                  </div>

                  <div className='col-lg-4'>
                    <div className='award-container'>
                      <img className='w-100' src={award6} alt="Awards & Accolades - GBS Systems" />
                      <span>2017</span>
                      <h3>Transform 2017 - Partner Meet</h3>
                    </div>
                  </div>

                </div>

                <div className='col-lg-12 text-center'>
                  <div className='bordered-button'>
                    <a href="https://gallery.gbssystems.com/" target='_blank' rel="noreferrer" >
                      View More
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className='solutions-partner'>
        <div className='container'>
        <div className='row'>

          <div className='col-lg-12'>
          <div className='small-content text-center'>
                    <h3>Your IT solution partner for growing business needs</h3>
                    <p>Well known as GBS today was established in the year 1994, as a proprietary concern partnering with Intel from the first day of its inception. The next achievement was its establishment as a Private Limited Company in 2006. With the esteemed ISO 9001 certification in 2008 raising the company on par with major players in the industry, GBS has evolved into a Total Solution Provider and partner of reputed companies.</p> 
                    <p>We are on the way, the market was changing..! Individuals begin to adore PC for their regular utilization. Currently, we have an exclusive outlet for leading brands Dell, HP, Lenovo, Acer, and Asus. GBS also expanded itself to laptop service centers in Tamilnadu. Currently, We Provide 22+ Exclusive Laptop service centers in South India. We are keenly intended to magnify our business in the South India region in present years. we hope and we will be top-notch.</p> 
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