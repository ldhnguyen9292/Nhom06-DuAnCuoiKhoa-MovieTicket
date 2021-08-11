import React, { memo } from "react";
import BSContent from "../../../components/movie-components/booking-summary-components/booking-sum-content/booking-sum-content";
import BSTopHeader from "../../../components/movie-components/booking-summary-components/booking-sum-top-header/bs-top-header";

function BookingSummary() {
  return (
    <div>
      <BSTopHeader />
      <BSContent />
    </div>
  );
}

export default memo(BookingSummary);
