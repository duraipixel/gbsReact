import { useNavigate, Link } from "react-router-dom";
// import { useContext } from "react";
// import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import {
  Placeholder,
  Accordion,
  // AccordionContext,
  // Button,
  // useAccordionButton,
} from "react-bootstrap";
import { useNavMenuQuery } from "redux/features/homePage/navMenuService";

export default function NavMenus({ toggleHeader }) {
  return (
    <div className="nav-menus shadow">
      <NavMenuList className="acc-list" />
    </div>
  );
}

export const NavMenuList = ({ className, toggleHeader }) => {
  const { data, isSuccess, isLoading } = useNavMenuQuery();
  // console.log(data);
  const navigate = useNavigate();
  const linkHandler = (slug) => {
    if (toggleHeader) {
      toggleHeader();
    }
    navigate(`/products?${slug}`);
  };
  return (
    <>
      {isLoading && (
        <>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
          <Placeholder as="div" animation="glow" className="m-2">
            <Placeholder xs={12} className="list-group-item px-3 p-4" />
          </Placeholder>
        </>
      )}
      {isSuccess && (
        <div className="menu-list">
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-3" onClick={() => navigate("/")}>
              <div className="d-flex justify-content-between align-items-center">
                <div className={`me-auto text-dark`}>Exclusive at GBS</div>
              </div>
            </li>
            <li className="list-group-item px-3" onClick={() => navigate("/")}>
              <div className="d-flex justify-content-between align-items-center">
                <div className={`me-auto text-dark`}>Top Brand</div>
              </div>
            </li>
            <li
              className="list-group-item px-3"
              onClick={() => navigate("/service-center-locator")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className={`me-auto text-dark`}>Store Locator</div>
              </div>
            </li>

            <li
              className="list-group-item px-3"
              onClick={() => navigate("/service-center-locator")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className={`me-auto text-dark`}>
                  Service Center Locator
                </div>
              </div>
            </li>
            <div className="px-3 py-2 nav-heading">Shop by Category</div>
            {data &&
              data.data.map((item) => (
                <div className="dropdown" key={item.id}>
                  <li className="list-group-item px-3" style={{ border: "0" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/" className={`me-auto text-dark dropbtn`}>
                        {item.name}
                      </Link>
                      {item.child.length > 0 && (
                        <div className="drop-arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                          >
                            <path
                              d="M1 13L7 7L1 1"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    {item.child.length > 0 && (
                      <ul className="dropdown-content" key={item.id}>
                        {item.child.map((data) => (
                          <li
                            key={data.id}
                            className="list-group-item px-3"
                            onClick={() => linkHandler(data.slug)}
                          >
                            {data.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </div>
              ))}
          </ul>
        </div>
      )}
      {/* {isSuccess && (
        <Accordion defaultActiveKey="0" className={className}>
          <ul className="list-group list-group-flush">
            {data.data.map((item) => (
              <li className="list-group-item px-3" key={item.id}>
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
                        <li
                          key={data.id}
                          className="list-group-item px-3 pt-3"
                          onClick={() => linkHandler(data.slug)}
                        >
                          {data.name}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Collapse>
                )}
              </li>
            ))}
          </ul>
        
      )} */}
      {/* {isSuccess && (
        <div className={className}>
          <ul className="list-group list-group-flush">
            {data.data.map((item) =>
              item.child.map((data) => (
                <li className="list-group-item px-3" key={data.id}>
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
            <li className="list-group-item px-3">
              <div className="d-flex justify-content-between align-items-center">
                <Link to="/store-locator" className={`me-auto text-dark`}>
                  Store Locator
                </Link>
              </div>
            </li>
            <li className="list-group-item px-3">
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
        </div>
      )} */}
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
