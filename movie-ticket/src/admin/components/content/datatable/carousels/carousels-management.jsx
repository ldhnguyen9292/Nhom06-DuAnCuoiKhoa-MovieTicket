import React, { memo } from "react";
import {
  GET_CAROUSEL_LIST,
  PUT_CAROUSEL_KEY,
} from "../../../../../store/constants/carousel.constants";
import CreateContent from "../../create-content/create-content";
import { callAPIactions } from "./../../../../../store/actions/mock-api-main.actions";

const arrayInput = [
  {
    type: "text",
    name: "ten",
    placeHolder: "Nhập tên carousel",
    width: 50,
    validation: "",
  },
  {
    type: "number",
    name: "maLienKet",
    placeHolder: "Nhập mã liên kết",
    width: 50,
    validation: { required: "Vui lòng nhập mã liên kết" },
  },
  {
    type: "radio",
    name: "loai",
    placeHolder: ["phimBomTan", "tinTuc"],
    width: 100,
    validation: "",
  },
  {
    type: "text",
    name: "trailer",
    placeHolder: "Nhập URL youtube",
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "hinhAnh",
    placeHolder: "Nhập URL hình ảnh carousel",
    width: 50,
    validation: { required: "Vui lòng nhập link hình ảnh" },
  },
];
const arrayTableHead = ["id", "ten", "loai", "maLienKet", "trailer", "hinhAnh"];
const name = "carousel";
const dbName = "carousel";

function CarouselsManagement() {
  const {
    actionsByID,
    getListAction,
    postNewItemAction,
    putNewsByIdAction,
    putKeyAction,
  } = callAPIactions;
  
  const carouselProps = {
    dbName,
    name,
    keysText: "carouselKeys",
    arrayText: "carouselList",
    typeGetList: GET_CAROUSEL_LIST,
    typePutKey: PUT_CAROUSEL_KEY,
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
      <CreateContent contentProps={carouselProps} />
    </>
  );
}

export default memo(CarouselsManagement);
