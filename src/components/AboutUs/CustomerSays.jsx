import React from "react";
import Slider from "react-slick";
import customerimage from "assets/images/customer.png";
import customer1 from "assets/images/bg-12.jpg";
import customer2 from "assets/images/bg-13.jpg";
import client1 from "assets/images/client-1.jpg";
import client2 from "assets/images/client-2.jpg";
import client3 from "assets/images/client-3.jpg";
import client4 from "assets/images/client-4.jpg";
import client5 from "assets/images/client-5.jpg";
import client6 from "assets/images/client-6.jpg";
import client7 from "assets/images/client-7.jpg";
import client8 from "assets/images/client-8.jpg";
import VideoBox from "components/VideoBox";

function CustomerSays() {
  var customers = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section className="customer-says">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="small-content text-center">
                <h3>What Our Customers Say</h3>
              </div>
              <div className="customersays-slider text-center">
                <Slider {...customers}>
                  <div className="customer-detsil text-center">
                    <img src={customerimage} alt="customer-pic" className="img-fluid" />
                    <h4>Lenovo Exclusive store | GBS Systems</h4>
                    <br />
                    {/* <span className='txt-fill'>Software Engineer</span> */}
                    <VideoBox
                      bgImage={customer1}
                      src="https://www.youtube.com/embed/-ThuAOC0PHM"
                    />
                  </div>

                  <div className="customer-detsil text-center">
                    <img src={customerimage} alt="customer-pic" className="img-fluid" />
                    <h4> Nexus Forum Mall, Vadapalani | GBS Systems</h4>
                    <br />
                    {/* <span className='txt-fill'>Software Engineer</span> */}
                    <VideoBox
                      bgImage={customer2}
                      src="https://www.youtube.com/embed/5UIQz7rZG3g"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="partners-lists">
                <div className="small-content text-center">
                  <h3>Our Partner Brands</h3>
                </div>
                <ul>
                  <li>
                    <img src={client6} alt="client-pic" />
                  </li>
                  <li>
                    <img src={client1} alt="client-pic" />
                  </li>
                  <li>
                    <img src={client2} alt="client-pic" />
                  </li>
                  <li>
                    <img src={client4} alt="client-pic" />
                  </li>
                  <li>
                    <img src={client3} alt="client-pic" />
                  </li>
                  <li>
                    <img src={client5} alt="client-pic" />
                  </li>
                  <li>
                    <img src={client7} alt="client-pic" />
                  </li>
                  <li>
                    <img src={client8} alt="client-pic" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerSays;
