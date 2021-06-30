import React, { useState } from "react";
import SeatMain from "../../../components/movie-components/seat-booking-components/seat-main/seat-main";
import TopHeader from "../../../components/movie-components/seat-booking-components/top-header/top-header";

function SeatBooking() {
  const [ticket, setTicket] = useState(0);

  const handleChooseTicket = (value) => {
    if (value) {
      setTicket(ticket + 1);
    } else {
      setTicket(ticket - 1);
    }
  };

  return (
    <div>
      <TopHeader ticket={ticket} />
      <SeatMain handleChooseTicket={handleChooseTicket} />
    </div>
  );
}

export default SeatBooking;
