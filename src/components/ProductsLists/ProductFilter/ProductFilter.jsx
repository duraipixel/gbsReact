import { useState, useEffect } from "react";
import { Col, Accordion } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { filterMenuApi } from "services/filters.service";
import { Text } from "utils";
import { IoMdClose } from "react-icons/io";
import CheckBoxInput from "components/CheckBoxInput";

const ProductFilter = ({
  setCurrentLocation,
  setClearFilter,
  clearFilter,
  filterData,
}) => {
  const [defaultActiveKey, setDefaultActiveKey] = useState([]);
  const [isActive, setActive] = useState("false");
  const [Filters, setFilters] = useState(false);
  const [browesBy, setBrowesBy] = useState([]);
  const toggleClass = () => setActive(!isActive);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  let checkboxes = document.querySelectorAll("input:checked");

  filterData = filterData && filterData.split("=");
  filterData = filterData && filterData[1].split("_");
  // console.log(filter_data);

  const filterHandler = (type, value) => {
    // console.log(type, value);
    searchParams.set(type, typeof value === "object" ? value.join("_") : value);
    setCurrentLocation(`?${searchParams.toString()}`);
    navigate(`/products?${searchParams.toString()}`);
  };

  const clearAllFilters = () => {
    var checkboxes = document.querySelectorAll("input:checked");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = false;
      }
    }
    setCurrentLocation("");
    setClearFilter(false);
    navigate("/products");
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
      setDefaultActiveKey(["product_availability", "brands"]);
    }
  };

  useEffect(() => {
    filterMenuApi().then(({ data }) => {
      var customOption = {
        product_availability: [
          { name: "In Stock", slug: "in-stock" },
          { name: "Upcoming", slug: "upcoming" },
        ],
      };
      filterAccordionHandler({ ...customOption, ...data });
      delete data.attributes;
      delete data.sort_by;
      setBrowesBy(data.browse_by);
      delete data.browse_by;
      setFilters({ ...customOption, ...data });
    });
  }, []);

  return (
    <Col lg={3} className="py-md-5 align-self-start pt-3 h-100 ">
      <div className="filters-side">
        <div className="d-flex justify-content-between">
          <div className="product-filter-btn" onClick={toggleClass}>
            Filters
          </div>
          <div>
            {clearFilter && checkboxes.length ? (
              <button
                onClick={() => clearAllFilters(true)}
                className="btn btn-dark btn-sm"
              >
                Clear
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={
            isActive
              ? "filter-lists product-filters"
              : "active product-filters filter-lists"
          }
        >
          <Link className="close-btn" onClick={toggleClass}>
            <IoMdClose />
          </Link>
          {defaultActiveKey.length > 0 ? (
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
                          <CheckBoxInput data={filter} name={filters[0]}/>
                          {/* <label className="cstm-chkbx" htmlFor={filter.slug}>
                            {filter.name}
                            <CheckBoxInput
                              id={filter.slug}
                              name={filters[0]}
                              value={filter.slug}
                              setClearFilter={setClearFilter}
                              filterHandler={filterHandler}
                              filterData={filterData}
                            />
                            <span className="checkmark"></span>
                          </label> */}
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
          {browesBy.length > 0 ? (
            <Accordion
              defaultActiveKey={defaultActiveKey}
              alwaysOpen
              className="px-0 filters-accordion"
            >
              {browesBy.map((item, key) => (
                <Accordion.Item eventKey={key} key={key}>
                  <Accordion.Header>{item.title} </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {item.children.map((filter, index) => (
                        <li key={index}>
                          <label
                            className="cstm-chkbx"
                            htmlFor={`${filter.start}__${item.type}`}
                          >
                            {filter.start} to {filter.end}
                            <CheckBoxInput
                              id={`${filter.start}__${item.type}`}
                              name={item.type}
                              value={`${filter.start}-${filter.end}`}
                              setClearFilter={setClearFilter}
                              filterHandler={filterHandler}
                            />
                            <span className="checkmark"></span>
                          </label>
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
