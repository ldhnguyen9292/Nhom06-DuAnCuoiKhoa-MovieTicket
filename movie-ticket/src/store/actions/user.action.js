import axios from "axios";
import {
  GET_USER_LIST,
  PUT_USER_LOGIN_STATUS,
} from "../constants/user.consants";

const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung";

export const getUserListAction = (urlExpand) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}/${urlExpand}`,
      });
      dispatch({
        type: GET_USER_LIST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const userAction = async (data, method, query, token) => {
  try {
    const res = await axios({
      method,
      url: `${url}/${query}`,
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    alert(error.response.data);
    return error.response;
  }
};

export const postUserLogInAction = async (data, history, dispatch) => {
  const res = await userAction(data, "POST", "DangNhap");
  if (res.status === 200) {
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    await dispatch({ type: PUT_USER_LOGIN_STATUS, payload: true });
    history.goBack();
  }
};

export const postUserSignUpAction = async (data, history) => {
  const res = await userAction(data, "POST", "DangKy");
  if (res.status === 200) {
    const { taiKhoan, matKhau } = { res };
    await postUserLogInAction({ taiKhoan, matKhau }, history);
  }
};

export const putUpdateUserInfoAction = async (data) => {
  const token = JSON.parse(localStorage.getItem("userInfo")).accessToken;
  await userAction(data, "PUT", "CapNhatThongTinNguoiDung", token);
};

export const deleteUserAction = async (data)=>{
  const token = JSON.parse(localStorage.getItem("userInfo")).accessToken;
  await userAction(null, "DELETE", `XoaNguoiDung?TaiKhoan=${data}`, token);
}

export const postAdminSignUpAction = async(data)=>{
  await userAction(data, "POST", "DangKy");
}