import ReactImageGallery from "react-image-gallery";
import Slider from "react-slick";
import { Image } from "utils";
import 'react-image-lightbox/style.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "react-image-gallery/styles/css/image-gallery.css";


export default function ProductGallery({ images, videos }) {
  const renderVideo = (item) => {
    return (
      <div className="video-wrapper">
        <iframe
          width="500"
          height="480px"
          src={item.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="ex"
        />
      </div>
    );
  };
  const produtcCollection = [];
  if (!Array.isArray(images)) {
    produtcCollection.push({
      original: images,
      thumbnail: images,
      originalHeight: "450px",
      loading: "lazy",
      thumbnailLoading: "lazy",
      thumbnailHeight: "76px",
      thumbnailWidth: "76px",
      originalAlt: "product image",
      thumbnailAlt: "thumbnail image",
    });
  } else {
    images &&
      images.map((item) =>
        produtcCollection.push({
          original: item,
          thumbnail: item,
          originalHeight: "450px",
          loading: "lazy",
          thumbnailLoading: "lazy",
          thumbnailHeight: "76px",
          thumbnailWidth: "76px",
          originalAlt: "product image",
          thumbnailAlt: "thumbnail image",
        })
      );
  }
  if (videos.length) {
    videos.forEach((video) => {
      produtcCollection.push({
        embedUrl: video.video_link,
        thumbnail: video.thumbnail,
        renderItem: renderVideo.bind(this),
      });
    });
  }
  if (produtcCollection.length && window.innerWidth > 992) {
    return (
      <div className="mt-2 react-image-gallery-div">
        <ReactImageGallery
          slideInterval="4000"
          thumbnailPosition={window.innerWidth > 769 ? "left" : "bottom"}
          items={produtcCollection}
          loading="lazy"
          lazyLoad={true}
          showPlayButton={false}
          showNav={true}
          showFullscreenButton={true}
          renderVideo={true}
        />
      </div>
    );
  }
  return <MobileImageGallery images={images} />
}

const MobileImageGallery = ({ images }) => {
  Fancybox.bind('[data-fancybox="mobile-gallery"]');
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <Image src={images[i]} width="35" height="35" />
        </div>
      );
    },
    dots: true,
    dotsClass: "custom-paging-dots",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <Slider {...settings}>
      {images.map((item, index) => (
        <a href={item} data-fancybox="mobile-gallery" key={index} className="d-block">
          <Image src={item} width="100%" className="product-mobile-image" />
        </a>
      ))}
    </Slider>
  )
} 