import { useState, useEffect } from "react";
import { Col, Accordion } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { filterMenuApi } from "services/filters.service";
import { CheckBoxInput, Text } from "utils";
import { IoMdClose } from "react-icons/io";

const ProductFilter = ({ setCurrentLocation, setClearFilter, clearFilter }) => {

  const [defaultActiveKey, setDefaultActiveKey] = useState([]);
  const [isActive, setActive] = useState("false");
  const [Filters, setFilters] = useState(false);
  const toggleClass = () => setActive(!isActive);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const filterHandler = (type, value) => {
    searchParams.set(type, typeof (value) === 'object' ? value.join("_") : value);
    setCurrentLocation(`?${searchParams.toString()}`)
    navigate(`/products?${searchParams.toString()}`);
  }

  const clearAllFilters = () => {
    var checkboxes = document.querySelectorAll('input:checked')
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == 'checkbox') {
        checkboxes[i].checked = false;
      }
    }
    setCurrentLocation('');
    setClearFilter(false)
    navigate('/products')
  }

  const filterAccordionHandler = (filters) => {
    const tempArr = []
    Object.keys(filters).forEach((item) => {
      if (searchParams.get(item) !== null) {
        tempArr.push(item)
      }
    })
    if (tempArr.length > 0) {
      setDefaultActiveKey(tempArr)
    } else {
      setDefaultActiveKey(['product_availability', 'brands'])
    }
  }

  useEffect(() => {
    filterMenuApi().then(({ data }) => {
      delete data.attributes
      delete data.browse_by
      var customOption = {
        product_availability: [
          { name: "In Stock", slug: 'in-stock' },
          { name: "Upcoming", slug: 'upcoming' }
        ]
      }
      setFilters({ ...customOption, ...data })
      filterAccordionHandler({ ...customOption, ...data })
    })
  }, [])

  return (
    <Col lg={3} className="py-md-5 align-self-start pt-3 h-100 ">
      <div className="filters-side">
        <div className="d-flex justify-content-between" >
          <div className="product-filter-btn" onClick={toggleClass}>Filters</div>
          <div>
            {clearFilter ? <button onClick={() => clearAllFilters(true)} className="btn btn-dark btn-sm">Clear</button> : ''}
          </div>
        </div>
        <div className={isActive ? "filter-lists product-filters" : "active product-filters filter-lists"}>
          <Link className="close-btn" onClick={toggleClass}>
            <IoMdClose />
          </Link>
          {
            defaultActiveKey.length > 0
              ?
              <Accordion defaultActiveKey={defaultActiveKey} alwaysOpen className="px-0 filters-accordion">
                {
                  Object.entries(Filters).map((filters, key) => (
                    <Accordion.Item eventKey={filters[0]} key={key}>
                      <Accordion.Header>{Text(filters[0])} </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          {
                            filters[1].map((filter, index) => (
                              <li key={index}>
                                <label className="cstm-chkbx" htmlFor={filter.name}>
                                  {filter.name}
                                  <CheckBoxInput id={filter.name} name={filters[0]} value={filter.slug} setClearFilter={setClearFilter} filterHandler={filterHandler} />
                                  <span className="checkmark"></span>
                                </label>
                              </li>
                            ))
                          }
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))
                }
              </Accordion>
              : ''
          }
        </div>
      </div>
    </Col>
  );
};

export default ProductFilter;
