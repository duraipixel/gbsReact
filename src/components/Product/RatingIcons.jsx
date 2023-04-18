import { Rating } from "react-simple-star-rating"

function RatingIcons({ value, size }) {
    return (
        <Rating
            initialValue={value}
            fillIcon={<img src={require('../../assets/icons/star-yellow.png')} width={size} alt="star" className="me-2" />}
            emptyIcon={<img src={require('../../assets/icons/star-gray.png')} width={size} alt="star" className="me-2" />}
            fillColor="#FFB661"
            allowFraction
            readonly
            transition
        />
    )
}

export default RatingIcons