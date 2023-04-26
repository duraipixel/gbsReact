import CardComponent from "components/CardComponent/CardComponent";
import Slider from "react-slick"

function ProductSlider({ products, children, slidesToShow}) {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipe: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow === undefined ? products.length > 3 ?  4 : 3 : slidesToShow,
        slidesToScroll: 1
    };
    if (products) return (
        <Slider {...settings}>
            {products.map((product, key) => (
                <CardComponent product={product} key={key} /> 
            ))}
        </Slider>
    )
    return <Slider {...settings}>{children}</Slider> 
}

export default ProductSlider