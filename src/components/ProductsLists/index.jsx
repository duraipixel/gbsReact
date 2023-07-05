import "./styles.scss";
import { Row } from "react-bootstrap";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductListDetails from "./ProductDetails/ProductListDetails";
import { useState } from "react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { productsApi } from "services/filters.service";
import { SetAllCheckBoxes } from "utils";
import { IoCaretUpCircle } from "react-icons/io5";
import ScrollToTop from "react-scroll-to-top";

const ProductLists = () => {
  const [products, setProduct] = useState([]);
  const [fetching, setfetching] = useState(true);
  const [tackLoader, setTackLoader] = useState(false);
  const [take, setTake] = useState(20);
  const location = useLocation();
  const { search } = useLocation();
  const [clearFilter, setClearFilter] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location.search);
  const searchParams = new URLSearchParams(location.search);
  let filterData = searchParams.toString();
  useMemo(() => {
    if (take === 20) {
      setfetching(true);
    } else {
      setTackLoader(true)
    }
    productsApi(search, take).then(({ data }) => {
      setProduct(data);
      setfetching(false);
      setTackLoader(false)
      SetAllCheckBoxes(location);
    });
  }, [take, currentLocation, filterData]);
  return (
    <div>
      <section className="p-0 px-lg-5 px-3 pt-4">
        <Row className="m-0  bg-white" >
          <ProductFilter
            filterData={filterData}
            setCurrentLocation={setCurrentLocation}
            clearFilter={clearFilter}
            setClearFilter={setClearFilter}
          />
          <ProductListDetails
            setCurrentLocation={setCurrentLocation}
            clearFilter={clearFilter}
            setClearFilter={setClearFilter}
            products={products}
            fetching={fetching}
            setTake={setTake}
            take={take}
            tackLoader={tackLoader}
          />
        </Row>
        <ScrollToTop smooth />
      </section>
    </div>
  );
};

export default ProductLists;
