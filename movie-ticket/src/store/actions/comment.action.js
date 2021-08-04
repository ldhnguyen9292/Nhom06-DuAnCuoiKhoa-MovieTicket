import axios from "axios";

const url = "https://moveticket-mongodb.herokuapp.com/comment";

const initialData = {
  soLike: 0,
  mangLike: [],
  soBinhLuan: 0,
  mangBinhLuan: [],
};

export const commentListByIdAction = async (method, id, data) => {
  try {
    const res = await axios({
      method,
      url: `${url}/${id}`,
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postCommentAction = async (data = initialData) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${url}`,
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
