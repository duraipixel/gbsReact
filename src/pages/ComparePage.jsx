import AddCartButton from "components/AddCartButton";
import { Helmet } from "react-helmet";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeProduct } from "redux/features/compareSlice";

function ComparePage() {
  const products = useSelector((state) => state.compareProducts);
  const dispatch = useDispatch();
  if (products.value.length === 0) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Helmet>
        <title>{products?.meta?.title || "Compare Products | GBS"}</title>
        <meta name="description" content={products?.meta?.description} />
        <meta name="keywords" content={products?.meta?.keywords} />
      </Helmet>
      <div>
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
        <div className="d-flex align-items-center justify-content-center">
          <div className="compare-card-group align-items-start container mx-auto">
            {products.value.length > 0
              ? products.value.map((product, key) => (
                  <div className="compare-card" key={key}>
                    <button
                      onClick={() =>
                        dispatch(
                          removeProduct({ status: false, value: product.id })
                        )
                      }
                      className="float-end btn-sm btn btn-outline-primary"
                    >
                      <HiXMark size={16} />
                    </button>
                    <img
                      src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664431264/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257040_0_yigvy6.png/mxw_1536,f_auto"
                      alt=""
                    />
                    <p className="product-title">{product.product_name}</p>
                    <b>₹{product.price}</b>
                    <div>
                      <AddCartButton
                        type="button"
                        className="btn btn-primary"
                        product={product}
                      />
                    </div>
                    {product?.attributes?.length > 0 ? (
                      <ul className="bullet-points mt-3">
                        {product.attributes.map((item, index) => (
                          <li key={index}>
                            <div>
                              <span className="text-info">{item.title}</span>:
                              {item.attribute_values}
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default ComparePage;
