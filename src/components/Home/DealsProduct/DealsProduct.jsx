import React from "react";
import "./styles.css";
import poster1 from "assets/images/Deals/Rectangle 187.png";
import poster2 from "assets/images/Deals/Rectangle 188.png";
import poster3 from "assets/images/Deals/Rectangle 189.png";
import poster4 from "assets/images/Deals/Rectangle 190.png";

const DealsProduct = () => {
  return (
    <>
      <section className="deals-we-have text-center pb-0">
        <div className="container">
          <div className="row justify-content-center g-0">
            <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="comon-heads">
                    <h2>Deals you Might Want to Consider</h2>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="deals-imgs">
                    <img src={poster1} alt="" className="img-fluid" />
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="deals-imgs">
                    <img src={poster2} alt="" className="img-fluid" />
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="deals-imgs">
                    <img src={poster3} alt="" className="img-fluid" />
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="deals-imgs">
                    <img src={poster4} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealsProduct;
