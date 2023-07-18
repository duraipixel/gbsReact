import { useState, useEffect, useMemo } from "react";
import { Col, Accordion } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { filterMenuApi } from "services/filters.service";
import { Text, toPriceString } from "utils";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setfilter } from "redux/features/filterSlice";
import CheckBoxInput from "components/CheckBoxInput";
import FilterChips from "./FilterChips";
import FiltersPlaceHolders from "./FiltersPlaceHolders";
import { IoFilterSharp } from "react-icons/io5";
import { RangeSlider } from "rsuite";
import 'rsuite/dist/rsuite.min.css';

const ProductFilter = ({
  setCurrentLocation,
  setClearFilter,
  filterData,
}) => {
  const filter = useSelector((state) => state.filter)
  const [defaultActiveKey, setDefaultActiveKey] = useState(['brands', 'exclusive', 'categories', 'discounts']);
  const [isActive, setActive] = useState(window.innerWidth > 992 ? true : false);
  const [Filters, setFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([25000, 75000]);
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
    if (e.target.value) {
      setFilterParams("sort_by", e.target.value)
      setClearFilter(true)
    } else {
      setClearFilter(false)
    }
  };
  const setFilterParams = (name, value) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(name, value)
    setCurrentLocation(`?${searchParams.toString()}`)
    navigate(`/products?${searchParams.toString()}`)
    dispatch(setfilter(`/products?${searchParams.toString()}`));
  }
  useMemo(() => {
    try {
      const currentfilter = filter.split('?')[1].split('=')
      if (currentfilter[0] === 'prices') {
        setPriceRange(currentfilter[1].split('-'))
      }
    } catch (error) {
    }
  }, [filter])
  useEffect(() => {
    filterMenuApi().then(({ data }) => {
      filterAccordionHandler(data);
      setFilters(data);
    });
  }, []);

  return (
    <Col lg={2} className={`p-0 ${window.innerWidth > 992 ? 'sticky-top' : ''} sticky-padding`} >
      {window.innerWidth < 992 ?
        <div className="mb-2">
          <div className="filter-title ps-0 d-flex align-items-center justify-content-between">
            <div>
              <button className="btn btn-sm btn-outline-primary rounded-pill px-2 me-3" onClick={() => setActive(!isActive)}>
                <IoFilterSharp />
              </button>
              FILTER BY
            </div>
            {
              filter !== '' && filter !== '/products?' ?
                <span className="small text-danger" onClick={clearAllFilters} > <i className="fa fa-times"></i> clear all</span>
                : ''
            }
          </div>
          <div>
            {
              filter !== '' && filter !== '/products?' ?
                <FilterChips />
                : ''
            }
          </div>
        </div>
        : ''}
      {
        isActive ?
          <div className="filters-side px-3 pb-4">
            <div className={`${isActive ? "active" : ""} pt-0  product-filters filter-lists`}>
              <div className="sticky-top bg-white">
                {
                  window.innerWidth < 992 ? <button className="float-end btn btn-sm btn-light border py-1 mt-1 rounded-pill" onClick={() => setActive(!isActive)}>
                    <IoMdClose />
                  </button> : null
                }
                <div>
                  <h6 className="filter-title py-2">SORT BY</h6>
                  <select
                    className="form-select form-select-sm"
                    id="enq"
                    name="enq"
                    onChange={filterHandler}
                    value={searchParams.get('sort_by') || ''}
                  >
                    <option value="" > -- sort by -- </option>
                    <option value="a-to-z" >A to Z</option>
                    <option value="z-to-a" >Z to A</option>
                    <option value="price-high-to-low" >High to Low</option>
                    <option value="price-low-to-high">Low to High</option>
                  </select>
                </div>
              </div>

              {filter !== '' && filter !== '/products?' ?
                <div className="my-2">
                  <h4 className="filter-title d-flex align-items-center justify-content-between">
                    FILTER BY
                    <span className="small text-danger" onClick={clearAllFilters} > <i className="fa fa-times"></i> clear all</span>
                  </h4>
                  <FilterChips />
                </div>
                : ''}
              <div className="my-2">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="filter-title py-2">PRICE</h6>
                  <div >
                    <small>₹{priceRange[0]}</small>
                    <small> to </small>
                    <small>₹{toPriceString(priceRange[1])}</small>
                  </div>
                </div>
                <RangeSlider step={5000} max={200000} min={5000} defaultValue={priceRange} onChange={(e) => { setPriceRange(e); setFilterParams("prices", e.join('-')) }} />
                <div className="d-flex text-secondary align-items-center justify-content-between pt-2">
                  <small><i>₹5000</i></small>
                  <small><i>₹200000</i></small>
                </div>
              </div>
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
          : ''
      }
    </Col>
  );
};

export default ProductFilter;
