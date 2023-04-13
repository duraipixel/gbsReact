import { Spinner } from "react-bootstrap";
import { ProgressBar } from "react-loader-spinner";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};
const LoadingSpinner = () => {
  return (
    <Spinner size="sm" animation="border" role="status">
      <span className="visually-hidden"> Loading...</span>
    </Spinner>
  );
}
const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading" 
        wrapperclassName="progress-bar-wrapper"
        borderColor="#8d8d8d"
        barColor="#f1000a"
      />
    </div>
  );
};
export { openInNewTab, getCurrentYear, scrollToTop, Loader, LoadingSpinner };
