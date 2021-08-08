import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChairListAction } from "../../../../store/actions/movie.action";
import SeatMain from "../../../components/movie-components/seat-booking-components/seat-main/seat-main";
import TopHeader from "../../../components/movie-components/seat-booking-components/top-header/top-header";

function SeatBooking() {
  const userBooking = JSON.parse(localStorage.getItem("userBooking"));
  const { maLichChieu } = userBooking;
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.movie.ticket);

  useEffect(() => {
    dispatch(getChairListAction(maLichChieu));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TopHeader ticket={ticket} />
      <SeatMain />
    </div>
  );
}

export default memo(SeatBooking);
