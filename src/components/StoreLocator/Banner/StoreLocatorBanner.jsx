import React from "react";
import "./styles.scss";
import { Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const StoreLocatorBanner = ({
  serviceCenterData,
  setCenterID,
  setBrandId,
  setPostCode,
}) => {
  const brands = useSelector((state) => state.footerCollection.brands);

  return (
    serviceCenterData && (
      <div className="banner py-3">
        <Container>
          <Col>
            <h1 className="text-center">Store locator for Sales</h1>
            <div>
              <div className="m-2 flex-center flex-wrap">
                <Col lg={4}>
                  <select
                    className=""
                    id=""
                    name=""
                    onChange={(e) => {
                      setCenterID(e.target.value);
                    }}
                  >
                    <option value="">Select Store</option>
                    {serviceCenterData.data.map((item) => (
                      <option value={item.id} key={item.id}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col lg={4}>
                  <select
                    className=""
                    id=""
                    name=""
                    onChange={(e) => {
                      setBrandId(e.target.value);
                    }}
                  >
                    <option value="">Select Brand</option>
                    {brands &&
                      brands.map((item) => (
                        <option value={item.id} key={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </select>
                </Col>
                <Col lg={4}>
                  <input
                    type="number"
                    placeholder="Search by Pincode"
                    onChange={(e) => {
                      setPostCode(e.target.value);
                    }}
                  />
                </Col>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    )
  );
};

export default StoreLocatorBanner;
