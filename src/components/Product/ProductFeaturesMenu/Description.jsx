function Description() {
    return (
        <div>
            <center>
                <h2 className='fw-bold'>Dominating Specs</h2>
                <p>Reign over the game world with the combined power of an 11th Gen Intel® Core™ i5 processor and up to NVIDIA® GeForce 1650 GPU (fully optimized for maximum MGP). Configure your laptop for top speed and massive storage with two slots for GEN 4 M.2 PCIe and up to 32GB of DDR4 3200 RAM.</p>
                <img src={require('../../../assets/images/products/product-hero.png')} alt="" className='img-fluid' />
            </center>
            <div className="row mt-5">
                <div className="col-md-4">
                    <center>
                        <img src={require('../../../assets/images/products/product-hero-2.png')} alt="" className='img-fluid' />
                        <h5 className='fw-bold mt-3'>Boost Performance with AI</h5>
                        <p>NVIDIA DLSS gives games a speed boost with uncompromised image quality. Crank up the settings and resolution for an even better visual experience.</p>
                    </center>
                </div>
                <div className="col-md-4">
                    <center>
                        <img src={require('../../../assets/images/products/product-hero-3.png')} alt="" className='img-fluid' />
                        <h5 className='fw-bold mt-3'>Dominating Specs</h5>
                        <p>Ray Tracing is the holy grail of graphics. It simulates how light behaves in the real-world to produce the most realistic and immersive graphics.</p>
                    </center>
                </div>
                <div className="col-md-4">
                    <center>
                        <img src={require('../../../assets/images/products/product-hero-4.png')} alt="" className='img-fluid' />
                        <h5 className='fw-bold mt-3'>Optimized Power & Performance</h5>
                        <p>NVIDIA Max-Q is a suite of technologies powered by AI that optimize laptops to deliver high performance in thin form factors.</p>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Description