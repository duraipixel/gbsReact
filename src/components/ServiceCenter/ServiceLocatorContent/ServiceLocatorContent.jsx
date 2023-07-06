import { Container, ListGroup } from "react-bootstrap";
import { FiPhone } from "react-icons/fi";
import { RiMapPinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import "components/StoreLocator/LocationContent/styles.scss";
import { Link } from "react-router-dom";
import { HalfHeightLoader, openInNewTab } from "utils";
import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import { BsWhatsapp } from "react-icons/bs";

const ServiceLocatorContent = ({ fetching, serviceCenterFilteredData }) => {
  return fetching ? (
    <HalfHeightLoader />
  ) : (
    <Container>
      <div className="py-3">
        <ListGroup>
          {serviceCenterFilteredData &&
            serviceCenterFilteredData.data.map((item, index) => (
              <ListGroup.Item key={index} action as={Link} to={`/${item.slug}`}>
                <div className="row">
                  <div className="col-md-8">
                    <h4>{item.title}</h4>
                    {item.address && (
                      <address className="m-0">  <RiMapPinLine />  <span className="ms-2">{item.address}</span>  </address>
                    )}
                    {item.group_contacts && (
                      <div>
                        <FiPhone />
                        {item.group_contacts.split(",").map((num, i) => (
                          <Link className="text-dark ms-2" key={i} rel="noopener noreferrer" onClick={() => openInNewTab(`tel:${num}`)} >
                            {num}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.group_emails && (
                      <div className="d-flex align-items-center">
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
                    {item.whatsapp_no && (
                      <div>
                        <BsWhatsapp />
                        <Link className="text-dark ms-2" rel="noopener noreferrer" onClick={() => openInNewTab(`https://wa.me/${item.whatsapp_no}`)} >
                          {item.whatsapp_no}
                        </Link>
                      </div>
                    )}
                    <Link to={`/${item.slug}`} className="btn btn-outline-danger mt-3">
                      More Details
                    </Link>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="py-2"><b>Find us on</b></div>
                    <iframe width={'100%'} src={item.map_link} title={item.title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Contact Map"></iframe>
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
