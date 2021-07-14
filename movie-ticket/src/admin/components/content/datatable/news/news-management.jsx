import React, { memo } from "react";
import {
  GET_NEWS_LIST,
  PUT_NEWS_KEY,
} from "../../../../../store/constants/news.contants";
import CreateContent from "../../create-content/create-content";
import { callAPIactions } from "./../../../../../store/actions/mock-api-main.actions";

const arrayInput = [
  {
    type: "date",
    name: "ngayDang",
    placeHolder: "Nhập ngày đăng dd-mm-yyyy",
    width: 25,
    validation: { required: "Vui lòng nhập ngày đăng bài" },
  },
  {
    type: "text",
    name: "tacGia",
    placeHolder: "Nhập tên tác giả",
    width: 25,
    validation: "",
  },
  {
    type: "radio",
    name: "loai",
    placeHolder: ["tinTuc", "khuyenMai"],
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "hinhAnh",
    placeHolder: "Nhập URL hình ảnh",
    width: 50,
    validation: { required: "Vui lòng url" },
  },
  {
    type: "text",
    name: "trailer",
    placeHolder: "Nhập URL trailer",
    width: 50,
    validation: { required: "Vui lòng link trailer" },
  },
  {
    type: "text",
    name: "tenBai",
    placeHolder: "Nhập tên bài báo",
    width: 100,
    validation: "",
  },
  {
    type: "textEditor",
    name: "noiDung",
    placeHolder: "Nhập nội dung",
    width: 100,
    validation: "",
  },
  {
    type: "date",
    name: "ngayCongChieu",
    placeHolder: "Nhập ngày công chiếu dd-mm-yyyy",
    width: 25,
    validation: "",
  },
  {
    type: "text",
    name: "theLoai",
    placeHolder: "Nhập thể loại phim",
    width: 50,
    validation: "",
  },
  {
    type: "number",
    name: "danhGia",
    placeHolder: "Đánh giá phim 0-10",
    width: 25,
    validation: { min: 0, max: 10 },
  },
];
const arrayTableHead = [
  "id",
  "ngayDang",
  "tacGia",
  "loai",
  "tenBai",
  "hinhAnh",
  "trailer",
  "noiDung",
  "ngayCongChieu",
  "theLoai",
  "danhGia",
];
const name = "news";
const dbName = "news";

function NewsManagement() {
  const {
    actionsByID,
    getListAction,
    postNewItemAction,
    putNewsByIdAction,
    putKeyAction,
  } = callAPIactions;
  const newsProps = {
    name,
    dbName,
    keysText: "newsKeys",
    arrayText: "newsList",
    typeGetList: GET_NEWS_LIST,
    typePutKey: PUT_NEWS_KEY,
    arrayInput,
    arrayTableHead,
    actionsByID: actionsByID,
    getList: getListAction,
    postNew: postNewItemAction,
    putData: putNewsByIdAction,
    putKey: putKeyAction,
  };

  return (
    <>
      <CreateContent contentProps={newsProps} />
    </>
  );
}

export default memo(NewsManagement);
