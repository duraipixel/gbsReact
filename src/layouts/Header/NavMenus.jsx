import { useNavigate } from "react-router-dom";
import { Placeholder } from "react-bootstrap";
import { useNavMenuQuery } from "redux/features/homePage/navMenuService";
import { useMemo, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setfilter } from "redux/features/filterSlice";

export default function NavMenus({ toggleHeader }) {
  return (
    <div className="nav-menus shadow">
      <NavMenuList className="acc-list" toggleHeader={toggleHeader} />
    </div>
  );
}

export const NavMenuList = ({ className, toggleHeader }) => {
  const { data, isSuccess, isLoading } = useNavMenuQuery();
  const [topBrand, setTopBrand] = useState('acer')
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const linkHandler = (slug) => {
    if (toggleHeader) toggleHeader();
    navigate(slug);
    dispatch(setfilter(slug))
  };
 
  useMemo(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/get/brands/top`).then(res => {
      setTopBrand(res.data.slug)
    })
  }, [])
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
        </>
      )}
      {isSuccess && (
        <div className="menu-list">
          <ul className="list-group list-group-flush">
            <li className="list-group-item px-3" onClick={() => linkHandler(`products?exclusive=gbs`)}  >
              <div className="d-flex justify-content-between align-items-center">
                <svg width="35px" height="35px" viewBox="0 0 35 35">
                  <title>Exclusive</title>
                  <g
                    id="Header-Navigation-Journey"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="02_Header-and-Navigation"
                      transform="translate(-62.000000, -138.000000)"
                    >
                      <g
                        id="Group-4"
                        transform="translate(46.000000, 68.100505)"
                      >
                        <g
                          id="Exclusive"
                          transform="translate(16.000000, 69.899495)"
                        >
                          <rect
                            id="Rectangle"
                            x="0"
                            y="0"
                            width="35"
                            height="35"
                          ></rect>
                          <path
                            d="M6.16992441,26.7991637 C6.23882392,27.0896856 6.42332243,27.3394966 6.68073045,27.4907951 C6.93813846,27.6420937 7.24615003,27.6817688 7.53349707,27.6006404 C14.0535017,25.8004265 20.9393626,25.7997745 27.459708,27.5987537 C27.7469596,27.6797951 28.0548415,27.640124 28.3121669,27.4889128 C28.5694923,27.3377016 28.7539803,27.0880433 28.8229744,26.7976625 L32.3077604,11.9887113 C32.4029211,11.5843243 32.2607709,11.1609355 31.9408579,10.8959069 C31.620945,10.6308783 31.1785032,10.5699679 30.7988762,10.7386918 L23.883125,13.812359 C23.3655053,14.0424124 22.7578886,13.8392075 22.482801,13.3440494 L18.4561057,6.09599648 C18.2632015,5.74876869 17.8972101,5.533418 17.4999959,5.533418 C17.1027817,5.533418 16.7367903,5.74876869 16.5438861,6.09599648 L12.5171949,13.3440494 C12.2421075,13.8392053 11.6344936,14.0424099 11.116875,13.812359 L4.20007383,10.738227 C3.82052249,10.5695374 3.37817438,10.6303879 3.05826992,10.8952964 C2.73836545,11.160205 2.59611404,11.5834533 2.69108574,11.9877994 L6.16992441,26.7991637 Z"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.1249904,22.1045098 C16.0336346,21.7984963 18.9663586,21.7984963 21.8750027,22.1045098"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className={`me-auto text-dark ms-2`}>Exclusive at GBS</div>
              </div>
            </li>
            <li className="list-group-item px-3" onClick={() => linkHandler(`/products?brands=${topBrand}`)}>
              <div className="d-flex justify-content-between align-items-center">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.44582 27.5542C6.18747 26.2958 7.02209 23.6539 6.38159 22.1059C5.71763 20.5012 3.28125 19.2097 3.28125 17.4999C3.28125 15.7903 5.71764 14.4988 6.3816 12.8941C7.02209 11.3461 6.18747 8.70418 7.44582 7.44582C8.70418 6.18747 11.3461 7.02209 12.8941 6.38159C14.4988 5.71763 15.7903 3.28125 17.5001 3.28125C19.2097 3.28125 20.5013 5.71764 22.1059 6.3816C23.6539 7.02209 26.2958 6.18747 27.5542 7.44582C28.8125 8.70418 27.9779 11.3461 28.6184 12.8941C29.2824 14.4988 31.7188 15.7903 31.7188 17.5001C31.7188 19.2097 29.2824 20.5013 28.6184 22.1059C27.9779 23.6539 28.8125 26.2958 27.5542 27.5542C26.2958 28.8125 23.6539 27.9779 22.1059 28.6184C20.5012 29.2824 19.2097 31.7188 17.4999 31.7188C15.7903 31.7188 14.4988 29.2824 12.8941 28.6184C11.3461 27.9779 8.70418 28.8125 7.44582 27.5542Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.1782 13.4533V16.5749C13.1782 18.8242 14.9774 20.6886 17.2266 20.7053C18.3138 20.7135 19.3594 20.2874 20.1311 19.5215C20.9028 18.7556 21.3369 17.7133 21.3369 16.6261V13.4533C21.3369 13.2029 21.1339 13 20.8836 13H13.6315C13.3812 13 13.1782 13.2029 13.1782 13.4533Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.4446 22.9934H19.0706"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17.2792 20.7056V22.9719"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21.2358 17.5327H21.7902C22.7915 17.5327 23.6032 16.7209 23.6032 15.7196V14.8131C23.6032 14.5628 23.4003 14.3599 23.15 14.3599H21.3369"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13.2896 17.5327H12.7178C11.7165 17.5327 10.9048 16.7209 10.9048 15.7196V14.8131C10.9048 14.5628 11.1077 14.3599 11.358 14.3599H13.1711"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className={`me-auto text-dark ms-2`}>Best Sellers</div>
              </div>
            </li>
            <li
              className="list-group-item px-3"
              onClick={() => linkHandler(`/store-locator-for-sales`)} 
            >
              <div className="d-flex justify-content-between align-items-center">
                <svg width="35px" height="35px" viewBox="0 0 35 35">
                  <g
                    id="Header-Navigation-Journey"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="02_Header-and-Navigation"
                      transform="translate(-62.000000, -237.000000)"
                    >
                      <g
                        id="Group-4"
                        transform="translate(46.000000, 68.100505)"
                      >
                        <g
                          id="Croma-Outlet"
                          transform="translate(16.000000, 168.899495)"
                        >
                          <rect
                            id="Rectangle"
                            x="0"
                            y="0"
                            width="35"
                            height="35"
                          ></rect>
                          <path
                            d="M6.5625,19.0843187 L6.5625,28.4375 C6.5625,29.0415614 7.05218855,29.53125 7.65625,29.53125 L27.34375,29.53125 C27.9478114,29.53125 28.4375,29.0415614 28.4375,28.4375 L28.4375,19.084532"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.38751699,5.46875 L27.612483,5.46875 C28.1008208,5.46875 28.5299928,5.79247518 28.6641496,6.26202363 L30.625,13.125 L4.375,13.125 L6.33585039,6.26202363 C6.47000715,5.79247518 6.89917922,5.46875 7.38751699,5.46875 Z"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.125,13.125 L13.125,15.3125 C13.125,17.7287458 11.1662458,19.6875 8.75,19.6875 C6.33375422,19.6875 4.375,17.7287458 4.375,15.3125 L4.375,13.125"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M21.875,13.125 L21.875,15.3125 C21.875,17.7287458 19.9162458,19.6875 17.5,19.6875 C15.0837542,19.6875 13.125,17.7287458 13.125,15.3125 L13.125,13.125"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M30.625,13.125 L30.625,15.3125 C30.625,17.7287458 28.6662458,19.6875 26.25,19.6875 C23.8337542,19.6875 21.875,17.7287458 21.875,15.3125 L21.875,13.125"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className={`me-auto text-dark ms-2`}>
                  Store locator for Sales
                </div>
              </div>
            </li>
            <li
              className="list-group-item px-3"
              onClick={() => linkHandler(`/store-locator-for-service`)} 
            >
              <div className="d-flex justify-content-between align-items-center">
                <svg width="35px" height="35px" viewBox="0 0 35 35">
                  <g
                    id="Header-Navigation-Journey"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="02_Header-and-Navigation"
                      transform="translate(-62.000000, -237.000000)"
                    >
                      <g
                        id="Group-4"
                        transform="translate(46.000000, 68.100505)"
                      >
                        <g
                          id="Croma-Outlet"
                          transform="translate(16.000000, 168.899495)"
                        >
                          <rect
                            id="Rectangle"
                            x="0"
                            y="0"
                            width="35"
                            height="35"
                          ></rect>
                          <path
                            d="M6.5625,19.0843187 L6.5625,28.4375 C6.5625,29.0415614 7.05218855,29.53125 7.65625,29.53125 L27.34375,29.53125 C27.9478114,29.53125 28.4375,29.0415614 28.4375,28.4375 L28.4375,19.084532"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M7.38751699,5.46875 L27.612483,5.46875 C28.1008208,5.46875 28.5299928,5.79247518 28.6641496,6.26202363 L30.625,13.125 L4.375,13.125 L6.33585039,6.26202363 C6.47000715,5.79247518 6.89917922,5.46875 7.38751699,5.46875 Z"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M13.125,13.125 L13.125,15.3125 C13.125,17.7287458 11.1662458,19.6875 8.75,19.6875 C6.33375422,19.6875 4.375,17.7287458 4.375,15.3125 L4.375,13.125"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M21.875,13.125 L21.875,15.3125 C21.875,17.7287458 19.9162458,19.6875 17.5,19.6875 C15.0837542,19.6875 13.125,17.7287458 13.125,15.3125 L13.125,13.125"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M30.625,13.125 L30.625,15.3125 C30.625,17.7287458 28.6662458,19.6875 26.25,19.6875 C23.8337542,19.6875 21.875,17.7287458 21.875,15.3125 L21.875,13.125"
                            id="Path"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <div className={`me-auto text-dark ms-2`}>
                  Store locator for service
                </div>
              </div>
            </li>
            <div className="px-3 py-2 nav-heading">Shop by Category</div>
            {data &&
              data.data.map((item) => (
                <div className="dropdown" key={item.id}>
                  <li className="list-group-item px-3" style={{ border: "0" }} >
                    <div className="d-flex justify-content-between align-items-center">
                      <span onClick={() => linkHandler(`/products?categories=${item.name.toLowerCase()}`)} className={`me-auto text-dark dropbtn`}>
                        {item.name}
                      </span>
                      {item.child && item.child.length > 0 && (
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
                    {item.child && item.child.length > 0 && (
                      <ul className="dropdown-content" key={item.id}>
                        {item.child.map((data) => (
                          <li
                            key={data.id}
                            className="list-group-item px-3"
                            onClick={() => linkHandler(`/products?categories=${data.slug.toLowerCase()}`) }
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
    </>
  );
};
