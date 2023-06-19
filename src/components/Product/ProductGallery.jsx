import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function ProductGallery({ images }) {

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
  produtcCollection.push(
    {
      embedUrl: 'https://player.vimeo.com/video/822213540?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1',
      thumbnail: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0&rel=0',
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0&rel=0',
      thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
      renderItem: renderVideo.bind(this),
    },
    {
      embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0&rel=0',
      thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/4v.jpg',
      renderItem: renderVideo.bind(this),
    }
  )
 if(produtcCollection.length) return (
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
