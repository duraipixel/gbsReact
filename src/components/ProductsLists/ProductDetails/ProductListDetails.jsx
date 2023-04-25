import { Col } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useMemo } from "react";
import { AuthUser, Loader } from "utils";
import { addProduct } from "redux/features/compareSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddCartButton from "components/AddCartButton";
import AddFavButton from "components/AddFavButton";

const ProductListDetails = () => {
  const [products, setProduct] = useState([])
  const [fetching, setfetching] = useState(true)
  const [take, setTake] = useState(5)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getProduct = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/get/products`, {
      take: take,
      customer_id: AuthUser()?.id,
    })
    setProduct(data)
    setfetching(false)
  }
  useMemo(() => {
    getProduct()
  }, [take])
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
                    <ul className="list-group list-group-flush list-group-action m-0">
                      {
                        products.products.map((product) => (
                          <div key={product.id} className="list-group-item" >
                            <div className="d-lg-flex align-items-center g-3">
                              <div onClick={() => navigate(`/product-list/${product.product_url}`)}>
                                <img src={product.image} alt={product.product_name} width={150} />
                              </div>
                              <div className="p-3">
                                <div>
                                  <p onClick={() => navigate(`/product-list/${product.product_url}`)} className="fw-normal text-secondary">{product.product_name}</p>
                                  <div className="d-md-flex align-items-end mb-3">
                                    <div className="text-sku mb-md-0 mb-2 fw-bold text-primary">{product.category_name}</div>
                                    <div>
                                      <span className="text-secondary ms-md-3 me-2 d-inline-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                          <path d="M8.22419 0.470891L9.916 4.05545C10.0336 4.30476 10.2611 4.47751 10.5243 4.51743L14.3074 5.09228C14.9702 5.19305 15.2345 6.04437 14.7552 6.53285L12.0177 9.32302C11.8275 9.51704 11.7405 9.79678 11.7855 10.0706L12.4317 14.0105C12.5449 14.7005 11.8522 15.2266 11.2596 14.9011L7.87594 13.0411C7.64065 12.9118 7.35935 12.9118 7.12406 13.0411L3.74044 14.9011C3.14782 15.227 2.45508 14.7005 2.56834 14.0105L3.21447 10.0706C3.25952 9.79678 3.17254 9.51704 2.9823 9.32302L0.244804 6.53285C-0.234547 6.04404 0.029847 5.19273 0.692553 5.09228L4.47574 4.51743C4.73888 4.47751 4.96635 4.30476 5.084 4.05545L6.77581 0.470891C7.07181 -0.156964 7.92788 -0.156964 8.22419 0.470891Z" fill="#929292" />
                                        </svg>
                                        4.9
                                      </span>
                                      <span className="text-info">235 Reviews</span>
                                    </div>
                                  </div>
                                  <h4>
                                    <span className="ori-nal ms-0"> ₹{product.price} </span>
                                  </h4>
                                  <ul className="config-uration">
                                    {product.overview.map((view) => (
                                      <li key={view.id}> {view.attribute_values} </li>
                                    ))}
                                  </ul>
                                  <div className="action-group mt-4">
                                    <AddFavButton className="ms-md-3 mb-md-0 mb-3 btn btn-outline-info rounded-box-circle me-md-3" product={product} />
                                    <button className="mb-md-0 mb-3 btn btn-outline-info rounded-box-circle me-md-3" onClick={() => dispatch(addProduct({ status: true, value: product }))}>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 25" fill="none">
                                        <path d="M2.61475 7.27423C2.61475 10.2697 2.61475 13.2653 2.61475 16.2608C2.61475 16.5846 2.69571 17.4752 3.42434 18.2038C4.55778 19.4992 6.33889 19.1753 6.50081 19.1753C6.50081 17.799 6.50081 16.3417 6.50081 14.9654L10.225 18.6896L6.41985 22.4947C6.41985 21.3612 6.41985 20.1468 6.50081 19.0134" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M2.6147 7.51646C3.55367 7.51646 4.31486 6.75527 4.31486 5.8163C4.31486 4.87733 3.55367 4.11615 2.6147 4.11615C1.67574 4.11615 0.914551 4.87733 0.914551 5.8163C0.914551 6.75527 1.67574 7.51646 2.6147 7.51646Z" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M15.2445 17.6364C15.2445 14.6409 15.2445 11.6454 15.2445 8.64989C15.2445 8.32605 15.1635 7.43549 14.4349 6.70685C13.3015 5.4115 11.5203 5.73534 11.3584 5.73534C11.3584 7.11165 11.3584 8.56893 11.3584 9.94524L7.63428 6.30206L11.4394 2.49695C11.4394 3.63038 11.4394 4.84478 11.3584 5.97822" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                                        <path d="M15.2446 20.7937C16.1836 20.7937 16.9447 20.0326 16.9447 19.0936C16.9447 18.1546 16.1836 17.3934 15.2446 17.3934C14.3056 17.3934 13.5444 18.1546 13.5444 19.0936C13.5444 20.0326 14.3056 20.7937 15.2446 20.7937Z" stroke="#212363" strokeWidth="1.5" strokeMiterlimit="10" />
                                      </svg>
                                    </button>
                                    <AddCartButton type='button' product={product} className="btn btn-primary" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </ul>
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
