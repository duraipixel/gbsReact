import { Col } from "react-bootstrap";
import { Loader } from "utils";
import { useLocation, useNavigate } from "react-router-dom";
import ProductListComponent from "../ProductListComponent";
import FilterChips from "../ProductFilter/FilterChips";

const ProductListDetails = ({
  products,
  fetching,
  setTake,
  take,
  setCurrentLocation,
  setClearFilter,
  tackLoader
}) => {
  const location     = useLocation();
  const navigate     = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const filterHandler = (e) => {
    const searchParams = new URLSearchParams(location.search)
    if (e.target.value) {
      searchParams.set("sort_by", e.target.value)
      setCurrentLocation(`?${searchParams.toString()}`)
      navigate(`/products?${searchParams.toString()}`)
      setClearFilter(true)
    } else {
      setClearFilter(false)
    }
  };
  return (
    <Col lg={10} className="align-self-start px-md-3" >
      {products && (
        <div className="list-details-side">
          <div className="d-sm-flex justify-content-between m-3 text-md-start text-center">
            <div className="primary-heads">
              <h1 className="h3">
                Displaying {products.to} of {products.total_count} results
              </h1>
            </div>
            <div className="col-lg-3">
              <div className="input-group ">
                <button className="btn btn-sm btn-light border"> Sort by</button>
                <select
                  className="form-select form-select-sm"
                  id="enq"
                  name="enq"
                  onChange={filterHandler}
                  value={searchParams.get('sort_by') || ''}
                >
                  <option value="">-- select --</option>
                  <option value="price-high-to-low" >High to Low</option>
                  <option value="price-low-to-high">Low to High</option>
                </select>
              </div>
            </div>
          </div>
          <FilterChips />
          {fetching ? (
            <Loader />
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
                          onClick={() => setTake(take + 5)}
                          loading={tackLoader.toString()}
                          className="btn mt-4 btn-outline-info"
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
