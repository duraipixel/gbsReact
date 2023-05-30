import React from "react";

function Counters() {
  return (
    <div>
      <section className="counter-lists">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="counters-details text-center">
                <ul>
                  <li>
                    <h4>
                      28<span>+</span>
                    </h4>
                    <h5>Years of Experience</h5>
                  </li>
                  <li>
                    <h4>24</h4>
                    <h5>Exclusive Stores</h5>
                  </li>
                  <li>
                    <h4>
                      3 Lakh<span>+</span>
                    </h4>
                    <h5>Happy Customers</h5>
                  </li>
                  <li>
                    <h4>23</h4>
                    <h5>Service Centers</h5>
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

export default Counters;
