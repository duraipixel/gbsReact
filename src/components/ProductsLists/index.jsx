import "./styles.scss";
import { Container, Row } from "react-bootstrap";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductListDetails from "./ProductDetails/ProductListDetails";
import { useState } from "react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { productsApi } from "services/filters.service";
import { SetAllCheckBoxes } from "utils";

const ProductLists = () => {
  const [products, setProduct]  = useState([])
  const [fetching, setfetching] = useState(true)
  const [take, setTake]         = useState(20)
  const location                = useLocation()
  const { search }              = useLocation()
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
    <section className="bg-primary-soft p-0 overflow-hidden">
      <Container>
        <Row>
          <ProductFilter setCurrentLocation={setCurrentLocation} />
          <ProductListDetails products={products} fetching={fetching} setTake={setTake} take={take} />
        </Row>
      </Container>
    </section>
  );
};

export default ProductLists;
