import { useState } from 'react'
import 'react-image-lightbox/style.css';
import { Col, Row } from 'react-bootstrap';
import './Product.scss'
import ProductInfo from './ProductInfo';
import ProductThumbnailSlider from './ProductThumbnailSlider';
import ProductCarousel from './ProductCarousel';

function ProductDetails() {
    const [productCarouselSliders, setProductCarouselSlider] = useState();
    const [navSlider, setNavSlider] = useState();
    const [photoIndex, setPhotoIndex] = useState(null);

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
        <div className='py-lg-3 h-100'>
            <Row className='h-100 '>
                <Col xl={6}>
                    <div class="sticky-top">
                        <div className='row align-items-center product-row'>
                            <div className='product-thumbnail-column col-lg-2'>
                                <ProductThumbnailSlider
                                    images={images}
                                    parentSlider={productCarouselSliders}
                                    action={setNavSlider}
                                />
                            </div>
                            <Col lg={9} className='px-xxl-3 mt-xxl-0 mt-3'>
                                <ProductCarousel
                                    setPhotoIndex={setPhotoIndex}
                                    photoIndex={photoIndex}
                                    images={images}
                                    navSlider={navSlider}
                                    action={setProductCarouselSlider}
                                />
                            </Col>
                        </div>
                    </div>
                </Col>
                <Col xl={6}>
                    <ProductInfo />
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetails