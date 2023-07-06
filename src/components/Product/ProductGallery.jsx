import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "react-slick";
import { Image } from "utils";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useState } from "react";

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
      <>
        <div className="mt-2 react-image-gallery-div">
          <ReactImageGallery
            slideInterval="4000"
            thumbnailPosition={window.innerWidth > 769 ? "left" : "bottom"}
            items={produtcCollection}
            loading="lazy"
            lazyLoad={true}
            showPlayButton={false}
            showNav={false}
            showFullscreenButton={false}
            renderVideo={true}
          />
        </div>
      </>
    );
  }
  return <MobileImageGallery images={images} />
}

const MobileImageGallery = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const settings = {
    customPaging: function (i) {
      return (
        <span>
          <Image src={images[i]} width="50" height="50" />
        </span>
      );
    },
    dots: true,
    dotsClass: "custom-paging-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} onClick={() => { setPhotoIndex(index); setIsOpen(!isOpen) }}>
            <Image src={item} width="100%" className="product-mobile-image" />
          </div>
        ))}
      </Slider>
      <LightBoxVew photoIndex={photoIndex} isOpen={isOpen} setPhotoIndex={setPhotoIndex} setIsOpen={setIsOpen} images={images} />
    </>
  )
}

const LightBoxVew = ({ images, photoIndex, isOpen, setPhotoIndex, setIsOpen }) => {
  if (isOpen) return (
    <Lightbox
      mainSrc={images[photoIndex]}
      onCloseRequest={() => setIsOpen(!isOpen)}
      nextSrc={images[(photoIndex + 1) % images.length]}
      prevSrc={images[(photoIndex + images.length - 1) % images.length]}
      onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
      onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
    />
  )
}