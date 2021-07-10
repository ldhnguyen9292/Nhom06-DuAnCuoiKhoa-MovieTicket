import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  carouselByIdActions,
  getCarouselListAction,
  postNewCarouselAction,
  putCarouselByIdAction,
  putCarouselKeyAction,
} from "../../../../../store/actions/carousel.actions";
import CreateFormInput from "../../create-form-input/create-form-input";
import CreateTable from "../../create-table/create-table";
import { useForm, FormProvider } from "react-hook-form";
import { useStyles } from "./carousel-management-styles";

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
    placeHolder: ["phimBomTan", "khuyenMai"],
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

function CarouselsManagement() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const keys = useSelector((state) => state.carousel.carouselKeys);
  const { keySearch, page, pageSize, sort, order } = keys;
  const array = useSelector((state) => state.carousel.carouselList);
  const methods = useForm();
  const { setValue, setFocus } = methods;
  const [isEdit, setEdit] = useState(false);

  useEffect(() => {
    dispatch(
      getCarouselListAction(
        `?q=${keySearch}&_page=${page}&_limit=${pageSize}&_sort=${sort}&_order=${order}`
      )
    );
  }, [keys]);

  const handleCallAPI = async (data) => {
    await dispatch(postNewCarouselAction(data));
    dispatch(
      getCarouselListAction(
        `?q=${keySearch}&_page=${page}&_limit=${pageSize}&_sort=${sort}&_order=${order}`
      )
    );
  };

  const handleDelete = async (id) => {
    await dispatch(carouselByIdActions("DELETE", id));
    dispatch(
      getCarouselListAction(
        `?q=${keySearch}&_page=${page}&_limit=${pageSize}&_sort=${sort}&_order=${order}`
      )
    );
  };

  const handleEdit = async (id) => {
    const res = await dispatch(carouselByIdActions("GET", id));
    arrayTableHead.map((name) => setValue(name, res.data[name]));
    setEdit(true);
    setFocus("ten");
  };

  const onSubmit = async (data, e) => {
    if (isEdit) {
      console.log("update", data);
      setEdit(false);
      await dispatch(putCarouselByIdAction(data));
      dispatch(
        getCarouselListAction(
          `?q=${keySearch}&_page=${page}&_limit=${pageSize}&_sort=${sort}&_order=${order}`
        )
      );
    } else {
      handleCallAPI(data);
    }
    e.target.reset();
  };

  const cacheArrayInput = useMemo(() => arrayInput, [arrayInput]);

  return (
    <div>
      <FormProvider {...methods}>
        <div className={classes.root}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={classes.form}
          >
            <CreateFormInput
              arrayInput={cacheArrayInput}
              handleCallAPI={handleCallAPI}
            />
            <button type="submit" className={classes.button}>
              {!isEdit ? <span>Tạo mới</span> : <span>Chỉnh sửa</span>}
            </button>
          </form>
        </div>
      </FormProvider>
      <CreateTable
        array={array}
        arrayTableHead={arrayTableHead}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default memo(CarouselsManagement);
