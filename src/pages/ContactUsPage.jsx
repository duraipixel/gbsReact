import ContactUs from "components/ContactUs/ContactUs";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function ContactUsPage() {
  const [page, setPage] = useState([]);
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{page?.meta?.title || "Conatct Us | GBS "}</title>
        <link rel="canonical" href={window.location.href} />
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <ContactUs />
    </div>
  );
}

export default ContactUsPage;
