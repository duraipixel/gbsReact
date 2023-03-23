import React from "react";
import "./styles.css"; 

const ServiceCenter = () => {
  return (
    <>

    <section className="ran-trouble text-center">
    <div className="container">
    <div className="row">

    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="comon-heads">
    <h2>Your PC Ran into Trouble?</h2>
    </div>
    </div>

    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="details-locations">
    <span>Don't worry, the experts at GBS Services can help you fix issues <br />
    with your PC in no time</span>
    <h4>23 Service Centers Across South India</h4>
    <ul>
    <li>Chennai</li>
    <li>Madurai</li>
    <li>Trichy</li>
    <li>Coimbatore</li>
    <li>Bangalore</li>
    </ul>
    <a href="">Find Your Nearest GBS After Sales Service Center</a>
    </div>
    </div>

    </div>
    </div>
    </section>
      
    </>
  );
};

export default ServiceCenter;
