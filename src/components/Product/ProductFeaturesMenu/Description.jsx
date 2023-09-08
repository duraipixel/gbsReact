function Description({ product }) {
    const otherProduct = product.slice(1)
    return (
        <div>
            <center>
                <h2 className='fw-bold'>{product[0]?.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: product[0]?.description }}></p>
                <div className="col-sm-8 col">
                    <img src={product[0]?.desc_image} alt={product[0]?.title} className='w-100' />
                </div>
            </center>
            <div className="row mt-5 justify-content-center">
                {
                    otherProduct.map((item, key) => (
                        <div className="col-md-4" key={key}>
                            <center>
                                <img src={item.desc_image} alt={item.title} className='img-fluid' />
                                <h5 className='fw-bold mt-3'>{item.title}</h5>
                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </center>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Description