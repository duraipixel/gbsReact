import './Product.scss'
import 'react-image-lightbox/style.css';
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductThumbnailSlider from './ProductThumbnailSlider';
import ProductCarousel from './ProductCarousel';
import ProductsFeaturesTabs from './ProductFeaturesMenu/ProductsFeaturesTabs';
import ProductInformation from './ProductInformation';

function ProductDetails({ product }) {
    const [productCarouselSliders, setProductCarouselSlider] = useState();
    const [navSlider, setNavSlider] = useState();
    const [photoIndex, setPhotoIndex] = useState(null);
    const images = product.gallery
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
                            <Col lg={9} className='px-0 mt-xxl-0 mt-3'>
                                <div className="position-relative">
                                    <span className="offer-badge">
                                        <div>
                                            {product.discount_percentage}% <span>OFF</span>
                                        </div>
                                    </span>
                                    <ProductCarousel
                                        setPhotoIndex={setPhotoIndex}
                                        photoIndex={photoIndex}
                                        images={images}
                                        navSlider={navSlider}
                                        action={setProductCarouselSlider}
                                    />
                                </div>
                            </Col>
                        </div>
                    </div>
                </Col>
                <Col xl={6}>
                    <ProductInformation product={product} />
                </Col>
            </Row>
            <ProductsFeaturesTabs product={product} />
        </div>
    )
}

export default ProductDetails