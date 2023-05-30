/* eslint-disable react-hooks/exhaustive-deps */
import { productReviewApi } from 'services/product.service'
import RatingIcons from '../RatingIcons'
import { useState } from 'react'
import { useMemo } from 'react'

function ReviewsList({ product_id }) {
    const [reviews, setReviews] = useState([])
    const [take, setTake] = useState(4)
    const [totalRating, setTotalRating] = useState(0)
    const fetchReviews = async () => {
        const { data } = await productReviewApi({
            product_id: product_id,
            take: take
        })
        setReviews(data.reviews)
        setTotalRating(data.total)
    }
    useMemo(() => fetchReviews() , [product_id,take])
    return (
        <>
            <h5 className="fs-20 mb-4">Top Reviews ({totalRating} ratings)</h5>
            {
                reviews.length > 0 ?
                    <div>
                        {
                            reviews.map((review) => (
                                <div key={review.id} className="d-md-flex mb-3">
                                    <div>
                                        <img width={45} className='rounded-circle' src={`https://ui-avatars.com/api/?name=${review.customer.first_name}&background=random`} alt="review-avatar" />
                                    </div>
                                    <div className="ps-md-3">
                                        <h6 className="fw-500 fs-18 m-0 lh-1">Carol Barrett</h6>
                                        <div className="d-flex align-items-end">
                                            <RatingIcons size={12} value={review.star} />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mx-2 mb-2'>
                                                <circle cx="2" cy="2" r="2" fill="black" />
                                            </svg>
                                            <small>{review.created_at}</small>
                                        </div>
                                        <p className='mt-2'>{review.comments}</p>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            totalRating > reviews.length ?
                                <div className="text-center">
                                    <button onClick={() => setTake(take + 4)} className='btn btn-link fs-18'> Read more reviews </button>
                                </div>
                                : ""
                        }
                    </div>
                    : ""
            }

        </>
    )
}

export default ReviewsList