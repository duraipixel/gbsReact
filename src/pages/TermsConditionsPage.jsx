import TermsConditions from 'components/TermsConditions/TermsConditions'
import React, { useEffect } from "react";
import { scrollToTop } from "utils";

function TermsConditionsPage() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <TermsConditions />
    </div>
  )
}

export default TermsConditionsPage