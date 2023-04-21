import ContactUs from "components/ContactUs/ContactUs";
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

function ContactUsPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <ContactUs />  
    </div>
  );
}

export default ContactUsPage