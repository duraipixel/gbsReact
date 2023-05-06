// import { useContext } from "react";
import {
  // Accordion,
  Placeholder,
  // AccordionContext,
  // Button,
  // useAccordionButton,
} from "react-bootstrap";
import { useNavMenuQuery } from "redux/features/homePage/navMenuService";
// import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import {
  Link,
  // useNavigate
} from "react-router-dom";

export default function NavMenus({ toggleHeader }) {
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
      <NavMenuList className="px-2" toggleHeader={toggleHeader} />
    </div>
  );
}
export const NavMenuList = ({ className, toggleHeader }) => {
  const { data, isSuccess, isLoading } = useNavMenuQuery();
  // console.log(data);
  // const navigate = useNavigate();
  // const linkHandler = (slug) => {
  //   if (toggleHeader) {
  //     toggleHeader();
  //   }
  //   navigate(`/products?${slug}`);
  // };
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
      {/* {isSuccess && (
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
                        <li key={data.id} className="list-group-item pt-3" onClick={() => linkHandler(data.slug)}>
                          {data.name}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Collapse>
                )}
              </li>
            ))}
          </ul>
        </Accordion>
      )} */}
      {isSuccess && (
        <ul className="list-group list-group-flush">
          {data.data.map((item) =>
            item.child.map((data) => (
              <li className="list-group-item p-3" key={data.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to={`/products?${data.slug}`}
                    className={`me-auto text-dark`}
                  >
                    {data.name}
                  </Link>
                </div>
              </li>
            ))
          )}
          <li className="list-group-item p-3">
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/store-locator" className={`me-auto text-dark`}>
                Store Locator
              </Link>
            </div>
          </li>
          <li className="list-group-item p-3">
            <div className="d-flex justify-content-between align-items-center">
              <Link
                to="/service-center-locator"
                className={`me-auto text-dark`}
              >
                Service Center Locator
              </Link>
            </div>
          </li>
        </ul>
      )}
    </>
  );
};

// function AccordionToggler({ eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);
//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey)
//   );

//   return (
//     <Button className="btn-sm" variant="light" onClick={decoratedOnClick}>
//       {activeEventKey === eventKey ? <BsChevronDown /> : <BsChevronRight />}
//     </Button>
//   );
// }
