import ContactUs from "components/ContactUs/ContactUs";
import { Helmet } from "react-helmet";

function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>Conatct Us - GBS Systems</title>
        <link rel="canonical" href={window.location.href} />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
        <meta name="description" content={"page?.meta?.description"} />
        <meta name="keywords" content={"page?.meta?.keywords"} />
      </Helmet>
      <ContactUs />
    </>
  );
}

export default ContactUsPage;
