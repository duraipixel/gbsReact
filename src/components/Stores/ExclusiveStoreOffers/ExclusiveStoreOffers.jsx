import React from "react";
import "../styles.scss";
import Slider from "react-slick";
import Offer1 from "assets/images/Stores/offer1.png";
import Offer2 from "assets/images/Stores/offer2.png";
import Offer3 from "assets/images/Stores/offer3.png";
import Offer4 from "assets/images/Stores/offer4.png";
import { Col, Container, Row } from "react-bootstrap";

const ExclusiveStoreOffers = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="offers-slider text-center ">
      <Container>
        <Row className="pb-5">
          <Col lg={12} className="justify-content-center">
            <div className="comon-heads">
              <h2>Exclusive Store Offers</h2>
            </div>
          </Col>

          <Col lg={12} className="justify-content-center">
            <div className="brands-list-slider">
              <Slider {...settings}>
                <div className="offer-sliders-imgs">
                  <img src={Offer1} alt="" className="img-fluid poster-image" />
                  <p>Up to 30%* Discount on All Laptops & Desktops</p>
                </div>

                <div className="offer-sliders-imgs">
                  <img src={Offer2} alt="" className="img-fluid poster-image" />
                  <p>Special Cashback Up to ₹10,000</p>
                </div>

                <div className="offer-sliders-imgs">
                  <img src={Offer3} alt="" className="img-fluid poster-image" />
                  <p>Laptop Exchange Value upto ₹20,000</p>
                </div>

                <div className="offer-sliders-imgs">
                  <img src={Offer4} alt="" className="img-fluid poster-image" />
                  <p>No Cost EMI on all major Debit & Credit Cards</p>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExclusiveStoreOffers;
