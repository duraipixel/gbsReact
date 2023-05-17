import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { productListCategoryMenuApi } from "services/filters.service";

function CategoryFilters({ setCurrentLocation }) {
  const [subcategory, setSubcategory] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const categoryHandler = (type, value) => {
    searchParams.set(type, typeof value === "object" ? value.join("_") : value);
    setCurrentLocation(`?${searchParams.toString()}`);
    navigate(`/products?${searchParams.toString()}`);
  };
  useEffect(() => {
    searchParams.toString() === "categories=laptop-laptop"
      ? productListCategoryMenuApi("laptop").then((response) => {
          //   console.log(response.data.child_category);
          setSubcategory(response.data.child_category);
        })
      : productListCategoryMenuApi().then((response) => {
          //   console.log(response.data.child_category);
          setSubcategory(response.data.child_category);
        });
  }, []);
  return (
    <Nav className="justify-content-center bg-dark text-light">
      {subcategory.length > 0
        ? subcategory.map((item, i) => (
            <Nav.Item key={i}>
              <Nav.Link
                onClick={() => categoryHandler("categories", item.slug)}
                className="text-light"
              >
                {item.name === "LAPTOP" ? "All Laptops" : item.name}
              </Nav.Link>
            </Nav.Item>
          ))
        : ""}
    </Nav>
  );
}

export default CategoryFilters;
