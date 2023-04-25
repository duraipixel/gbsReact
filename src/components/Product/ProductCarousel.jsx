import { Fragment } from "react";
import Lightbox from "react-image-lightbox";
import Slider from "react-slick";

function ProductCarousel({
  navSlider,
  action,
  images,
  setPhotoIndex,
  photoIndex,
}) {
  document.querySelector("html").style.overflow = photoIndex !== null ? "hidden" : "auto";
  return (
    <Fragment>
      <Slider
        arrows={false}
        asNavFor={navSlider}
        ref={(slider) => action(slider)}
      >
        {images.map((item, i) => (
          <div key={i} className="product-carousel-image-wrapper"  onClick={(e) => setPhotoIndex(i)}>
            <img
              src={item}
              alt="product-carousel"
              className="product-carousel-image"
            />
          </div>
        ))}
      </Slider>
      {photoIndex !== null && (
        <Lightbox
          animationOnKeyInput={true}
          enableZoom={true}
          clickOutsideToClose={false}
          mainSrc={images[photoIndex]}
          nextSrc={images[photoIndex + 1]}
          prevSrc={images[photoIndex - 1]}
          onCloseRequest={() => setPhotoIndex(null)}
          onMovePrevRequest={() => setPhotoIndex(photoIndex - 1)}
          onMoveNextRequest={() => setPhotoIndex(photoIndex + 1)}
        />
      )}
    </Fragment>
  );
}

export default ProductCarousel;
