import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ProgressBar } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Alert = () => {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    title: <p>Hello World</p>,
    didOpen: () => {
      MySwal.showLoading()
    },
  }).then(() => {
    return MySwal.fire(<p>Shorthand works too</p>)
  })
}

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
};
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
const Image = (props) => {
  return <LazyLoadImage {...props} />;
};

const AppScroller = ({ children }) => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return children || null;
};
const setAuthUser = (data) => {
  localStorage.setItem('user', JSON.stringify(data))
}
const AuthUser = () => {
  var user = localStorage.getItem('user')
  if (user !== undefined && user !== null && user !== '') {
    return JSON.parse(user)
  }
  return false
}
export {
  AppScroller,
  openInNewTab,
  getCurrentYear,
  scrollToTop,
  Loader,
  LoadingSpinner,
  Image,
  Alert,
  AuthUser,
  setAuthUser
};
