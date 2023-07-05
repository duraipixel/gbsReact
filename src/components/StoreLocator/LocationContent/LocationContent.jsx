import React from "react";
import { Col, Container } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import "./styles.scss";
import { Link } from "react-router-dom";
import { HalfHeightLoader, openInNewTab } from "utils";
import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import { BsWhatsapp } from "react-icons/bs";

const LocationContent = ({ storeData, fetching }) => {
  // console.log(storeData && storeData.data);
  return fetching ? (
    <HalfHeightLoader />
  ) : (
    <div className="py-5">
      <Container>
        {storeData &&
          storeData.data.map((item) => (
            <div key={item.id}>
              <div className="flex-jc-btwn flex-wrap location-content-div">
                <Col lg={9}>
                  <div className="location-content">
                    <h2 className="h2">{item.title}</h2>
                    {item.address && (
                      <div className="align-c gap-3">
                        <RiMapPinLine />
                        {item.address}
                      </div>
                    )}
                    {item.group_contacts && (
                      <div className="align-c gap-3">
                        <FiPhone />
                        {item.group_contacts.split(",").map((num, i) => (
                          <Link
                            style={{ color: "black" }}
                            key={i}
                            rel="noopener noreferrer"
                            onClick={() => openInNewTab(`tel:${num}`)}
                          >
                            {num}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.group_emails && (
                      <div className="align-c gap-3">
                        <TfiEmail />
                        {item.group_emails.split(",").map((mail, i) => (
                          <Link
                            style={{ color: "black" }}
                            key={i}
                            rel="noopener noreferrer"
                            onClick={() => openInNewTab(`mailto:${mail}`)}
                          >
                            {mail}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.whatsapp_no && (
                      <div className="align-c gap-3">
                        <BsWhatsapp />
                        <Link
                          style={{ color: "black" }}
                          rel="noopener noreferrer"
                          onClick={() =>
                            openInNewTab(`https://wa.me/${item.whatsapp_no}`)
                          }
                        >
                          {item.whatsapp_no}
                        </Link>
                      </div>
                    )}
                  </div>
                </Col>
                <Col className="flex-d-clm-align-c flex-jc-s-a find-us-on-map gap-1">
                  <Link
                    to={`/${item.slug}`}
                    className="btn-red-outline"
                  >
                    More Details
                  </Link>
                  <div>
                    <p>Find us on</p>
                    <iframe
                      style={{ width: "80px", height: "80px", border: "0" }}
                      src={item.map_link}
                      frameBorder="0"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Contact Map"
                    ></iframe>
                    {/* <img
                      src={require("assets/Store/GooglePin.png")}
                      alt="GooglePin"
                    /> */}
                  </div>
                </Col>
              </div>
            </div>
          ))}
        {storeData.data.length === 0 && (
          <NoDataComponent data={"No Data have been found..."} />
        )}

        {/* <div className="flex-center mt-3">
          <Link className="btn-trans mt-3 p-2 ps-4 pe-4">Load More</Link>
        </div> */}
      </Container>
    </div>
  );
};

export default LocationContent;
