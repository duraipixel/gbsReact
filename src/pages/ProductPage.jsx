/* eslint-disable react-hooks/exhaustive-deps */
import ProductBreadcrumb from "components/Product/ProductBreadcrumb"
import { Container } from "react-bootstrap"
import ProductDetails from "components/Product/ProductDetails"
import { useParams } from "react-router-dom"
import { useMemo } from "react"
import axios from "axios"
import { useState } from "react"
import { Loader } from '../utils/index'
import { Helmet } from "react-helmet"
function ProductPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState([])
  const getProduct = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/get/products/by/slug/${slug}`)
    setProduct(data)
  }
  useMemo(() => {
    getProduct()
  }, [slug])
  return (
    <div className="bg-light py-3">
      <Container>
        {
          product.length !== 0 ?
            <>
              <Helmet>
                <title>{product.meta.title}</title>
                <meta name="description" content={product.meta.description} />
                <meta name="keywords" content={product.meta.keywords} />
              </Helmet>
              <ProductBreadcrumb category={product.category_name} title={product.product_name} />
              <ProductDetails product={product} />
            </>
            : <Loader />
        }
      </Container>
    </div>
  )
}

export default ProductPage