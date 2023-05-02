import { Col } from "react-bootstrap";
import ProductListComponent from "../ProductListComponent";
import { Loader } from "utils";

const ProductListDetails = ({ products, fetching, setTake , take }) => {

  return (
    <Col lg={9} className="align-self-start py-md-5 py-3 px-md-3 bg-white bg-white-layer">
      <Col className="list-details-side">
        <div className="d-sm-flex justify-content-between mb-5">
          <div className="primary-heads">
            <h3> Displaying {products.to} of {products.total_count} results</h3>
          </div>
          <div className="sort-order flex-jc-right align-c">
            <div className="sort-by-div"> Sort by</div>
            <select className="form-control" id="enq" name="enq">
              <option value="">Top Deals</option>
              <option value="New Products">New Products</option>
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
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
