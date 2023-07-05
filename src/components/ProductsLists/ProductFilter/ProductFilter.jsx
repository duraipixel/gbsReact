import { useState, useEffect } from "react";
import { Col, Accordion, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { filterMenuApi } from "services/filters.service";
import { Text } from "utils";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setfilter } from "redux/features/filterSlice";
import CheckBoxInput from "components/CheckBoxInput";
import FilterChips from "./FilterChips";
import FiltersPlaceHolders from "./FiltersPlaceHolders";

const ProductFilter = ({
  setCurrentLocation,
  setClearFilter,
  filterData,
}) => {
  const filter = useSelector((state) => state.filter)
  const [defaultActiveKey, setDefaultActiveKey] = useState(['brands', 'exclusive', 'categories', 'discounts']);
  const [isActive, setActive] = useState("false");
  const [Filters, setFilters] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  filterData = filterData && filterData.split("=");
  filterData = filterData && filterData[1].split("_");

  const clearAllFilters = () => {
    navigate("/products");
    dispatch(setfilter(''))
    var checkboxes = document.querySelectorAll(`.product-check-input`)
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false
    }
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


  const filterHandler = (e) => {
    const searchParams = new URLSearchParams(location.search)
    if (e.target.value) {
      searchParams.set("sort_by", e.target.value)
      setCurrentLocation(`?${searchParams.toString()}`)
      navigate(`/products?${searchParams.toString()}`)
      setClearFilter(true)
    } else {
      setClearFilter(false)
    }
  };
  useEffect(() => {
    filterMenuApi().then(({ data }) => {
      filterAccordionHandler(data);
      setFilters(data);
    });
  }, []);

  return (
    <Col lg={2} className="align-self-start h-100 ps-lg-0 h-100 pe-lg-4 sticky-top sticky-padding" >
      {
        window.innerWidth < 992 ? <div className="btn-filter" onClick={() => setActive(!isActive)}>Filter by</div> : ""
      }
      <div className="filters-side">
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
          <div className="mb-3">
            <h6 className="filter-title py-2">SORT BY</h6>
            <select
              className="form-select form-select-sm"
              id="enq"
              name="enq"
              onChange={filterHandler}
              value={searchParams.get('sort_by') || ''}
            >
              <option value="price-high-to-low" >High to Low</option>
              <option value="price-low-to-high">Low to High</option>
            </select>
          </div>
          {filter !== '' && filter !== '/products?' ?
            <div className="mb-2">
              <h4 className="filter-title d-flex align-items-center justify-content-between">
                FILTER BY
                <span className="small text-danger" onClick={clearAllFilters} > <i className="fa fa-times"></i> clear all</span>
              </h4>
              <FilterChips />
            </div>
            : ''}
          {
            Filters === false ? <FiltersPlaceHolders /> :
              defaultActiveKey?.length > 0 ? (
                <Accordion
                  defaultActiveKey={defaultActiveKey}
                  alwaysOpen
                  className="px-0 filters-accordion"
                >
                  {Object.entries(Filters).map((filters, key) => (
                    <Accordion.Item eventKey={filters[0]} key={key}>
                      <Accordion.Header className="py-2">
                        <span className="filter-title">{Text(filters[0])}</span>
                      </Accordion.Header>
                      <Accordion.Body className="p-0">
                        <ul style={{ maxHeight: 195, overflow: 'auto' }}>
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
              ) : ""
          }
        </div>
      </div>
    </Col>
  );
};

export default ProductFilter;
