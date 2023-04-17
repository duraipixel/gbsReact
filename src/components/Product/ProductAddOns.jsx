import { Accordion } from 'react-bootstrap'

function ProductAddOns() {
    return (
        <>
            <h5>Personalized Add-ons for your Product</h5>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="d-flex align-items-center">
                            <img src={require('../../assets/icons/warranty.png')} alt="" />
                            <div className='ms-3'>
                                <span className="fw-bold">Extended Warranty</span>
                                <div className='mt-2'>Enjoy peace of mind and added protection for your device</div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className="d-flex align-items-center">
                            <img src={require('../../assets/icons/service.png')} alt="" />
                            <div className='ms-3'>
                                <span className="fw-bold">Accidental Damage Protection</span>
                                <div className='mt-2'>From drops to spills and everything in between, we've got you covered</div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div className="d-flex align-items-center">
                            <img src={require('../../assets/icons/laptop.png')} alt="" />
                            <div className='ms-3'>
                                <span className="fw-bold">Screen Replacement Plan</span>
                                <div className='mt-2'>Don't let a cracked or shattered screen ruin your day</div>
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default ProductAddOns