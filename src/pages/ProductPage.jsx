import ProductBreadcrumb from "components/Product/ProductBreadcrumb"
import ProductLightBox from "components/Product/ProductLightBox"
import { Container } from "react-bootstrap"

function ProductPage() {
  return (
    <div className="bg-light py-3">
      <Container>
        <ProductBreadcrumb />
        <ProductLightBox />
      </Container>
    </div>
  )
}

export default ProductPage