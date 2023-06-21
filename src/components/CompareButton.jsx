import { useDispatch } from "react-redux";
import { addProduct } from "redux/features/compareSlice";

function CompareButton({ product, className, buttonType }) {
  const dispatch = useDispatch();
  return (
    <button
      className={className}
      onClick={() => dispatch(addProduct({ status: true, value: product }))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="20"
        viewBox="0 0 18 25"
        fill="none"
        style={{ marginTop: -3 }}
      >
        <path
          d="M2.61475 7.27423C2.61475 10.2697 2.61475 13.2653 2.61475 16.2608C2.61475 16.5846 2.69571 17.4752 3.42434 18.2038C4.55778 19.4992 6.33889 19.1753 6.50081 19.1753C6.50081 17.799 6.50081 16.3417 6.50081 14.9654L10.225 18.6896L6.41985 22.4947C6.41985 21.3612 6.41985 20.1468 6.50081 19.0134"
          stroke="#212363"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M2.6147 7.51646C3.55367 7.51646 4.31486 6.75527 4.31486 5.8163C4.31486 4.87733 3.55367 4.11615 2.6147 4.11615C1.67574 4.11615 0.914551 4.87733 0.914551 5.8163C0.914551 6.75527 1.67574 7.51646 2.6147 7.51646Z"
          stroke="#212363"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M15.2445 17.6364C15.2445 14.6409 15.2445 11.6454 15.2445 8.64989C15.2445 8.32605 15.1635 7.43549 14.4349 6.70685C13.3015 5.4115 11.5203 5.73534 11.3584 5.73534C11.3584 7.11165 11.3584 8.56893 11.3584 9.94524L7.63428 6.30206L11.4394 2.49695C11.4394 3.63038 11.4394 4.84478 11.3584 5.97822"
          stroke="#212363"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M15.2446 20.7937C16.1836 20.7937 16.9447 20.0326 16.9447 19.0936C16.9447 18.1546 16.1836 17.3934 15.2446 17.3934C14.3056 17.3934 13.5444 18.1546 13.5444 19.0936C13.5444 20.0326 14.3056 20.7937 15.2446 20.7937Z"
          stroke="#212363"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </svg>
      {/* {buttonType === "icon" ? "" : <span>Compare</span>} */}
      <span className="ms-1">Compare</span>
    </button>
  );
}

export default CompareButton;
