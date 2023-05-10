import { Helmet } from "react-helmet";
import "../errors/styles.scss";
function NotFound() {
  return (
    <div className="error-body text-center">
      <Helmet>
        <title>404 Not Found | GBS</title>
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <div>page not found</div>
      </div>
    </div>
  );
}

export default NotFound;
