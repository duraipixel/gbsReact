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
        <div className='py-lg-3'>
            <Row>
                <Col xl={6}>
                    <div className='d-xxl-flex d-flex flex-column-reverse flex-xxl-row'>
                        <div className='product-thumbnail-column  py-3 py-xxl-0'>
                            <ProductThumbnailSlider
                                images={images}
                                parentSlider={productCarouselSliders}
                                action={setNavSlider}
                            />
                        </div>
                        <Col lg={10} className='px-xxl-3 mt-xxl-0 mt-3'>
                            <ProductCarousel
                                setPhotoIndex={setPhotoIndex}
                                photoIndex={photoIndex}
                                images={images}
                                navSlider={navSlider}
                                action={setProductCarouselSlider}
                            />
                        </Col>
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