import "./styles.css";
import { Placeholder } from "react-bootstrap";
import BannerSlider from "./BannerSlider";
import { Link } from "react-router-dom";
import { Image } from "utils";
import { useSelector } from "react-redux";

const HomeProductsSlider = () => {
  const banners = useSelector(state => state.homePageCollection.banners)
  if (banners)
    return (
      <BannerSlider>
        {banners.map((item) => (
          <Link to={item.links} key={item.id} >
            <Image alt="banner" className="banner-image" src={window.innerWidth < 992 ? item.mobile_banner : item.image} />
          </Link>
        ))}
      </BannerSlider>
    );
  if (!banners)
    return (
      <Placeholder as="p" animation="glow">
        <Placeholder bg="dark" style={{ height: 380 }} xs={12} />
      </Placeholder>
    );
};

export default HomeProductsSlider;
