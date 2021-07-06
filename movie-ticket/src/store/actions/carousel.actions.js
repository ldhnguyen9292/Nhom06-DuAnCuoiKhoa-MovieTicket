import { GET_CAROUSEL_LIST } from "./../constants/carousel.constants";
import axios from "axios";

export const getCarouselListAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://mock-apis-test.herokuapp.com/carouselList",
      });
      console.log(res);
      dispatch({
        type: GET_CAROUSEL_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
