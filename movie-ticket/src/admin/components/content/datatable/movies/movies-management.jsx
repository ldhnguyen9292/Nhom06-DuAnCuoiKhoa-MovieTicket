import React, { memo, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { callAPIactions } from "../../../../../store/actions/mock-api-main.actions";
import CreateFormInput from "../../create-content/create-form-input/create-form-input";
import CreateTable from "../../create-content/create-table/create-table";
import { useStyles } from "./movie-management-style";
import {
  deleteMovieAction,
  getMovieListAction,
  postMovieAction,
} from "../../../../../store/actions/movie.action";
import { PUT_MOVIE_KEY } from "../../../../../store/constants/movie.constants";
import LoadingComponent from "../../../../../client/components/loading/loading.component";
import format from "date-format";

const arrayInput = [
  {
    type: "text",
    name: "tenPhim",
    placeHolder: "Nhập tên phim",
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "biDanh",
    placeHolder: "Nhập bí danh phim",
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "hinhAnh",
    placeHolder: "Nhập URL hình ảnh",
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "moTa",
    placeHolder: "Nhập nội dung phim",
    width: 100,
    validation: "",
  },
  {
    type: "radio",
    name: "maNhom",
    placeHolder: ["GP06", "GP07"],
    width: 50,
    validation: "",
  },
  {
    type: "date",
    name: "ngayKhoiChieu",
    placeHolder: "Ngày khởi chiếu",
    width: 50,
    validation: "",
  },
  {
    type: "number",
    name: "danhGia",
    placeHolder: "Điểm đánh giá 1-10",
    width: 100,
    validation: "",
  },
];
const arrayTableHead = [
  "maPhim",
  "tenPhim",
  "biDanh",
  "trailer",
  "hinhAnh",
  "moTa",
  "maNhom",
  "ngayKhoiChieu",
  "danhGia",
];
const name = "movie";
const keysText = "movieKeys";
const typePutKey = PUT_MOVIE_KEY;

function MovieManagement() {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit } = methods;
  const [isEdit, setEdit] = useState(false);
  const { putKeyAction } = callAPIactions;
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movieList);
  const keys = useSelector((state) => state.movie.movieKeys);
  let { page, pageSize, keySearch, sort, order } = keys;
  const [loading, setLoading] = useState();
  const [group, setGroup] = useState("GP06");
  const token = JSON.parse(localStorage.getItem("userInfo")).accessToken;

  const handleCallAPI = async () => {
    setLoading(true);
    await dispatch(getMovieListAction(group));
    setLoading(false);
  };

  useEffect(() => {
    handleCallAPI();
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  const handleDelete = async (id) => {
    await deleteMovieAction(id, token);
    handleCallAPI();
  };

  const handleEdit = () => {
    alert("Tính năng này đang chờ Cybersoft cập nhật");
    setEdit(false);
  };

  const onSubmit = async (data, e) => {
    const d = {
      ...data,
      ngayKhoiChieu: format("dd/MM/yyyy", new Date(data.ngayKhoiChieu)),
    };
    await postMovieAction(d, token);
    handleCallAPI();
    e.target.reset();
  };

  const cacheMovieList = useMemo(() => {
    let result = movieList;
    // Find Keyword
    if (keySearch)
      result = result.filter((m) => {
        const index = m.tenPhim.toLowerCase().indexOf(keySearch.toLowerCase());
        return index > -1;
      });
    //Sort
    if (sort) {
      result.sort((a, b) => {
        if (a[sort] > b[sort]) return 1;
        if (a[sort] < b[sort]) return -1;
        return 0;
      });
      if (order === "desc") result.reverse();
    }
    //Page & Limit
    const start = pageSize > result.length ? 0 : pageSize * (page - 1);
    const end = start + pageSize - 1;
    const temp = result.slice(start, end);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return temp || result;
  }, [page, pageSize, keySearch, sort, order, movieList]);

  if (loading) <LoadingComponent />;
  return (
    <>
      <div style={{ margin: 5 }}>
        <label htmlFor="chooseGroup" style={{ marginRight: 5 }}>
          Chọn nhóm
        </label>
        <select
          name="chooseGroup"
          id="chooseGroup"
          value={group}
          onChange={(event) => setGroup(event.target.value)}
        >
          <option value="GP06">GP06</option>
          <option value="GP07">GP07</option>
        </select>
      </div>
      <FormProvider {...methods}>
        <div className={classes.root}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <div className={classes.formInput}>
              <CreateFormInput
                arrayInput={arrayInput}
                handleCallAPI={handleCallAPI}
              />
            </div>
            <p className={classes.intro}>GP06 dành cho phim đang chiếu</p>
            <p className={classes.intro}>GP07 dành cho phim sắp chiếu</p>
            <div className={classes.formBtnSubmit}>
              <button type="submit" className={classes.button}>
                {!isEdit ? <span>Tạo mới</span> : <span>Chỉnh sửa</span>}
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
      <CreateTable
        array={cacheMovieList}
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

export default memo(MovieManagement);
