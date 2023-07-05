import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import CardComponent from "components/CardComponent/CardComponent";

function ProductListComponent({ products, action }) {
  if (products.length > 0) {
    return (
      <div className="row g-2 g-lg-0 border-start">
        {products.map((product) => (
          <CardComponent
            product={product}
            key={product.id}
            type="list"
            className='col-6 col-lg-12 border-bottom col-md-4'
          />
        ))}
      </div>
    );
  } else {
    return <NoDataComponent />;
  }
}

export default ProductListComponent;
