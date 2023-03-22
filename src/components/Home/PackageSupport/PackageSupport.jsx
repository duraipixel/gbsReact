import React from "react";
import icon1 from "assets/images/PackageSupport/icn-1.png";
import icon2 from "assets/images/PackageSupport/icn-2.png";
import icon3 from "assets/images/PackageSupport/icn-3.png";
import icon4 from "assets/images/PackageSupport/icn-4.png";

import "./styles.css";

const PackageSupport = () => {
  return (
    <section className="possibles">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between flex-jc-wrap">
            <div className="care-box text-left">
              <span>
                <img src={icon1} alt="" /> 24x7 <br />
                Customer Support
              </span>
            </div>

            <div className="care-box text-left">
              <span>
                <img src={icon2} alt="" /> Free <br />
                Shipping
              </span>
            </div>

            <div className="care-box text-left">
              <span>
                <img src={icon3} alt="" /> Flexible <br />
                Returns{" "}
              </span>
            </div>

            <div className="care-box text-left">
              <span>
                <img src={icon4} alt="" /> Secure <br />
                Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSupport;
