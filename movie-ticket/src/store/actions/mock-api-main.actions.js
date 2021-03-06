import axios from "axios";
import { commentListByIdAction, postCommentAction } from "./comment.action";

const url = "https://moveticket-mongodb.herokuapp.com";

const getListAction = (name, type, querParams) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/${name}${querParams}`,
      });
      const length = res.headers[`resultlength`] || res.data.length || -1;
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
      const res = await axios({
        method: "POST",
        url: `${url}/${name}`,
        data,
      });
      await postCommentAction(res.data.insertedId);
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
      if (name === "news" && method === "DELETE") {
        await commentListByIdAction("DELETE", id);
      }
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
        url: `${url}/${name}/${data._id}`,
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
