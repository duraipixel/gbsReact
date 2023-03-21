import React from "react";
import "./styles.css";
import poster1 from "assets/images/BrowseByPrice/Frame20.png";
import poster2 from "assets/images/BrowseByPrice/Frame21.png";
import poster3 from "assets/images/BrowseByPrice/Frame22.png";
import poster4 from "assets/images/BrowseByPrice/Frame23.png";

const BrowseByPrice = () => {
  return (
    <>
    {/* <div className="browse-container flex-d-clm-align-c ">
      <h1>Browse by Price</h1>
      <div className="browse-img-div">
        <img src={poster1} alt="" className='img-fluid' />
        <img src={poster2} alt="" className='img-fluid' />
        <img src={poster3} alt="" className='img-fluid' />
        <img src={poster4} alt="" className='img-fluid' />
      </div>
    </div> */}

    <section className="browse-price text-center">
    <div className="container"> 
    <div className="row">

    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="comon-heads">
    <h2>Browse by Price</h2>
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster1} alt="" className='img-fluid' /> 
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster3} alt="" className='img-fluid' /> 
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster2} alt="" className='img-fluid' /> 
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster4} alt="" className='img-fluid' /> 
    </div>
    </div>

    </div>
    </div> 
    </section>

</>
  );
};

export default BrowseByPrice;
