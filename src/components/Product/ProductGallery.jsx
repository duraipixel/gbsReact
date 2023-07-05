import ReactImageGallery from "react-image-gallery";
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
    // console.log(videos);
    videos.map((video) => {
      produtcCollection.push({
        embedUrl: video.video_link,
        thumbnail: video.thumbnail,
        renderItem: renderVideo.bind(this),
      });
    });
  }
  if (produtcCollection.length)
    return (
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
    );
}
