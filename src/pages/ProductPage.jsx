import ProductBreadcrumb from "components/Product/ProductBreadcrumb"
import { Container } from "react-bootstrap"
import ProductDetails from "components/Product/ProductDetails"

function ProductPage() {
  return (
    <div className="bg-light py-3">
      <Container>
        <ProductBreadcrumb />
        <ProductDetails />
      </Container>
    </div>
  )
}

export default ProductPage