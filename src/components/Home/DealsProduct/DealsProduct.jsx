import React from "react";
import "./styles.css";
import poster1 from "assets/images/Deals/Rectangle 187.png";
import poster2 from "assets/images/Deals/Rectangle 188.png";
import poster3 from "assets/images/Deals/Rectangle 189.png";
import poster4 from "assets/images/Deals/Rectangle 190.png";

const DealsProduct = () => {
  return (
    <div className="flex-d-clm-align-c dealsContainer-div">
      <h1 className="sub-heading">Deals you Might Want to Consider</h1>
      <div className="deals-poster-div container">
        <img src={poster1} alt="" className='img-fluid' />
        <img src={poster2} alt="" className='img-fluid' />
        <img src={poster3} alt="" className='img-fluid' />
        <img src={poster4} alt="" className='img-fluid' />
      </div>
    </div>
  );
};

export default DealsProduct;
