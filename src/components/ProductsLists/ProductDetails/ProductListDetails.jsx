import { Col } from "react-bootstrap";
import { Loader } from "utils";
import ProductListComponent from "../ProductListComponent"; 
import CategoryFilters from "../ProductFilter/CategoryFilters";
import ProductListPreloader from "../ProductListPreloader";

const ProductListDetails = ({
  products,
  fetching,
  setTake,
  take,
  setCurrentLocation,
  setClearFilter,
  tackLoader
}) => {
  
  return (
    <Col lg={10} className="align-self-start p-0" >
      <CategoryFilters setCurrentLocation={setCurrentLocation} />
      {products && (
        <div className="list-details-side">
          <div className="primary-heads p-3">
            <h1 className="h3 m-0">
              Displaying {products.to} of {products.total_count} results
            </h1>
          </div>
          {fetching ? (
            <ProductListPreloader />
          ) : (
            <>
              {products.length === 0 ? (
                "No Data"
              ) : (
                <>
                  <ProductListComponent products={products.products} />
                  {
                    products.total_count !== products.to ?
                      <center>
                        <button
                          onClick={() => setTake(take + 20)}
                          loading={tackLoader.toString()}
                          className="btn my-4 btn-outline-info"
                        >
                          Load more
                        </button>
                      </center>
                      : ''
                  }
                </>
              )}
            </>
          )}
        </div>
      )}
    </Col>
  );
};

export default ProductListDetails;
