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
      <section className="banner">
        <Container>
          <Col>
            <h2 className="text-center">Store Locator</h2>
            <div>
              <div className="m-2 flex-center flex-wrap">
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
                <input
                  type="number"
                  placeholder="Search by Pincode"
                  onChange={(e) => {
                    setPostCode(e.target.value);
                  }}
                />
              </div>
            </div>
          </Col>
        </Container>
      </section>
    )
  );
};

export default StoreLocatorBanner;
