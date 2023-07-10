import "./styles.scss";
import { Placeholder } from "react-bootstrap";
import BannerSlider from "./BannerSlider";
import { Image } from "utils";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeProductsSlider = () => {
  const banners = useSelector((state) => state.homePageCollection.banners);
  if (banners)
    return (
      <BannerSlider>
        {banners.map((item) => (
          <Link className="cursor d-block" to={item.links}  key={item.id}>
            <Image
              alt={item.title}
              className="w-100"
              src={window.innerWidth < 768 ? item.mobile_banner : item.image}
              style={{ minHeight: window.innerWidth < 768 ? 370 : 'auto'}}
            />
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
