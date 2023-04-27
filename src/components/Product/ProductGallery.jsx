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
        <div>
            <ReactImageGallery
                thumbnailPosition={window.innerWidth > 769 ? 'left' : 'bottom'}
                useTranslate3D={true}
                items={produtcCollection}
                loading="lazy"
                autoPlay={true}
                useBrowserFullscreen={true}
                renderItem={(image) => <div><Image className="product-carousel-image" src={image.original} /></div> }
                renderThumbInner={(image) => <div><Image className="product-thumbnail-image" src={image.thumbnail} /></div> }
            />
        </div>
    )
}