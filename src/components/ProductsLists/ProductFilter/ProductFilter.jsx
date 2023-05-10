import { useState, useEffect } from "react";
import { Col, Accordion } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { filterMenuApi } from "services/filters.service";
import { Text } from "utils";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setfilter } from "redux/features/filterSlice";
import CheckBoxInput from "components/CheckBoxInput";

const ProductFilter = ({
  setCurrentLocation,
  setClearFilter, 
  filterData,
}) => {
  const filter = useSelector((state) => state.filter)
  const [defaultActiveKey, setDefaultActiveKey] = useState([]);
  const [isActive, setActive] = useState("false");
  const [Filters, setFilters] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  filterData = filterData && filterData.split("=");
  filterData = filterData && filterData[1].split("_");

  const clearAllFilters = () => {
    var checkboxes = document.querySelectorAll("input:checked");
    console.log(checkboxes)
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox") {
        checkboxes[i].checked = false;
      }
    }
    navigate("/products");
    dispatch(setfilter(''))
  };

  const filterAccordionHandler = (filters) => {
    const tempArr = [];
    Object.keys(filters).forEach((item) => {
      if (searchParams.get(item) !== null) {
        tempArr.push(item);
      }
    });
    if (tempArr.length > 0) {
      setDefaultActiveKey(tempArr);
    } else {
      setDefaultActiveKey(['brands']);
    }
  };

  useEffect(() => {
    filterMenuApi().then(({ data }) => {
      filterAccordionHandler(data);
      setFilters(data);
    });
  }, []);

  return (
    <Col lg={3} className="py-md-5 align-self-start pt-3 h-100 ">
      <div className="filters-side">
        <div className="d-flex justify-content-between">
          <div className="product-filter-btn" onClick={() => setActive(!isActive)}>
            Filters
          </div>
          <div>
            {
              filter !== '' ?
                <button onClick={clearAllFilters} className="btn btn-dark btn-sm">
                  Clear
                </button>
                : ''
            }

          </div>
        </div>
        <div
          className={
            isActive
              ? "filter-lists product-filters"
              : "active product-filters filter-lists"
          }
        >
          <Link className="close-btn" onClick={() => setActive(!isActive)}>
            <IoMdClose />
          </Link>
          {defaultActiveKey?.length > 0 ? (
            <Accordion
              defaultActiveKey={defaultActiveKey}
              alwaysOpen
              className="px-0 filters-accordion"
            >
              {Object.entries(Filters).map((filters, key) => (
                <Accordion.Item eventKey={filters[0]} key={key}>
                  <Accordion.Header>{Text(filters[0])} </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {filters[1].map((filter, index) => (
                        <li key={index}>
                          <CheckBoxInput data={filter} name={filters[0]} />
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            ""
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProductFilter;
