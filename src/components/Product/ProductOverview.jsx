function ProductOverview({ product }) {
    if (product.overview.length) return (
        <div>
            <hr />
            <h5>Product Overview</h5>
            <ul className="bullet-points mt-3">
                {product.overview.map((view) => (
                    <li key={view.id}>
                        <span className="text-info">{view.title}</span>:  {view.attribute_values}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductOverview