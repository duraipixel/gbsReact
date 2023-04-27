import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "components/StoreLocator/Banner/styles.scss";
import { useSelector } from "react-redux";

const ServiceCenterLocatorBanner = ({
  serviceCenterData,
  setCenterID,
  setBrandId,
  setPostCode,
}) => {
  // console.log(serviceCenterData, serviceCenterBrandData);
  const brands = useSelector((state) => state.homePageCollection.brands);
  return (
    serviceCenterData && (
      <section className="banner">
        <Container>
          <Col>
            <h2 className="text-center">Service Center Locator</h2>
            <Row>
              <div className="m-2 flex-center flex-wrap">
                <select
                  className=""
                  id=""
                  name=""
                  onChange={(e) => {
                    setCenterID(e.target.value);
                  }}
                >
                  <option value="">Select Service Center</option>
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
                  {brands.map((item) => (
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
            </Row>
          </Col>
        </Container>
      </section>
    )
  );
};

export default ServiceCenterLocatorBanner;
