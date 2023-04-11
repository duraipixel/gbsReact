import Slider from "react-slick";
import "./styles.css";
import { Link } from "react-router-dom";
import { useBannersQuery } from "redux/features/banners/bannerService";

const HomeProductsSlider = () => {
  const { data, isSuccess, isLoading  } =  useBannersQuery()
 
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad:'progressive'
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={require('assets/images/HomeProductsPoster/Poster1.png')} alt="" className="img-fluid w-100 poster-image" />
        <div className="container">
          <div className="poster-content">
            <h1>Push Performance to New Heights with ROG Strix Scar 16</h1>
            <p>
              Up to Intel Core i9-13980HX | Up to GeForce RTX 4090 | Up to 64GB
              DDR5 RAM
            </p>
            <h4>Starting From ₹82,000</h4>
            <Link to="/product-list" className="btn btn-cta">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src={require('assets/images/HomeProductsPoster/Poster1.png')} alt="" className="img-fluid w-100" />
        <div className="container">
          <div className="poster-content">
            <h1>Push Performance to New Heights with ROG Strix Scar 16</h1>
            <p>
              Up to Intel Core i9-13980HX | Up to GeForce RTX 4090 | Up to 64GB
              DDR5 RAM
            </p>
            <h4>Starting From ₹82,000</h4>
            <Link to="/product-list" className="btn btn-cta">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src={require('assets/images/HomeProductsPoster/Poster1.png')} alt="" className="img-fluid w-100" />
        <div className="container">
          <div className="poster-content">
            <h1>Push Performance to New Heights with ROG Strix Scar 16</h1>
            <p>
              Up to Intel Core i9-13980HX | Up to GeForce RTX 4090 | Up to 64GB
              DDR5 RAM
            </p>
            <h4>Starting From ₹82,000</h4>
            <Link to="/product-list" className="btn btn-cta">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src={require('assets/images/HomeProductsPoster/Poster1.png')} alt="" className="img-fluid w-100" />
        <div className="container">
          <div className="poster-content">
            <h1>Push Performance to New Heights with ROG Strix Scar 16</h1>
            <p>
              Up to Intel Core i9-13980HX <span> | </span> Up to GeForce RTX
              4090 <span> | </span> Up to 64GB DDR5 RAM
            </p>
            <h4>
              Starting From <b>₹82,000</b>
            </h4>
            <Link to="/product-list" className="btn btn-cta">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HomeProductsSlider;