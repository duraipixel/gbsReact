import { Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"

function ProductBreadcrumb() {
    return (
        <Breadcrumb className="mt-3">
            <Breadcrumb.Item as={Link} to={'/'}>
                <span className="text-secondary">Laptops</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item as={Link} to={'/'} active>
                <span className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default ProductBreadcrumb