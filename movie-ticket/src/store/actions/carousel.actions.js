import {
  GET_CAROUSEL_LIST,
  PUT_CAROUSEL_KEY,
} from "./../constants/carousel.constants";
import axios from "axios";

export const getCarouselListAction = (querParams) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://mock-apis-test.herokuapp.com/carouselList${querParams}`,
      });
      const length = res.headers[`x-total-count`];
      dispatch({
        type: GET_CAROUSEL_LIST,
        payload: { data: res.data, length: length },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const putCarouselKeyAction = (data) => {
  return { type: PUT_CAROUSEL_KEY, payload: data };
};
