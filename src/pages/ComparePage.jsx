import AddCartButton from "components/AddCartButton";
import AddCompareModal from "components/AddCompareModal";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { removeProduct } from "redux/features/compareSlice";
import { compareProductApi } from "services/product.service";
import { Loader } from "utils";
// import AddFavButton from "components/AddFavButton";
// import { HiXMark } from "react-icons/hi2";

function ComparePage() {
  const products = useSelector((state) => state.compareProducts);
  const dispatch = useDispatch();
  const [compareList, setCompareList] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    if (products.value.length > 0) {
      var product_ids = products.value.map(item => item.id)
      compareProductApi(product_ids).then((response) => {
        setCompareList(response.data.data)
      })
    }
  }, [products])

  if (products.value.length === 0) {
    return <Navigate to="/" />;
  }
  if (compareList) {
    return (
      <>
        <Helmet>
          <title>{products?.meta?.title || "Compare Products - GBS Systems"}</title>
          <link rel="canonical" href={window.location.href} />
          <meta name="description" content={products?.meta?.description} />
          <meta name="keywords" content={products?.meta?.keywords} />
        </Helmet>
        <div style={{ background: '#F7F7F7' }}>
          <section className="bg-banner-liner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-liners text-center">
                    <h1>Compare Products</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container py-4">
            <div className="table-responsive">
              <table className="table tableLg">
                <thead>
                  <tr style={{ verticalAlign: 'middle' }}>
                    <td></td>
                    {
                      compareList.products.map((product, index) => (
                        <td key={index} className="p-lg-5">
                          <div className="compare-card text-center position-relative" >
                            <button onClick={() => dispatch(removeProduct({ status: false, value: product.id }))} className="compare-close-btn">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M16.5 1.5L1.5 16.5" stroke="#BC2F03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.5 1.5L16.5 16.5" stroke="#BC2F03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                            <div className="bg-white h-100 p-3 cursor" onClick={() => navigate(`/products/${product.product_url}`)}>
                              <img
                                src={product.image}
                                alt={product.product_name}
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="p-lg-3">
                              <p className="small cursor" onClick={() => navigate(`/products/${product.product_url}`)}>{product.product_name.substring(0, 45)}...</p>
                              <b className="cursor" onClick={() => navigate(`/products/${product.product_url}`)}>₹{product.price}</b>
                              <div className="d-lg-flex justify-content-center align-items-center mt-2">
                                {/* <AddFavButton buttonType="icon" className="btn btn-outline-info me-1 rounded-box-circle rounded-box-sm" product={product} /> */}
                                <AddCartButton
                                  type="button"
                                  className="btn btn-primary"
                                  product={product}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                      ))
                    }
                    {
                      compareList.products.length > 0 & compareList.products.length < 3 ?
                          <td className="p-lg-5">
                            <AddCompareModal />
                          </td>
                        : ''
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.entries(compareList.informations).map((info, index) => (
                      <tr key={index}>
                        <td className="fw-bold" width={250}>{info[0]}</td>
                        {
                          info[1].map((features, secIndex) => (
                            <td key={secIndex} className="p-lg-3 lh-5">
                              {features.value}
                            </td>
                          ))
                        }
                        {
                          compareList.products.length === 2 ? <td></td> : ''
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    )
  }
  else {
    return  <Loader />
  }
}

export default ComparePage;
