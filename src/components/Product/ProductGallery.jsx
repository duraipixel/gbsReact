import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import { Image } from "utils";
export default function ProductGallery({ images }) {
  const produtcCollection = [];
  //   console.log(!Array.isArray(images))
  if (!Array.isArray(images)) {
    produtcCollection.push({
      original: images,
      thumbnail: images,
    });
  } else {
    images &&
      images.map((item) =>
        produtcCollection.push({
          original: item,
          thumbnail: item,
        })
      );
  }
  return (
    <div className="mt-2 react-image-gallery-div">
      <ReactImageGallery
        thumbnailPosition={window.innerWidth > 769 ? "left" : "bottom"}
        items={produtcCollection && produtcCollection}
        loading="lazy"
        autoPlay={true}
        showPlayButton={true}
        showFullscreenButton={window.innerWidth > 400 ? true : false}
      />
    </div>
  );
}
