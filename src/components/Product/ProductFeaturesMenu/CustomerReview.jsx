import { useDispatch, useSelector } from 'react-redux'
import RatingIcons from '../RatingIcons'
import { Rating } from "react-simple-star-rating"
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { AuthUser } from 'utils'
import { setLayoutStatus } from 'redux/features/authLayoutSlice'
import ReviewsList from './ReviewsList'

function CustomerReview({ product, is_review }) {
    const authUser = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const LoginAuth = () => {
        dispatch(setLayoutStatus({ status: true, type: 'login' }))
    }
    const { handleSubmit, reset, register, formState: { errors } } = useForm()
    const [rating, setRating] = useState(0)
    const [disableRateingBox, setDisableRateingBox] = useState(is_review)
    const handleRating = (comments) => {
        if (product.has_purchased === false) {
            toast.error('You need to purchase this product !')
            return false
        }
        if (rating === 0) {
            toast.error('Star Rating is Required!')
            return false
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/add/customer/reviews`, {
            customer_id: AuthUser()?.id,
            product_id: product.id,
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
                                        product.has_purchased ?
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
                                            : "You need to purchase this product"
                                        : "Review submitted"
                                }
                            </div>
                            :
                            <div className='d-flex align-items-center fw-500'>
                                <button className='btn btn-link text-info px-1 fw-500' onClick={LoginAuth}> Sign In </button> <span>to Post a Review</span>
                            </div>
                    }
                </div>
                <div className="vr p-0"></div>
                <div className="col-lg-7 ps-lg-5">
                    <ReviewsList product_id={product.id} />
                </div>
            </div>
        </div>
    )
}

export default CustomerReview