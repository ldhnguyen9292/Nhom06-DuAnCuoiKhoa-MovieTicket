import axios from "axios";

const url = "https://moveticket-mongodb.herokuapp.com/imageUpload";

export const postImage = async (data) => {
  try {
    await axios({ method: "POST", url, data });
  } catch (error) {
    console.log(error);
  }
};

export const getImage = async (filename) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${url}/${filename}`,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
