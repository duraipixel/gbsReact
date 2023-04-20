import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Button,
  Placeholder,
  useAccordionButton,
} from "react-bootstrap";
import { useNavMenuQuery } from "redux/features/homePage/navMenuService";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavMenus() {
  return (
    <div className="nav-menus shadow">
      <div className="nav-menu-banner">
        <img
          src={require("../../assets/images/computer.png")}
          className="d-block w-100"
          height={120}
          alt="menu"
        />
        <div className="carousel-caption p-0">
          <h5>What are you looking for today?</h5>
        </div>
      </div>
      <NavMenuList className="px-2" />
    </div>
  );
}
export const NavMenuList = ({ className }) => {
  const { data, isSuccess, isLoading } = useNavMenuQuery();
  return (
    <>
      {isLoading && (
        <>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item p-4" />
          </Placeholder>
        </>
      )}
      {isSuccess && (
        <Accordion defaultActiveKey="0" className={className}>
          <ul className="list-group list-group-flush">
            {data.data.map((item) => (
              <li className="list-group-item p-3" key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/" className={`me-auto text-dark`}>
                    {" "}
                    {item.name}{" "}
                  </Link>
                  {item.child.length > 0 && (
                    <AccordionToggler eventKey={item.id} />
                  )}
                </div>
                {item.child.length > 0 && (
                  <Accordion.Collapse eventKey={item.id}>
                    <ul className="list-group list-group-flush">
                      {item.child.map((data) => (
                        <li key={data.id} className="list-group-item pt-3">
                          <Link to="/" className={`me-auto text-dark`}>
                            {" "}
                            {data.name}{" "}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Collapse>
                )}
              </li>
            ))}
          </ul>
        </Accordion>
      )}
    </>
  );
};

function AccordionToggler({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  return (
    <Button className="btn-sm" variant="light" onClick={decoratedOnClick}>
      {activeEventKey === eventKey ? <BsChevronDown /> : <BsChevronRight />}
    </Button>
  );
}
