import { useSelector } from 'react-redux'
import RatingIcons from '../RatingIcons'
import { Rating } from "react-simple-star-rating"
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { AuthUser } from 'utils'

function CustomerReview({ product_id, is_review }) {
    const authUser = useSelector((state) => state.auth)
    const { handleSubmit, reset, register, formState: { errors } } = useForm()
    const [rating, setRating] = useState(0)
    const [disableRateingBox, setDisableRateingBox] = useState(is_review)
    const handleRating = (comments) => {
        if (rating === 0) {
            toast.error('Star Rating is Required!')
            return false
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/add/customer/reviews`, {
            customer_id: AuthUser()?.id,
            product_id: product_id,
            star: rating,
            comments: comments['review']
        }).then((response) => {
            toast.success(response.data.message)
            reset()
            setDisableRateingBox(true)
        })
    }
    return (
        <div>
            <div className="row">
                <h1 className='product-section-title col-12 px-3'>Customer Reviews</h1>
                <div className="col-lg-4">
                    <div className="d-flex my-4 align-items-center px-2">
                        <RatingIcons size={30} value={4.9} />
                        <span className="fw-500 lead ms-2">4.9 of 5</span>
                    </div>
                    <h5 className="px-2 fs-20">Read Reviews that mention</h5>
                    <div className="d-flex flex-wrap mt-4">
                        <div className="badge bg-primary-light btn-sm mx-1 mb-2">Awesome</div>
                        <div className="badge bg-primary-light btn-sm mx-1 mb-2">Good Quality</div>
                        <div className="badge bg-primary-light btn-sm mx-1 mb-2">Nice</div>
                        <div className="badge bg-primary-light btn-sm mx-1 mb-2">Value for money</div>
                    </div>
                    <hr className='w-90' />
                    {
                        authUser.isLoggedIn ?
                            <div>
                                {
                                    disableRateingBox === false ?
                                        <Form onSubmit={handleSubmit(handleRating)}>
                                            <div className="mb-4">
                                                <h3 className='mb-3'>Your Rating</h3>
                                                <Rating
                                                    onClick={(rate) => setRating(rate)}
                                                    fillIcon={<img src={require('../../../assets/icons/star-yellow.png')} width={30} alt="star" className="me-2" />}
                                                    emptyIcon={<img src={require('../../../assets/icons/star-gray.png')} width={30} alt="star" className="me-2" />}
                                                    fillColor="#FFB661"
                                                    transition
                                                    showTooltip
                                                    tooltipArray={["Terrible", "Bad", "Average", "Great", "Awesome"]}
                                                />
                                            </div>
                                            <h3 className='mb-3'>Your Review</h3>
                                            <textarea name='review' {...register('review', { required: true, max: 255 })} placeholder='Enter Your Review Here' className={`form-control ${errors.review ? 'border-primary' : ''}`} cols="30" rows="10"></textarea>
                                            <button type='submit' className='btn btn-outline-primary mt-3'>Submit Review</button>
                                        </Form>
                                        : "Review submitted"
                                }
                            </div>
                            :
                            <div className='d-flex align-items-center fw-500'>
                                <button className='btn btn-link text-info px-1 fw-500'> Sign In </button> <span>to Post a Review</span>
                            </div>
                    }
                </div>
                <div className="vr p-0"></div>
                <div className="col-lg-7 ps-lg-5">
                    <h5 className="fs-20 mb-4">Top Reviews (965 ratings)</h5>
                    <div className="d-md-flex align-items-center mb-3">
                        <div>
                            <img src={require('../../../assets/images/users/user (1).png')} alt="" />
                        </div>
                        <div className="ps-md-3">
                            <h6 className="fw-500 fs-18 m-0 lh-1">Carol Barrett</h6>
                            <div className="d-flex align-items-end">
                                <RatingIcons size={12} value={4} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mx-2 mb-2'>
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg>
                                <small>11 Oct 2022</small>
                            </div>
                            <p className='mt-2'>I've been using the Acer Nitro 5 for gaming and I have to say, it's been a fantastic experience. The performance is top-notch and the graphics are incredibly smooth.</p>
                        </div>
                    </div>
                    <div className="d-md-flex align-items-center mb-3">
                        <div>
                            <img src={require('../../../assets/images/users/user (2).png')} alt="" />
                        </div>
                        <div className="ps-md-3">
                            <h6 className="fw-500 fs-18 m-0 lh-1">Raymond Norris</h6>
                            <div className="d-flex align-items-end">
                                <RatingIcons size={12} value={3.5} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mx-2 mb-2'>
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg>
                                <small>11 Oct 2022</small>
                            </div>
                            <p className='mt-2'>As someone who works with video and graphics, the Acer Nitro 5 has been a great investment for me. The colors are vivid and the screen is large enough to work comfortably for long periods of time</p>
                        </div>
                    </div>
                    <div className="d-md-flex align-items-center mb-3">
                        <div>
                            <img src={require('../../../assets/images/users/user (3).png')} alt="" />
                        </div>
                        <div className="ps-md-3">
                            <h6 className="fw-500 fs-18 m-0 lh-1">Carol Barrett</h6>
                            <div className="d-flex align-items-end">
                                <RatingIcons size={12} value={4} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mx-2 mb-2'>
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg>
                                <small>11 Oct 2022</small>
                            </div>
                            <p className='mt-2'>I was looking for a budget gaming laptop and the Acer Nitro 5 exceeded my expectations. The price point is unbeatable for the specs you get. It's lightweight and easy to carry around.</p>
                        </div>
                    </div>
                    <div className="d-md-flex align-items-center mb-3">
                        <div>
                            <img src={require('../../../assets/images/users/user (4).png')} alt="" />
                        </div>
                        <div className="ps-md-3">
                            <h6 className="fw-500 fs-18 m-0 lh-1">Bryan Alexander</h6>
                            <div className="d-flex align-items-end">
                                <RatingIcons size={12} value={2.5} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none" className='mx-2 mb-2'>
                                    <circle cx="2" cy="2" r="2" fill="black" />
                                </svg>
                                <small>11 Oct 2022</small>
                            </div>
                            <p className='mt-2'>Overall, I'm happy with my purchase of the Acer Nitro 5. It's a solid laptop that performs well for both work and play. The only downside is the fan noise, which can be a bit loud at times, but it's a minor issue compared to the benefits.</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className='btn btn-link fs-18'> Read all reviews </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview