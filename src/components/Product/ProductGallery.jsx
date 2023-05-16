import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function ProductGallery({ images }) {
  const produtcCollection = [];
  if (!Array.isArray(images)) {
    produtcCollection.push({
      original: images,
      thumbnail: images,
      originalHeight: "450px",
      loading: "lazy",
      thumbnailLoading: "lazy",
      thumbnailHeight: "76px",
      thumbnailWidth : "76px",
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
          thumbnailWidth : "76px",
        })
      );
  }
 if(produtcCollection.length) return (
    <div className="mt-2 react-image-gallery-div">
      <ReactImageGallery
        slideInterval="4000"
        thumbnailPosition={window.innerWidth > 769 ? "left" : "bottom"}
        items={produtcCollection}
        loading="lazy"
        autoPlay={true}
        showPlayButton={true}
        showNav={false}
        showFullscreenButton={window.innerWidth > 400 ? true : false}
      />
    </div>
  );
}
