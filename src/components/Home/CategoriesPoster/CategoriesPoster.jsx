import React from "react";
import "./styles.css";
import poster1 from "assets/images/Categories/Rectangle87.png";
import poster2 from "assets/images/Categories/Rectangle88.png";
import poster3 from "assets/images/Categories/Rectangle89.png";
import poster4 from "assets/images/Categories/Rectangle90.png";

const CategoriesPoster = () => {
  return (
    <div className="flex-d-clm-align-c categories-container">
      <h1 className="sub-heading">Get the Right Laptop Based on Your Use</h1>
      <div className="categories-img-div">
        <img src={poster1} alt="" />
        <img src={poster2} alt="" />
        <img src={poster3} alt="" />
        <img src={poster4} alt="" />
      </div>
    </div>
  );
};

export default CategoriesPoster;
