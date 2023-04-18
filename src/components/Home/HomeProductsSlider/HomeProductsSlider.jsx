import "./styles.css";
import { useBannersQuery } from "redux/features/banners/bannerService";
import { Placeholder } from "react-bootstrap";
import BannerSlider from "./BannerSlider";

const HomeProductsSlider = () => {
  const { data, isSuccess, isLoading } = useBannersQuery();
  if (isSuccess)
    return (
      <BannerSlider>
        {data.data.map((item) => (
          <div key={item.id} className="banner-overlay-wrapper">
            <img alt="banner" effect="blur" className="banner-image"  src={window.innerWidth < 992 ? item.mobile_banner : item.image}/>
            <div className="container">
              <div className="poster-content">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h4>Starting From ₹82,000</h4>
                <a target="_blank" href={item.links} className="btn btn-cta" rel="noreferrer">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </BannerSlider>
    );
  if (isLoading)
    return (
      <Placeholder as="p" animation="glow">
        <Placeholder bg="dark" style={{ height: 360 }} xs={12} />
      </Placeholder>
    );
};

export default HomeProductsSlider;
