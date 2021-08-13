import axios from "axios";
import { emailService } from "../../services/email.service";
import {
  GET_USER_LIST,
  PUT_USER_LOGIN_STATUS,
} from "../constants/user.consants";
import { getImage } from "./image.action";

const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung";
const mongoUrl = "https://moveticket-mongodb.herokuapp.com/user";

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
  }
};

const mongoUserAction = async (data, method, query) => {
  try {
    const res = await axios({
      method,
      url: `${mongoUrl}/${query}`,
      data,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

// Client
export const getUserInfoAction = async (data) => {
  try {
    const res = await axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const putUserInfoAction = async (data, token) => {
  try {
    const res = await axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postUserLogInAction = async (data, history, dispatch) => {
  const res = await userAction(data, "POST", "DangNhap");
  if (res.status === 200) {
    const taiKhoan = res.data.taiKhoan;
    await getClientUpdateUserInfoAction(taiKhoan);
    localStorage.setItem("userInfo", JSON.stringify(res.data));
    await dispatch({ type: PUT_USER_LOGIN_STATUS, payload: true });
    history.goBack();
  }
};

export const postUserSignUpAction = async (data, history) => {
  const res = await userAction(data, "POST", "DangKy");
  if (res && res.status === 200) {
    await mongoUserAction(data, "POST", "");
    const { taiKhoan, matKhau, email, soDt, hoTen } = res.data;
    const title = "Đã đăng ký thành công tài khoản Movie Ticket";
    const messTop =
      "Xin chúc mừng bạn đã đăng ký thành công tài khoản Movie Ticket với thông tin như sau:";
    const username = `"Tài Khoản": ${taiKhoan}`;
    const password = `"Mật khẩu": ${matKhau}`;
    const userEmail = `Email: ${email}`;
    const userTel = `"Số điện thoại": ${soDt}`;
    const name = `"Họ tên": ${hoTen}`;
    const dataUp = {
      email,
      title,
      hoTen,
      messTop,
      username,
      password,
      userEmail,
      userTel,
      name,
    };
    emailService.sendEmail("template_12xtfoh", dataUp);
    alert("Bạn đã đăng ký thành công. Thông tin đã được gửi qua mail của bạn.");
    history.goBack();
  }
};

export const putClientUpdateUserInfoAction = async (data, taiKhoan) => {
  try {
    await mongoUserAction(data, "PUT", taiKhoan);
    await getClientUpdateUserInfoAction(taiKhoan);
  } catch (error) {
    console.log(error);
  }
};

export const getClientUpdateUserInfoAction = async (taiKhoan) => {
  try {
    const mongoRes = await mongoUserAction(null, "GET", taiKhoan);
    localStorage.setItem("mongoUserInfo", JSON.stringify(mongoRes.data));
    const anhDaiDien = mongoRes.data.anhDaiDien
      ? mongoRes.data.anhDaiDien
      : "avataricon.png";
    const avatar = await getImage(anhDaiDien);
    localStorage.setItem("avatar", JSON.stringify(avatar.data));
  } catch (error) {
    console.log(error);
  }
};

// Admin
export const putUpdateUserInfoAction = async (data) => {
  const token = JSON.parse(localStorage.getItem("userInfo")).accessToken;
  delete data._id;
  try {
    await userAction(data, "PUT", "CapNhatThongTinNguoiDung", token);
    await mongoUserAction(data, "PUT", data.taiKhoan);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserAction = async (data) => {
  const token = JSON.parse(localStorage.getItem("userInfo")).accessToken;
  try {
    await userAction(null, "DELETE", `XoaNguoiDung?TaiKhoan=${data}`, token);
    await mongoUserAction(null, "DELETE", data);
  } catch (error) {
    console.log(error);
  }
};

export const postAdminSignUpAction = async (data) => {
  try {
    await userAction(data, "POST", "DangKy");
    await mongoUserAction(data, "POST", "");
  } catch (error) {
    console.log(error);
  }
};
