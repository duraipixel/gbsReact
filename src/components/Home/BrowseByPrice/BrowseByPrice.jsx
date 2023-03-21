import React from "react";
import "./styles.css";
import poster1 from "assets/images/BrowseByPrice/Frame20.png";
import poster2 from "assets/images/BrowseByPrice/Frame21.png";
import poster3 from "assets/images/BrowseByPrice/Frame22.png";
import poster4 from "assets/images/BrowseByPrice/Frame23.png";

const BrowseByPrice = () => {
  return (
    <div className="browse-container flex-d-clm-align-c ">
      <h1>Browse by Price</h1>
      <div className="browse-img-div">
        <img src={poster1} alt="" className='img-fluid' />
        <img src={poster2} alt="" className='img-fluid' />
        <img src={poster3} alt="" className='img-fluid' />
        <img src={poster4} alt="" className='img-fluid' />
      </div>
    </div>
  );
};

export default BrowseByPrice;
