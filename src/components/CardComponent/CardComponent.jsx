import './CardComponent.scss'
import { useNavigate } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { Image } from 'utils'
import AddCartButton from 'components/AddCartButton'
import AddFavButton from 'components/AddFavButton'
import CompareButton from 'components/CompareButton'

function CardComponent({ product }) {
  const navigate = useNavigate()
  console.log(product)
  return (
    <div>
      <div className="arival-det" >
        <div className="ari-img" onClick={() => navigate(`/products/${product.product_url}`)}>
          <Image src={product.image} alt={product.product_name} />
          <div className="off-prc">
            <h3> {product.discount_percentage}% <br /> <span>OFF</span></h3>
          </div>
        </div>
        <div className="ari-cnt text-center">
          <div onClick={() => navigate(`/products/${product.product_url}`)}>
            <div className="d-flex justify-content-between" >
              <h2>{product.category_name}</h2>
              {
                product?.common_review?.rating ?
                  <h3><AiFillStar /> {product?.common_review?.rating}</h3>
                  : ''
              }
            </div>
            <h4>{product.product_name.substring(0, 25)}</h4>
            <h5>
              <span>₹8{product.strike_price.replace('.00', '')}</span> ₹{product.price.replace('.00', '')}
            </h5>
          </div>
          {/* <ul>
            <li>12th Gen Intel Core i5-1235U</li>
            <li>8GB, DDR4, 2666 MHz</li>
            <li>512GB SSD Storage</li>
            <li>Intel Integrated Graphics</li>
          </ul> */}
          <div className="d-flex justify-content-between">
            <div className="d-flex clk-optn">
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
}

export default CardComponent