function Specification({ product }) {
    return (
        <ul className="list-group list-group-flush">
            {
                product.map((item, key) => (
                    <li className="list-group-item d-md-inline-flex bg-light" key={key}>
                        <p className="fw-bold col-md-3 col-lg-2">{item.title}</p>
                        <p className="col-md-8 ps-md-3">
                          {item.attribute_values}
                        </p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Specification