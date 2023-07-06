import React from "react";
import { Link } from "react-router-dom";

function ServiceOffers() {
  return (
    <div>
      <section className="service-offers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 authorized-dealer">
              <div className="small-content text-center">
                <h3>What GBS Systems & Services Offers You</h3>
              </div>
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                  <div className="retails-details">
                    <h4>Authorized Retailer</h4>
                    <p>
                      With more than 28 years in this field, GBS Systems has 24
                      Exclusive Showrooms for Acer, Asus, Dell, HP, and Lenovo
                      in Chennai & Madurai. And, we are planning to expand our
                      business to other regions with other brands.
                    </p>
                    <Link to="/store-locator-for-sales">Explore GBS Stores</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 exclusive-service">
              <div className="row">
                <div className="col-lg-6">
                  <div className="retails-details">
                    <h4>Exclusive Service Centers</h4>
                    <p>
                      Established in 1994, Laptop Service@GBS is a premier
                      laptop repair company operated by GBS Systems & Services
                      Pvt Ltd. Having 23 Service Centers & 28 years of
                      experience with 100+ technicians.
                    </p>
                    <Link to="/store-locator-for-service">
                      Explore Laptop Service @GBS
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="snapshots-journey">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="journey-lay text-start">
                <h4>Snapshots From Our Journey</h4>
                <p>
                  Take a look at the best moments captured during our key
                  milestones <br /> such as product launches to opening our new
                  showroom.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="journey-lay text-end">
                <a href="https://gallery.gbssystems.com">View Gallery</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceOffers;
