import Slider from 'react-slick'

function ProductThumbnailSlider({ parentSlider, action, images }) {
    return (
        <Slider className='product-thumbnail-slider' responsive={[
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    vertical: true,
                }
            },
            {
                breakpoint:769,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                }
            }
        ]} arrows={false} asNavFor={parentSlider} vertical={true} verticalSwiping={true} infinite={true} slidesToShow={5} focusOnSelect={true} ref={(slider) => action(slider)} >
            {images.map((item, i) => (
                <div className='product-thumbnail-image-wrapper' key={i}>
                    <img src={item} alt="thumbnail" className='product-thumbnail-image' />
                </div>
            ))}
        </Slider>
    )
}

export default ProductThumbnailSlider