import React, { memo, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { callAPIactions } from "../../../../../store/actions/mock-api-main.actions";
import { PUT_USER_KEY } from "../../../../../store/constants/user.consants";
import CreateFormInput from "../../create-content/create-form-input/create-form-input";
import CreateTable from "../../create-content/create-table/create-table";
import { useStyles } from "./user-management-styles";
import {
  getUserListAction,
  putUpdateUserInfoAction,
  deleteUserAction,
  postAdminSignUpAction,
} from "../../../../../store/actions/user.action";
import LoadingComponent from "../../../../../client/components/loading/loading.component";

const valid = {
  required: "Vui lòng không để trống",
  minLength: { value: 4, message: "Số ký tự 4-20" },
  maxLength: { value: 20, message: "Số ký tự 4-20" },
};
const arrayInput = [
  {
    type: "text",
    name: "taiKhoan",
    placeHolder: "Nhập tên người dùng",
    width: 50,
    validation: valid,
  },
  {
    type: "text",
    name: "matKhau",
    placeHolder: "Nhập mật khẩu",
    width: 50,
    validation: valid,
  },
  {
    type: "text",
    name: "email",
    placeHolder: "Nhập email",
    width: 50,
    validation: { required: "Vui lòng nhập email" },
  },
  {
    type: "text",
    name: "soDt",
    placeHolder: "Nhập số điện thoại",
    width: 50,
    validation: "",
  },
  {
    type: "radio",
    name: "maLoaiNguoiDung",
    placeHolder: ["QuanTri", "KhachHang"],
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "hoTen",
    placeHolder: "Nhập họ tên",
    width: 50,
    validation: "",
  },
];
const arrayTableHead = [
  "taiKhoan",
  "matKhau",
  "email",
  "soDt",
  "maLoaiNguoiDung",
  "hoTen",
];
const name = "user";
const keysText = "userKeys";
const typePutKey = PUT_USER_KEY;

function UsersManagement() {
  const classes = useStyles();
  const methods = useForm();
  const { setValue, handleSubmit, setFocus } = methods;
  const [isEdit, setEdit] = useState(false);
  const { putKeyAction } = callAPIactions;
  const dispatch = useDispatch();
  const array = useSelector((state) => state.user.userList);
  const keys = useSelector((state) => state.user.userKeys);
  let { page, pageSize, keySearch, sort, order } = keys;
  const [loading, setLoading] = useState();

  const handleCallAPI = async (urlExpand) => {
    setLoading(true);
    await dispatch(getUserListAction(urlExpand));
    setLoading(false);
  };

  useEffect(() => {
    const tuKhoa = keySearch === "" ? "" : `&tuKhoa=${keySearch}`;
    let urlExpand = `LayDanhSachNguoiDungPhanTrang?MaNhom=GP06&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`;
    if (keySearch)
      urlExpand = `TimKiemNguoiDung?MaNhom=GP06${tuKhoa}&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`;
    handleCallAPI(urlExpand);
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize, keySearch]);

  const handleDelete = async (id) => {
    await deleteUserAction(id);
    const urlExpand = `LayDanhSachNguoiDungPhanTrang?MaNhom=GP06&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`;
    handleCallAPI(urlExpand);
  };

  const handleEdit = (id) => {
    const index = cacheArray.findIndex((value) => value.taiKhoan === id);
    arrayTableHead.map((keyRef) => setValue(keyRef, cacheArray[index][keyRef]));
    setEdit(true);
    setFocus("taiKhoan");
  };

  const onSubmit = async (data, e) => {
    const d = { ...data, maNhom: "GP06" };
    if (isEdit) {
      await putUpdateUserInfoAction(d);
      setEdit(false);
    } else {
      postAdminSignUpAction(d);
    }
    const urlExpand = `LayDanhSachNguoiDungPhanTrang?MaNhom=GP06&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`;
    handleCallAPI(urlExpand);
    e.target.reset();
  };

  const cacheArray = useMemo(() => {
    let userList = array.items || array || [];
    if (sort) {
      userList.sort((first, second) => {
        if (first[sort] > second[sort]) {
          return 1;
        }
        if (first[sort] < second[sort]) {
          return -1;
        }
        return 0;
      });
      if (order === "desc") {
        userList.reverse();
      }
    }
    return userList;
  }, [array, sort, order]);

  if (loading) <LoadingComponent />;
  return (
    <>
      <FormProvider {...methods}>
        <div className={classes.root}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <div className={classes.formInput}>
              <CreateFormInput
                arrayInput={arrayInput}
                handleCallAPI={handleCallAPI}
              />
            </div>
            <div className={classes.formBtnSubmit}>
              <button type="submit" className={classes.button}>
                {!isEdit ? <span>Tạo mới</span> : <span>Chỉnh sửa</span>}
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
      <CreateTable
        array={cacheArray}
        arrayTableHead={arrayTableHead}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        putKey={putKeyAction}
        typePutKey={typePutKey}
        name={name}
        keysText={keysText}
      />
    </>
  );
}

export default memo(UsersManagement);
