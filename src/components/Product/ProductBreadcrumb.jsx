import { Link } from "react-router-dom";

function ProductBreadcrumb() {
  return (
    <div className="d-flex">
      <Link to={"/"}>
        <span className="text-secondary">Laptops</span>
      </Link>
      <div className="px-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M1 13L7 7L1 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <Link to={"/"} active>
        <span className="text-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </Link>
    </div>
  );
}

export default ProductBreadcrumb;
