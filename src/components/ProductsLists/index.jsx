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
  const [products, setProduct] = useState([])
  const [fetching, setfetching] = useState(true)
  const [take, setTake] = useState(20)
  const location = useLocation()
  const { search } = useLocation()
  const [clearFilter, setClearFilter] = useState(false)

  const [currentLocation, setCurrentLocation] = useState(location.search)

  useMemo(() => {
    setfetching(true)
    productsApi(search, take).then(({ data }) => {
      setProduct(data)
      setfetching(false)
      SetAllCheckBoxes(location)
    })
  }, [take, currentLocation]);
  return (
    <div>
      <CategoryFilters setCurrentLocation={setCurrentLocation}/>
      <section className="bg-primary-soft p-0 overflow-hidden">
        <Container>
          <Row>
            <ProductFilter setCurrentLocation={setCurrentLocation} clearFilter={clearFilter} setClearFilter={setClearFilter} />
            <ProductListDetails setCurrentLocation={setCurrentLocation} clearFilter={clearFilter} setClearFilter={setClearFilter} products={products} fetching={fetching} setTake={setTake} take={take} />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductLists;
