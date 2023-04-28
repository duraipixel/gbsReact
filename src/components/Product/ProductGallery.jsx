import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Image } from "utils";
export default function ProductGallery({ images }) {
    const produtcCollection = []
    images.map((item) => (
        produtcCollection.push({
            original: item,
            thumbnail: item
        })
    ))
    return (
        <div className="mx-3">
            <ReactImageGallery
                thumbnailPosition={window.innerWidth > 769 ? 'left' : 'bottom'}
                items={produtcCollection}
                loading="lazy"
                autoPlay={true}
                showPlayButton={true}
                showFullscreenButton={window.innerWidth > 400 ? true : false}
            />
        </div>
    )
}