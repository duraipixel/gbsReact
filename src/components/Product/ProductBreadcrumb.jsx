import { Link } from "react-router-dom";

function ProductBreadcrumb({ category, title }) {
  return (
    <div className="d-md-flex">
      <div className="d-flex">
        <Link to={"/"}>
          <span className="text-secondary">{category}</span>
        </Link>
        <div className="px-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path d="M1 13L7 7L1 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <span className="text-dark">
        {title?.substring(0, 50)}
      </span>
    </div>
  );
}

export default ProductBreadcrumb;
