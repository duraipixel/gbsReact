import { Col } from "react-bootstrap";
import ProductListComponent from "../ProductListComponent";
import { Loader } from "utils";
import { useLocation, useNavigate } from "react-router-dom";

const ProductListDetails = ({ products, fetching, setTake, take, setCurrentLocation, setClearFilter }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const filterHandler = (e) => {
    const searchParams = new URLSearchParams(location.search);
    if (e.target.value) {
      searchParams.set('sory_by', e.target.value);
      setCurrentLocation(`?${searchParams.toString()}`)
      navigate(`/products?${searchParams.toString()}`);
      setClearFilter(true)
    } else {
      setClearFilter(false)
    }
  }
  return (
    <Col lg={9} className="align-self-start py-md-5 py-3 px-md-3 bg-white bg-white-layer">
      <Col className="list-details-side">
        <div className="d-sm-flex justify-content-between mb-5">
          <div className="primary-heads">
            <h3> Displaying {products.to} of {products.total_count} results</h3>
          </div>
          <div className="sort-order flex-jc-right align-c">
            <div className="sort-by-div"> Sort by</div>
            <select className="form-control" id="enq" name="enq" onChange={filterHandler}>
              <option value="">-- select --</option>
              <option value="high-to-low">High to Low</option>
              <option value="price-low-to-high">Low to High</option>
            </select>
          </div>
        </div>
        {
          fetching ?
            <Loader />
            :
            <>
              {
                products.length === 0 ?
                  "No Data"
                  :
                  <>
                    <ProductListComponent products={products.products} />
                    <center>
                      <button onClick={() => setTake(take + 5)} className="btn mt-4 btn-outline-info">Load more</button>
                    </center>
                  </>
              }
            </>
        }
      </Col>
    </Col>
  );
};

export default ProductListDetails;
