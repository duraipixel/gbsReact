import "./styles.scss";
import { Container, Row } from "react-bootstrap";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductListDetails from "./ProductDetails/ProductListDetails";
import { useState } from "react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { productsApi } from "services/filters.service";
import { SetAllCheckBoxes } from "utils";
import CategoryFilters from "./ProductFilter/CategoryFilters";

const ProductLists = () => {
  const [products, setProduct] = useState([]);
  const [fetching, setfetching] = useState(true);
  const [tackLoader, setTackLoader] = useState(false);
  const [take, setTake] = useState(5);
  const location = useLocation();
  const { search } = useLocation();
  const [clearFilter, setClearFilter] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location.search);
  const searchParams = new URLSearchParams(location.search);
  let filterData = searchParams.toString();
  useMemo(() => {
    if (take === 5) {
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
      <CategoryFilters setCurrentLocation={setCurrentLocation} />
      <section className="p-0 bg-filters">
        <Container>
          <Row className="m-0  bg-white">
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
        </Container>
      </section>
    </div>
  );
};

export default ProductLists;
