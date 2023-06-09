import { Image } from 'utils'
import { Rating } from '@mui/material'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import AddCartButton from 'components/AddCartButton'
import AddFavButton from 'components/AddFavButton'
import CompareButton from 'components/CompareButton'
import './CardComponent.scss'

function CardComponent({ product, type, className }) {
  const navigate = useNavigate()
  if (type === 'list' && window.innerWidth > 450) return (
    <div className={className}>
      <div className='product-card overflow-hidden'>
        <div className="row m-0" >
          <div className="col-lg-4 pt-3" >
            <div className="position-relative text-center pb-3">
              <span onClick={() => navigate(`/products/${product.product_url}`)}>
              <Image src={product.image}  alt={product.product_name} className="product-list-image" />
              </span>
              <CompareButton buttonType="icon" className="btn btn-outline-info ms-2 border-secondary btn-sm" product={product} />
              <div className="off-prc">
                <h3> {product.discount_percentage}% <br /> <span>OFF</span></h3>
              </div>
            </div>
          </div>
          <div className="ari-cnt text-start w-100 bg-white col-lg">
            <div className="cursor" onClick={() => navigate(`/products/${product.product_url}`)}>
              <div className="d-flex justify-content-between" >
                <h2 className='text-start'>{product.category_name}</h2>
                {
                  product?.common_review?.rating ?
                    <h3><AiFillStar /> {product?.common_review?.rating}</h3>
                    : ''
                }
              </div>
              <h3 className='h3 text-start'>{product.product_name}</h3>
              <h4 className="h5">
                <i className='old-price'>₹{product.strike_price.replace('.00', '')}</i>
                <span className="new-price text-info fw-bold">₹{product.price.replace('.00', '')}</span>
                <div className="text-info fs-6">You Save (₹ {product.save_price}) </div>
              </h4>
            </div>
            <div className="d-flex align-items-center clk-optn">
              <AddFavButton buttonType="icon" className="btn btn-outline-info rounded-box-circle rounded-box-sm" product={product} />
              <AddCartButton type='button' className="btn btn-primary ms-2" product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  if (window.innerWidth > 450 && type === undefined) return (
    <div className='product-card'>
      <div className="arival-det" >
        <div className="ari-img cursor" onClick={() => navigate(`/products/${product.product_url}`)}>
          <Image src={product.image} alt={product.product_name} />
          <div className="off-prc">
            <h3> {product.discount_percentage}% <br /> <span>OFF</span></h3>
          </div>
        </div>
        <div className="ari-cnt text-center">
          <div className="cursor" onClick={() => navigate(`/products/${product.product_url}`)}>
            <div className="d-flex justify-content-between" >
              <h2>{product.category_name}</h2>
              {
                product?.common_review?.rating ?
                  <h3><AiFillStar /> {product?.common_review?.rating}</h3>
                  : ''
              }
            </div>
            <h3 className='product-name h3'>{product.product_name.substring(0, 50)}</h3>
            <h4 className='h4'>
              <span className='old-price'>₹{product.strike_price.replace('.00', '')}</span>
              <span className="new-price">₹{product.price.replace('.00', '')}</span>
            </h4>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-center clk-optn">
              <AddFavButton buttonType="icon" className="btn btn-outline-info me-1 rounded-box-circle rounded-box-sm" product={product} />
              <CompareButton buttonType="icon" className="btn btn-outline-info me-1 rounded-box-circle rounded-box-sm" product={product} />
            </div>
            <div>
              <AddCartButton type='button' className="btn btn-primary" product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  if (window.innerWidth < 450) return (
    <div className={className}>
      <div className="product-card-sm shadow" onClick={() => navigate(`/products/${product.product_url}`)}>
        <AddFavButton buttonType="icon" className="btn-fav" product={product} />
        <Image src={product.image} alt={product.product_name} className="product-card-image-sm" />
        <div className="product-info" >
          <h3 className='product-name'>{product.product_name.substring(0, 30)}...</h3>
          <hr className='my-1' />
          <div className="small">You Save (₹ {product.save_price}) </div>
          <div className="product-prices">
            <span className="new-price">₹{product.price.replace('.00', '')}</span>
            <span className='old-price'>₹{product.strike_price.replace('.00', '')}</span>
          </div>
          {product?.common_review?.rating ? <Rating name="read-only" value={product?.common_review?.rating} readOnly size="small" /> : ''}
        </div>
      </div>
    </div>
  )
}

export default CardComponent