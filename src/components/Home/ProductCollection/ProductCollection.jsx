import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import Poster1 from "assets/images/arrivals/product-1.jpg";
import Poster2 from "assets/images/arrivals/product-2.jpg";
import Poster3 from "assets/images/arrivals/product-3.jpg";
import Poster4 from "assets/images/arrivals/product-4.jpg";
import Poster5 from "assets/images/arrivals/product-5.jpg";
import "./styles.css";
import { useSelector } from "react-redux";
import CardComponent from "components/CardComponent/CardComponent";

function ProductCollection() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const productCollections = useSelector(state => state.homePageCollection.productCollections)
  if (productCollections)
    return (
      productCollections.map((collection) => (
        <section className="new-arrivals" key={collection.id}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-between">
                <div className="comon-heads">
                  <h2>{collection.collection_name}</h2>
                </div>
                <div className="next-jump">
                  <Link to={`/product-list/${collection.collection_slug}`}>
                    View All <FiChevronRight />
                  </Link>
                </div>
              </div>

              <div className="arrival-slider">
                <Slider {...settings}>
                  {
                    collection.products.map((product, key) => (
                      <CardComponent product={product} key={key} /> 
                    ))
                  }
                </Slider>
              </div>
            </div>
          </div>
        </section>
      ))
    );
}

export default ProductCollection