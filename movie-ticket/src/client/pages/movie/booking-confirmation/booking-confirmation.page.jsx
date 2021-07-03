import React from "react";
import BCContent from "../../../components/movie-components/booking-confirmation-components/bc-content/bc-content";
import BCTopHeader from "../../../components/movie-components/booking-confirmation-components/bc-top-header/bc-top-header";

function BookingConfirmation() {
  return (
    <>
      <BCTopHeader title="Xác nhận" />
      <BCContent />
    </>
  );
}

export default BookingConfirmation;
