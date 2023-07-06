import React from "react";
import "./styles.css";
import { IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";
import logo1 from "assets/images/logo-1.png";
import logo2 from "assets/images/logo-2.png";
import logo3 from "assets/images/logo-3.png";
import logo4 from "assets/images/logo-4.png";
import logo5 from "assets/images/logo-5.png";

function WarrantyPolicy() {
  return (
    <div>
      <section className="bg-banner-liner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-liners">
                <h1>Warranty policy</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="warant-lists">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="waranty-lsts">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="clnt-img text-center">
                      <img src={logo1} alt="Dell-Icon" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="clnt-cnt">
                      <h2> Dell Support</h2>
                      <ul>
                        <li>
                          <IoCallOutline /> 18004252073 / 18004252067 /
                          18004250088
                        </li>
                        <li>
                          <IoLogoWhatsapp /> 18004250088
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="clnt-more text-end">
                      <a
                        href="https://www.dell.com/support/home/en-in"
                        target="_blank"
                      >
                        know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="waranty-lsts">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="clnt-img text-center">
                      <img src={logo2} alt="HP-Icon" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="clnt-cnt">
                      <h2> HP Support</h2>
                      <ul>
                        <li>
                          <IoCallOutline /> 18002587170
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="clnt-more text-end">
                      <a
                        href="https://support.hp.com/us-en/check-warranty"
                        target="_blank"
                      >
                        know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="waranty-lsts">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="clnt-img text-center">
                      <img src={logo3} alt="Lenovo-Icon" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="clnt-cnt">
                      <h2> Lenovo Support</h2>
                      <ul>
                        <li>
                          <IoCallOutline /> <b>Idea pad</b> : 180030005366
                        </li>
                        <li>
                          <IoCallOutline /> <b>ThinkPad</b> : 180030008465
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="clnt-more text-end">
                      <a
                        href="https://pcsupport.lenovo.com/in/en/warrantylookup#/"
                        target="_blank"
                      >
                        know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="waranty-lsts">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="clnt-img text-center">
                      <img src={logo4} alt="Acer-Icon" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="clnt-cnt">
                      <h2> Acer Support</h2>
                      <ul>
                        <li>
                          <IoCallOutline /> 1800116677 / 180030002237
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="clnt-more text-end">
                      <a
                        href="https://www.acer.com/us-en/support/index.html"
                        target="_blank"
                      >
                        know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="waranty-lsts">
                <div className="row align-items-center">
                  <div className="col-lg-2">
                    <div className="clnt-img text-center">
                      <img src={logo5} alt="Asus-Icon" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="clnt-cnt">
                      <h2> Asus Support</h2>
                      <ul>
                        <li>
                          <IoCallOutline /> 18002090365
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="clnt-more text-end">
                      <a
                        href="https://www.asus.com/in/support/warranty-status-inquiry/"
                        target="_blank"
                      >
                        know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WarrantyPolicy;
