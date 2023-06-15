import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import CardComponent from "components/CardComponent/CardComponent";

function ProductListComponent({ products, action }) {
  if (products.length > 0) {
    return (
      <div className="">
        <div className="row g-2">
          {products.map((product) => (
            <CardComponent
              product={product}
              key={product.id}
              type="list"
              className='col-lg-12 col-md-4 col-6'
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <NoDataComponent />;
  }
}

export default ProductListComponent;
