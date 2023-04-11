import React from "react";
import "../styles.scss";
import { location } from "data/StoreLoaction";

const FindStoreNearYou = () => {
  return (
    <section className="text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="comon-heads">
              <h2>Find a GBS Systems Store Near You</h2>
            </div>
            <p>
              Whether you're in the market for a gaming laptop, a business
              laptop, or a budget laptop, GBS Systems is a great place to start
              your search. With a wide network of exclusive stores across
              Chennai, we can provide you with the perfect laptop that will suit
              your specific needs.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <div className="m-3 mb-4">
              <h4>Our Locations</h4>
            </div>
            <div className="flex-jc-wrap gap-4">
              {location &&
                location.map((item, i) => {
                  return (
                    <button key={i} className="location-btn">
                      {item}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindStoreNearYou;
