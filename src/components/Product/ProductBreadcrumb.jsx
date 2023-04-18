import { Link } from "react-router-dom";

function ProductBreadcrumb() {
  return (
    <div className="d-flex">
      <Link to={"/"}>
        <span className="text-secondary">Laptops</span>
      </Link>
      <div className="px-2">
        <img
          src={require("../../assets/icons/arrow-down.png")}
          alt="arrow-down"
        />
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
