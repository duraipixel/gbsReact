import icon1 from "assets/images/PackageSupport/icn-1.png";
import icon2 from "assets/images/PackageSupport/icn-2.png";
import icon3 from "assets/images/PackageSupport/icn-3.png";
import icon4 from "assets/images/PackageSupport/icn-4.png";
import "./styles.css";

const PackageSupport = () => {
  return (
    <div className="section-wrapper bg-light">
      <div className="container pt-3">
        <div className="row g-3 align-items-center">
          <div className="col-sm col-6 row g-0 align-items-center text-md-start text-center justify-content-center p-3">
            <div className="col-md-2 col-4 me-md-2">
              <img src={icon1} alt="24x7 Customer Support" style={{ width:'100%' }} /> 
            </div>
            <div className="col-md-9">24x7 Customer Support</div>
          </div>
          <div className="col-sm col-6 row g-0 align-items-center text-md-start text-center justify-content-center p-3">
            <div className="col-md-2 col-4 me-md-2">
              <img src={icon2} alt="Free Shipping" style={{ width:'100%' }}/>
            </div>
            <div className="col-md-9">Free Shipping</div>
          </div>
          <div className="col-sm col-6 row g-0 align-items-center text-md-start text-center justify-content-center p-3">
            <div className="col-md-2 col-4 me-md-2">
              <img src={icon3} alt="Flexible  Returns" style={{ width:'100%' }}/>
            </div>
            <div className="col-md-9">Flexible  Returns</div>
          </div>
          <div className="col-sm col-6 row g-0 align-items-center text-md-start text-center justify-content-center p-3">
            <div className="col-md-2 col-4 me-md-2">
              <img src={icon4} alt="Secure Payments" style={{ width:'100%' }}/>
            </div>
            <div className="col-md-9">Secure Payments</div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default PackageSupport;
