import ContactUs from "components/ContactUs/ContactUs";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { scrollToTop } from "utils";

function ContactUsPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{"page?.meta?.title"}</title>
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <ContactUs />
    </div>
  );
}

export default ContactUsPage;
