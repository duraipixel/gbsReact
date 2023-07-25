import { Dropdown } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLayoutStatus } from "redux/features/authLayoutSlice";
import { setAuthUser } from "redux/features/authSlice";
import { clearCart } from "redux/features/cartSlice";
import { strRandom } from "utils";

function AccountButton({ text, size, className }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth);
  const Logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    toast.success("Logout Success!");
    navigate("/");
    dispatch(setAuthUser({ data: [], isLoggedIn: false }));
    dispatch(clearCart());
    if (localStorage.getItem('guest_token') === null) {
      localStorage.setItem('guest_token', strRandom())
    }
  };
  return (
    <Dropdown align="end" className="m-0">
      <Dropdown.Toggle
        className={`${className} btn-account border-0 text-white btn-sm btn ps-lg-3 d-block d-lg-flex flex-lg-column justify-content-center align-items-center`}
      >
        <FiUser size={size} />
        {text && <span className="small ms-3 ms-lg-0">My Account</span>}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {authUser.isLoggedIn ? (
          <>
            <Dropdown.Item
              className="text-dark"
              as={Link}
              to="/my-account/profile"
            >
              Profile
            </Dropdown.Item>
            <Dropdown.Item className="text-dark px-3" as={"button"} onClick={Logout}>
              Logout
            </Dropdown.Item>
          </>
        ) : (
          <Dropdown.Item
            className="text-dark"
            as={"button"}
            onClick={() =>
              dispatch(setLayoutStatus({ status: true, type: "login" }))
            }
          >
            Login
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AccountButton;
