import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from "react";
import { filterMenuApi } from "services/filters.service";
import { CheckBoxInput, Text } from "utils";

const ProductFilter = ({ setCurrentLocation, setClearFilter, clearFilter }) => {
  const [isActive, setActive] = useState("false");
  const [Filters, setFilters] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const filterHandler = (type, value) => {
    const searchParams = new URLSearchParams(location.search);
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
    })
  }, [])
  return (
    <Col lg={3} className="py-md-5 align-self-start pt-3 h-100 ">
      <div className="filters-side sticky-top">
        <div className="product-filter-btn d-flex justify-content-between">
          Filters
          {clearFilter ? <button onClick={() => clearAllFilters(true)} className="btn btn-dark btn-sm">Clear</button> : ''}
        </div>
        <div className={isActive ? "filter-lists product-filters" : "active product-filters filter-lists"}>
          <Link className="close-btn" onClick={ToggleClass}>
            <IoMdClose />
          </Link>
          <Accordion defaultActiveKey={['0', '1']} alwaysOpen className="px-0 filters-accordion">
            {
              Object.entries(Filters).map((filters, key) => (
                <Accordion.Item eventKey={`${key}`} key={key}>
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
        </div>
      </div>
    </Col>
  );
};

export default ProductFilter;
