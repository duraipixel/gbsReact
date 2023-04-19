import './Product.scss' 
import 'react-image-lightbox/style.css';
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductThumbnailSlider from './ProductThumbnailSlider';
import ProductCarousel from './ProductCarousel';
import ProductsFeaturesTabs from './ProductFeaturesMenu/ProductsFeaturesTabs';
import ProductInformation from './ProductInformation';

function ProductDetails() {
    const [productCarouselSliders, setProductCarouselSlider] = useState();
    const [navSlider, setNavSlider] = useState();
    const [photoIndex, setPhotoIndex] = useState(null);

    const images = [
        require('../../assets/images/products/p (6).png'),
        require('../../assets/images/products/p (2).png'),
        require('../../assets/images/products/p (3).png'),
        require('../../assets/images/products/p (4).png'),
        require('../../assets/images/products/p (5).png'),
    ]
    return (
        <div className='py-lg-3 h-100'>
            <Row className='h-100 '>
                <Col xl={6}>
                    <div className="sticky-top pt-lg-4">
                        <div className='row product-row'>
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
                    <ProductInformation />
                </Col>
            </Row>
            <ProductsFeaturesTabs />
        </div>
    )
}

export default ProductDetails