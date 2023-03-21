import React from "react";
import "./styles.css";
import poster1 from "assets/images/Categories/Rectangle87.png";
import poster2 from "assets/images/Categories/Rectangle88.png";
import poster3 from "assets/images/Categories/Rectangle89.png";
import poster4 from "assets/images/Categories/Rectangle90.png";

const CategoriesPoster = () => {
  return (
    <>  
    {/* // <div className="flex-d-clm-align-c categories-container">
    //   <h1 className="sub-heading">Get the Right Laptop Based on Your Use</h1>
    //   <div className="categories-img-div">
    //     <img src={poster1} alt="" />
    //     <img src={poster2} alt="" />
    //     <img src={poster3} alt="" />
    //     <img src={poster4} alt="" />
    //   </div>
    // </div> */}

<section className="laptop-based text-center">
    <div className="container"> 
    <div className="row">

    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <div className="comon-heads">
    <h2>Get the Right Laptop Based on Your Use</h2>
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster1} alt="" className='img-fluid' />
    <div className="btm-liner">
    <h4>For Casual & Everyday Use</h4>
    </div>
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster3} alt="" className='img-fluid' />
    <div className="btm-liner">
    <h4>For Business Use</h4>
    </div>
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster2} alt="" className='img-fluid' />
    <div className="btm-liner">
    <h4>For Content Creators</h4>
    </div>
    </div>
    </div>

    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="deals-imgs">
    <img src={poster4} alt="" className='img-fluid' />
    <div className="btm-liner">
    <h4>For Gaming</h4>
    </div>
    </div>
    </div>

    </div>
    </div> 
    </section>

    </>
  );
};

export default CategoriesPoster;
