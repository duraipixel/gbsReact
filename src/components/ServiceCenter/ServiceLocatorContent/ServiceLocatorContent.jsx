import { Container, ListGroup } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import "components/StoreLocator/LocationContent/styles.scss";
import { Link } from "react-router-dom";
import { HalfHeightLoader, openInNewTab } from "utils";
import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegHandPointRight } from "react-icons/fa";

const ServiceLocatorContent = ({ fetching, serviceCenterFilteredData }) => {
  return fetching ? (
    <HalfHeightLoader />
  ) : (
    <Container className="col-md-8">
      <div className="py-3">
        <ListGroup>
          {serviceCenterFilteredData &&
            serviceCenterFilteredData.data.map((item, index) => (
              <ListGroup.Item key={index} action >
                <div className="row">
                  <div className="col-md-8">
                    <h6 className="fw-bold">{item.title}</h6>
                    {item.address && (
                      <address className="m-0 d-flex align-items-centyer">
                        <div><RiMapPinLine /> </div>
                        <span className="ms-2">{item.address}</span>
                      </address>
                    )}
                    {item.group_contacts && (
                      <div className="text-info my-2">
                        <FiPhone />
                        {item.group_contacts.split(",").map((num, i) => (
                          <Link className="text-info ms-2" key={i} rel="noopener noreferrer" onClick={() => openInNewTab(`tel:${num}`)} >
                            <u>{num}</u>
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.group_emails && (
                      <div className="d-flex align-items-center mb-2">
                        <TfiEmail />
                        <div className="d-flex flex-wrap  ms-2">
                          {item.group_emails.split(",").map((mail, i) => (
                            <Link className="text-dark" key={i} rel="noopener noreferrer" onClick={() => openInNewTab(`mailto:${mail}`)} >
                              {mail}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="d-flex flex-column flex-md-row">
                      {item.whatsapp_no && (
                        <div className="mt-2">
                          <FaRegHandPointRight className="me-2" />
                          <div onClick={() => openInNewTab(`https://wa.me/${item.whatsapp_no}`)} className="btn btn-success me-2">
                            <BsWhatsapp />
                            <b className="ms-2">{item.whatsapp_no}</b>
                          </div>
                        </div>
                      )}
                      <Link to={`/${item.slug}`} className="btn btn-outline-danger mt-2">
                        More details ...
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="py-2"><b>Find us on</b></div>
                    <iframe className="rounded border shadow-sm bg-secondary" width={'100%'} src={item.map_link} title={item.title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
        {serviceCenterFilteredData.data.length === 0 && (
          <NoDataComponent data={"No Data have been found..."} />
        )}
      </div>
    </Container>
  );
};

export default ServiceLocatorContent;
