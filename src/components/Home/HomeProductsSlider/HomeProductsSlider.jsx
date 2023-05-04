import "./styles.scss";
import { Placeholder } from "react-bootstrap";
import BannerSlider from "./BannerSlider";
import { Image } from "utils";
import { useSelector } from "react-redux";

const HomeProductsSlider = () => {
  const banners = useSelector(state => state.homePageCollection.banners)
  if (banners) return (
    <BannerSlider>
      {banners.map((item) => (
        <Image key={item.id} alt={item.title} className="w-100" src={window.innerWidth < 768 ? item.mobile_banner : item.image} />
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
