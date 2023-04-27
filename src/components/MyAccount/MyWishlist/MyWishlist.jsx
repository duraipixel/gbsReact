import "../../ProductsLists/styles.scss";
import "./styles.scss";
import { clearWhishListApi, getWhishListApi } from "services/product.service";
import { useEffect, useState } from "react";
import ProductListComponent from "components/ProductsLists/ProductListComponent";
import { toast } from "react-hot-toast";

const MyWishlist = () => {
  const [products, setProducts] = useState([])
  const getData = async () => {
    const { data } = await getWhishListApi()
    setProducts(data)
  }
  const clearWhishList = () => {
    clearWhishListApi().then(response => {
      if(response.data.error === 0) {
        toast.success(response.data.message)
      }
    });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="bg-white">
      <div className="flex-jc-btwn flex-wrap heading-div p-3 pb-0">
        <h2 className="m-0 fs-5">My Wishlist</h2>
        <button type="button" className="btn-sm btn btn-outline-info" onClick={() => clearWhishList()}>
          <svg className="me-2" width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1152_3000)">
              <path d="M0.916626 3.66699V9.16699H6.41663" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.0834 18.333V12.833H15.5834" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.7825 8.24978C18.3176 6.936 17.5274 5.7614 16.4858 4.83558C15.4441 3.90977 14.1849 3.2629 12.8257 2.95535C11.4664 2.64781 10.0514 2.6896 8.7127 3.07683C7.37397 3.46406 6.15514 4.18411 5.16996 5.16978L0.916626 9.16645M21.0833 12.8331L16.83 16.8298C15.8448 17.8155 14.6259 18.5355 13.2872 18.9227C11.9485 19.31 10.5335 19.3518 9.17422 19.0442C7.81497 18.7367 6.55578 18.0898 5.51414 17.164C4.4725 16.2382 3.68236 15.0636 3.21746 13.7498" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1152_3000">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Clear list
        </button>
      </div>
      <ProductListComponent products={products} action={getData} />
    </div>
  );
};

export default MyWishlist;
