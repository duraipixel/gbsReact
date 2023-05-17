import { Link } from "react-router-dom";

function ProductBreadcrumb({ slug, category, title }) {

  return (
    <div className="d-md-flex align-items-center">
      <div className="d-flex">
        <Link to={`/products?categories=${slug}`}>
          <small className="text-secondary">{category}</small>
        </Link>
        <div className="px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M1 13L7 7L1 1" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <a href="#">
        <small className="text-dark">
          {title?.substring(0, 50)}
        </small>
      </a>
    </div>
  );
}

export default ProductBreadcrumb;
