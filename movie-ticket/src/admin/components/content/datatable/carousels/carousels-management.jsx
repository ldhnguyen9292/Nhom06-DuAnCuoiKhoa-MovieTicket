import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselListAction } from "../../../../../store/actions/carousel.actions";
import CreateFormInput from "../../create-form-input/create-form-input";
import CreateTable from "../../create-table/create-table";

function CarouselsManagement() {
  const dispatch = useDispatch();
  const keys = useSelector((state) => state.carousel.carouselKeys);
  const { keySearch, page, pageSize, sort, order } = keys;
  const array = useSelector((state) => state.carousel.carouselList);

  useEffect(() => {
    dispatch(
      getCarouselListAction(
        `?q=${keySearch}&_page=${page}&_limit=${pageSize}&_sort=${sort}&_order=${order}`
      )
    );
  }, [keys]);

  return (
    <div>
      <CreateFormInput />
      <CreateTable array={array} />
    </div>
  );
}

export default memo(CarouselsManagement);
