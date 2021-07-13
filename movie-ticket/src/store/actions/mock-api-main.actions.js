import axios from "axios";

const url = "https://mock-apis-test.herokuapp.com";

const getListAction = (name, type, querParams) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/${name}${querParams}`,
      });
      console.log(res);
      const length = res.headers[`x-total-count`] || res.data.length || -1;
      dispatch({
        type: type,
        payload: { data: res.data, length: length },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const postNewItemAction = (name, data) => {
  return async () => {
    try {
      await axios({
        method: "POST",
        url: `${url}/${name}`,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const actionsByID = (name, method, id) => {
  return async () => {
    try {
      const res = await axios({
        method,
        url: `${url}/${name}/${id}`,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  };
};

const putNewsByIdAction = (name, data) => {
  return async () => {
    try {
      await axios({
        method: "PUT",
        url: `${url}/${name}/${data.id}`,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const putKeyAction = (type, data) => {
  return { type: type, payload: data };
};

export const callAPIactions = {
  getListAction,
  postNewItemAction,
  actionsByID,
  putNewsByIdAction,
  putKeyAction,
};
