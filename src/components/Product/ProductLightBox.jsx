import { useState } from 'react'
import Slider from 'react-slick';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import { Col, Row } from 'react-bootstrap';
import './Product.scss'

function ProductLightBox() {
    const [productSliders, setProductSlider] = useState();
    const [navslider, setNavSlider] = useState();
    const [photoIndex, setPhotoIndex] = useState(null);
    document.querySelector("html").style.overflow = photoIndex !== null ? 'hidden' : 'auto'
    const images = [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
    ]
    return (
        <div className='py-lg-3'>
            <Row>
                <Col xl={6}>
                    <div className='d-xxl-flex d-flex flex-column-reverse flex-xxl-row'>
                        <div className='product-thumbnail-column  py-3 py-xxl-0'>
                            <Slider className='product-thumbnail-slider' responsive={[
                                {
                                    breakpoint: 1367,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                        vertical: false,
                                    }
                                },
                                {
                                    breakpoint: 600,
                                    settings: {
                                        slidesToShow: 3,
                                        vertical: false,
                                    }
                                }
                            ]} arrows={false} asNavFor={productSliders} vertical={true} verticalSwiping={true} infinite={true} slidesToShow={5} focusOnSelect={true} ref={(slider) => setNavSlider(slider)} >
                                {images.map((item, i) => (
                                    <div className='product-thumbnail-image-wrapper'>
                                        <img src={item} alt="thumbnail" className='product-thumbnail-image' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <Col lg={10} className='px-xxl-3 mt-xxl-0 mt-3'>
                            <Slider arrows={false} asNavFor={navslider} ref={(slider) => setProductSlider(slider)} >
                                {images.map((item, i) => (
                                    <div className='product-carousel-image-wrapper'>
                                        <img onClick={e => setPhotoIndex(1)} src={item} alt="product-carousel-image" className='product-carousel-image' />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </div>
                </Col>
                <Col xl={6}>
                    <h1 className='product-section-title'>Acer Nitro 5 Gaming Laptop - Black</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quo porro optio, quod modi veniam, ratione consectetur odit doloremque labore quidem! Ducimus enim, incidunt iste natus numquam deleniti aperiam at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos aliquam molestiae nam porro voluptas? Quam numquam, libero, quia soluta laborum reprehenderit maiores minima totam sunt nemo, neque cum velit!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quo porro optio, quod modi veniam, ratione consectetur odit doloremque labore quidem! Ducimus enim, incidunt iste natus numquam deleniti aperiam at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos aliquam molestiae nam porro voluptas? Quam numquam, libero, quia soluta laborum reprehenderit maiores minima totam sunt nemo, neque cum velit!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quo porro optio, quod modi veniam, ratione consectetur odit doloremque labore quidem! Ducimus enim, incidunt iste natus numquam deleniti aperiam at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos aliquam molestiae nam porro voluptas? Quam numquam, libero, quia soluta laborum reprehenderit maiores minima totam sunt nemo, neque cum velit!</p>
                </Col>
            </Row>

            {
                photoIndex !== null &&
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
            }
        </div>
    )
}

export default ProductLightBox