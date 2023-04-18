import { Tab, Nav } from 'react-bootstrap'
import Description from './Description'
import Specification from './Specification'
import CustomerReview from './CustomerReview'

function ProductsFeaturesTabs() {
    return (
        <div className="product-features-tab">
            <Tab.Container defaultActiveKey="0">
                <Nav variant="pills" className='sticky-top bg-light'>
                    <Nav.Item>
                        <Nav.Link eventKey="0">Description</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="1">Product Specifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2">Customer Reviews</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='p-3 pt-4'>
                    <Tab.Pane eventKey="0">
                        <Description />
                    </Tab.Pane>
                    <Tab.Pane eventKey="1">
                        <Specification />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <CustomerReview />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}

export default ProductsFeaturesTabs