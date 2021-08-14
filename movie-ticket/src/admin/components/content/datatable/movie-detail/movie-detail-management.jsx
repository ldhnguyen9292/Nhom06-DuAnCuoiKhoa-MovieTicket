import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../../../../client/components/loading/loading.component";
import { getMovieListAction } from "../../../../../store/actions/movie.action";
import {
  GET_MONGO_LIST,
  PUT_MOVIE_KEY,
} from "../../../../../store/constants/movie.constants";
import CreateContent from "../../create-content/create-content";
import { callAPIactions } from "./../../../../../store/actions/mock-api-main.actions";

const arrayInput = [
  {
    type: "number",
    name: "maPhim",
    placeHolder: "Mã phim",
    width: 25,
    validation: { required: "Chọn mã phim" },
  },
  {
    type: "number",
    name: "thoiLuongChieu",
    placeHolder: "Thời lượng chiếu",
    width: 25,
    validation: "",
  },
  {
    type: "number",
    name: "IMDB",
    placeHolder: "Điểm IMDB",
    width: 25,
    validation: "",
  },
  {
    type: "radio",
    name: "dinhDang",
    placeHolder: ["2D/Digital", "3D/Digital"],
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "theLoai",
    placeHolder: "Thể loại",
    width: 50,
    validation: "",
  },
  {
    type: "text",
    name: "daoDien",
    placeHolder: "Tên đạo diễn",
    width: 25,
    validation: "",
  },
  {
    type: "text",
    name: "dienVien",
    placeHolder: "Tên diễn viên chính",
    width: 25,
    validation: "",
  },
  {
    type: "text",
    name: "quocGiaSX",
    placeHolder: "Tên quốc gia",
    width: 25,
    validation: "",
  },
];
const arrayTableHead = [
  "_id",
  "maPhim",
  "thoiLuongChieu",
  "IMDB",
  "dinhDang",
  "daoDien",
  "dienVien",
  "theLoai",
  "quocGiaSX",
];
const name = "movie";
const dbName = "movieDetail";

function MovieDetailManagement() {
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
    keysText: "movieKeys",
    arrayText: "mongoList",
    typeGetList: GET_MONGO_LIST,
    typePutKey: PUT_MOVIE_KEY,
    arrayInput,
    arrayTableHead,
    actionsByID: actionsByID,
    getList: getListAction,
    postNew: postNewItemAction,
    putData: putNewsByIdAction,
    putKey: putKeyAction,
  };
  const movieList = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [group, setGroup] = useState("GP06");
  const [movieCode, setMovieCode] = useState(0);

  const callAPI = async () => {
    setLoading(true);
    await dispatch(getMovieListAction(group));
    setLoading(false);
  };

  useEffect(() => {
    callAPI();
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  const renderMovie = () => {
    return (
      <>
        <label htmlFor="movieName" style={{ marginRight: 10 }}>
          Chọn tên phim:
        </label>
        <select
          id="movieName"
          name="movieName"
          style={{ marginRight: 10 }}
          onClick={(event) => setMovieCode(event.target.value)}
        >
          {movieList?.map((m) => (
            <option key={m.maPhim} value={m.maPhim}>
              {m.tenPhim}
            </option>
          ))}
        </select>
        <span style={{ marginRight: 10 }}>Mã phim: {movieCode}</span>
      </>
    );
  };

  if (loading) <LoadingComponent />;
  return (
    <>
      <div style={{ padding: 10 }}>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="groupName" style={{ marginRight: 10 }}>
            Chọn mã nhóm:
          </label>
          <select
            name="groupName"
            id="groupName"
            onClick={(event) => setGroup(event.target.value)}
          >
            <option value="GP06"> Phim đang chiếu </option>
            <option value="GP07"> Phim sắp chiếu </option>
          </select>
        </div>
        <div style={{ marginBottom: 10 }}>
          {renderMovie()}
          Số lượng phim: <span>{movieList.length}</span>
        </div>
      </div>
      <CreateContent contentProps={newsProps} />
    </>
  );
}

export default memo(MovieDetailManagement);
