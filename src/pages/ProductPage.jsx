/* eslint-disable react-hooks/exhaustive-deps */
import ProductDetails from "components/Product/ProductDetails"
import axios from "axios"
import { Container } from "react-bootstrap"
import { useParams, Navigate } from "react-router-dom"
import { useMemo } from "react"
import { useState } from "react"
import { AuthUser, Loader } from '../utils/index'
import { Helmet } from "react-helmet"
function ProductPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState([])
  const [fetching, setfetching] = useState(true)
  const getProduct = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/get/products/by/slug`, {
      customer_id: AuthUser()?.id,
      product_url: slug
    })
    setProduct(data)
    setfetching(false)
  }
  useMemo(() => {
    getProduct()
  }, [slug])

  return (
    <div className="dark-section">
      <Container>
        {
          fetching ?
            <Loader />
            :
            <>
              {
                product.length === 0 ?
                  <Navigate to='/404' />
                  :
                  <>
                    <Helmet>
                      <title>{product?.meta?.meta_title || "Product Details - GBS Systems"}</title>
                      <link rel="canonical" href={window.location.href} />
                      <link rel="shortcut icon" type="image/x-icon" href={product?.image} />

                      <title>{product?.meta?.meta_title || "Product Details - GBS Systems"}</title>
                      <meta name="title" content={product?.meta?.meta_title || "Product Details - GBS Systems"} />
                      <meta name="description" content={product?.meta?.meta_description} />

                      <meta property="og:type" content="website" />
                      <meta property="og:url" content="https://metatags.io" />
                      <meta property="og:title" content={product?.meta?.meta_title || "Product Details - GBS Systems"} />
                      <meta property="og:description" content={product?.meta?.meta_description} />
                      <meta property="og:image" content={product?.image} />

                      <meta property="twitter:card" content="summary_large_image" />
                      <meta property="twitter:url" content="https://metatags.io" />
                      <meta property="twitter:title" content={product?.meta?.meta_title || "Product Details - GBS Systems"} />
                      <meta property="twitter:description" content={product?.meta?.meta_description} />
                      <meta property="twitter:image" content={product?.image} />

                    </Helmet>
                    <ProductDetails product={product} />
                  </>
              }
            </>
        }
      </Container>
    </div>
  )
}

export default ProductPage