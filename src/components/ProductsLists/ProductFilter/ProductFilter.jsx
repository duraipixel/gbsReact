import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';

const ProductFilter = () => {
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  return (
    <Col lg={3} className="py-md-5 align-self-start pt-3 h-100 ">
      <div className="filters-side sticky-top">
        <Link className="product-filter-btn" onClick={ToggleClass}>
          Filters
        </Link>
        <div
          className={
            isActive
              ? "filter-lists product-filters"
              : "active product-filters filter-lists"
          }
        >
          <Link className="close-btn" onClick={ToggleClass}>
            <IoMdClose />
          </Link>
          <Accordion defaultActiveKey={['0','1']} alwaysOpen className="filters-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Product Availability</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      In Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Upcoming
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      Exclude Out Of Stock
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <label className="cstm-chkbx">
                      Below <sup>₹</sup>30,000
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>30,000 to <sup>₹</sup>49,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>50,000 to <sup>₹</sup>69,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>70,000 to <sup>₹</sup>99,999
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                  <li>
                    <label className="cstm-chkbx">
                      <sup>₹</sup>1,00,000 & above
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Col>
  );
};

export default ProductFilter;
