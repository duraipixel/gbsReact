import React from "react";
import "../styles.scss";

const StoreBanner = () => {
  return (
    <section className="store-bg">
      <div className="container">
        <div className="row">
          <div className="store-text-overlay">
            <div className="comon-heads">
              <h2>Our Stores</h2>
            </div>
            <p>{`Home > Stores`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreBanner;
