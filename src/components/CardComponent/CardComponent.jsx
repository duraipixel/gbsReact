import { BiGitCompare } from 'react-icons/bi'
import './CardComponent.scss'
import { Link, useNavigate } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { Image } from 'utils'

function CardComponent({ product }) {
  const navigate = useNavigate() 
  return (
    <div>
      <div className="arival-det" >
        <div className="ari-img" onClick={() => navigate(`/product-list/${product.product_url}`)}>
          <Image src={product.thumbnail} alt={product.product_name} />
          <div className="off-prc">
            <h3> 30% <span>OFF</span></h3>
          </div>
        </div>
        <div className="ari-cnt text-center">
          <div className="d-flex justify-content-between" onClick={() => navigate(`/product-list/${product.product_url}`)}>
            <h2>{product.product}</h2>
            <h3>
              <AiFillStar /> 4.5
            </h3>
          </div>
          <h4>{product.product_name.substring(0, 25)}</h4>
          <h5>
            <span>₹8{product.strike_price.replace('.00', '')}</span> ₹{product.price.replace('.00', '')}
          </h5>
          {/* <ul>
            <li>12th Gen Intel Core i5-1235U</li>
            <li>8GB, DDR4, 2666 MHz</li>
            <li>512GB SSD Storage</li>
            <li>Intel Integrated Graphics</li>
          </ul> */}
          <div className="d-flex justify-content-between">
            <div className="clk-optn">
              <Link to="">
                <FiHeart />{" "}
              </Link>
              <Link to="">
                <BiGitCompare />
              </Link>
            </div>
            <div>
              <Link className="red-bg-btn" to="">
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent