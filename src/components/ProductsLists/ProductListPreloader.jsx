import { Placeholder } from 'react-bootstrap'

function ProductListPreloader() {
    return (
        <div className='row g-2 g-lg-0 border-start'>
            <div className='product-card overflow-hidden col-lg-12 border-bottom col-md-4 col-6'>
                <div className="row m-0" >
                    <div className="col-md-4 pt-3">
                        <Placeholder as="div" animation="wave">
                            <Placeholder xs={12} style={{ height: 200 }} />
                        </Placeholder>
                    </div>
                    <div className="ari-cnt text-start w-100 bg-white col-md">
                        <div className="cursor" >
                            <Placeholder as="div" animation="glow">
                                <Placeholder style={{ width:100,height:5  }}/>
                                <Placeholder xs={12} size='lg' />
                                <Placeholder xs={10} size='lg' />
                                <Placeholder  as="div" className="d-block mt-3" xs={2} style={{ height:35 }}/>
                            </Placeholder>
                        </div>
                        <div className="d-flex align-items-center clk-optn">
                            <Placeholder as="div" animation="wave">
                                <br />
                                <Placeholder.Button size='sm' variant="secondary" style={{ width:35,height:35 }} className="me-2 rounded-pill" />
                                <Placeholder.Button size='sm' variant="primary" style={{ width:100,height:35 }} />
                            </Placeholder>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-card overflow-hidden col-lg-12 border-bottom col-md-4 col-6'>
                <div className="row m-0" >
                    <div className="col-md-4 pt-3">
                        <Placeholder as="div" animation="wave">
                            <Placeholder xs={12} style={{ height: 200 }} />
                        </Placeholder>
                    </div>
                    <div className="ari-cnt text-start w-100 bg-white col-md">
                        <div className="cursor" >
                            <Placeholder as="div" animation="glow">
                                <Placeholder style={{ width:100,height:5  }}/>
                                <Placeholder xs={12} size='lg' />
                                <Placeholder xs={10} size='lg' />
                                <Placeholder  as="div" className="d-block mt-3" xs={2} style={{ height:35 }}/>
                            </Placeholder>
                        </div>
                        <div className="d-flex align-items-center clk-optn">
                            <Placeholder as="div" animation="wave">
                                <br />
                                <Placeholder.Button size='sm' variant="secondary" style={{ width:35,height:35 }} className="me-2 rounded-pill" />
                            </Placeholder>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-card overflow-hidden col-lg-12 border-bottom col-md-4 col-6'>
                <div className="row m-0" >
                    <div className="col-md-4 pt-3">
                        <Placeholder as="div" animation="wave">
                            <Placeholder xs={12} style={{ height: 200 }} />
                        </Placeholder>
                    </div>
                    <div className="ari-cnt text-start w-100 bg-white col-md">
                        <div className="cursor" >
                            <Placeholder as="div" animation="glow">
                                <Placeholder style={{ width:100,height:5  }}/>
                                <Placeholder xs={12} size='lg' />
                                <Placeholder xs={10} size='lg' />
                                <Placeholder  as="div" className="d-block mt-3" xs={2} style={{ height:35 }}/>
                            </Placeholder>
                        </div>
                        <div className="d-flex align-items-center clk-optn">
                            <Placeholder as="div" animation="wave">
                                <br />
                                <Placeholder.Button size='sm' variant="secondary" style={{ width:35,height:35 }} className="me-2 rounded-pill" />
                            </Placeholder>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-card overflow-hidden col-lg-12 border-bottom col-md-4 col-6'>
                <div className="row m-0" >
                    <div className="col-md-4 pt-3">
                        <Placeholder as="div" animation="wave">
                            <Placeholder xs={12} style={{ height: 200 }} />
                        </Placeholder>
                    </div>
                    <div className="ari-cnt text-start w-100 bg-white col-md">
                        <div className="cursor" >
                            <Placeholder as="div" animation="glow">
                                <Placeholder style={{ width:100,height:5  }}/>
                                <Placeholder xs={12} size='lg' />
                                <Placeholder xs={10} size='lg' />
                                <Placeholder  as="div" className="d-block mt-3" xs={2} style={{ height:35 }}/>
                            </Placeholder>
                        </div>
                        <div className="d-flex align-items-center clk-optn">
                            <Placeholder as="div" animation="wave">
                                <br />
                                <Placeholder.Button size='sm' variant="secondary" style={{ width:35,height:35 }} className="me-2 rounded-pill" />
                            </Placeholder>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListPreloader