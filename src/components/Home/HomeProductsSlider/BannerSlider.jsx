import Slider from "react-slick";

function BannerSlider({children}) {
    var settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipe: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive'
    };
    return (
        <Slider {...settings} className="bg-dark banner-slider">
            {children}
        </Slider>
    )
}

export default BannerSlider