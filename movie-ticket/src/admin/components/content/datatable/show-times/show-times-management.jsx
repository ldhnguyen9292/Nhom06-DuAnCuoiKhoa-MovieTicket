import React, { memo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import CreateFormInput from "../../create-content/create-form-input/create-form-input";
import { useStyles } from "./show-times-styles";
import { postShowTimesAction } from "../../../../../store/actions/show-times.action";
import LoadingComponent from "../../../../../client/components/loading/loading.component";
import { getMovieListAction } from "../../../../../store/actions/movie.action";
import {
  getCinemaListAction,
  getRoomListAction,
} from "../../../../../store/actions/cinema.action";
import format from "date-format";

const arrayInput = [
  {
    type: "dateTime",
    name: "ngayChieuGioChieu",
    placeHolder: "Chọn ngày chiếu",
    width: 25,
    validation: { required: "Vui lòng chọn thời gian" },
  },
  {
    type: "number",
    name: "maPhim",
    placeHolder: "Điền mã phim",
    width: 25,
    validation: { required: "Vui lòng điền mã phim" },
  },

  {
    type: "number",
    name: "maRap",
    placeHolder: "Điền mã rạp",
    width: 25,
    validation: { required: "Vui chọn mã rạp" },
  },
  {
    type: "number",
    name: "giaVe",
    placeHolder: "Điền giá vé",
    width: 25,
    validation: {
      required: "Chọn giá vé từ 75000 -200000",
      min: { value: 75000, message: "Chọn giá vé từ 75000 -200000" },
      max: { value: 200000, message: "Chọn giá vé từ 75000 -200000" },
    },
  },
];

function ShowTime() {
  const classes = useStyles();
  const methods = useForm();
  const { setValue, handleSubmit } = methods;
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movieList);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const roomList = useSelector((state) => state.cinema.roomList);
  const [loading, setLoading] = useState();
  const [state, setState] = useState();

  const handleCallAPI = async () => {
    setLoading(true);
    // await dispatch(getShowTimesAction());
    await dispatch(getMovieListAction("GP06"));
    await dispatch(getCinemaListAction());
    setLoading(false);
  };

  useEffect(() => {
    handleCallAPI();
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data, e) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo.accessToken;
    const ngayChieuGioChieu = format(
      "dd/MM/yyyy hh:mm:ss",
      new Date(data.ngayChieuGioChieu)
    );
    postShowTimesAction({ ...data, ngayChieuGioChieu }, token);
    e.target.reset();
  };

  const renderMaPhim = () => {
    if (!movieList) return <></>;
    return (
      <>
        <label htmlFor="m_maPhim">Chọn mã phim: </label>
        <select
          id="m_maPhim"
          name="maPhim"
          onClick={(event) => setValue("maPhim", event.target.value)}
        >
          {movieList.map((m) => (
            <option key={m.maPhim} value={m.maPhim}>
              {m.tenPhim}
            </option>
          ))}
        </select>
      </>
    );
  };

  const getMaRap = async (maHeThongRap) => {
    await dispatch(getRoomListAction(maHeThongRap));
  };

  const handleChange = (event) => {
    getMaRap(event.target.value);
  };

  const renderHeThongRap = () => {
    if (!cinemaList) return <></>;
    return (
      <>
        <div className={classes.optionBox}>
          <label htmlFor="c_maHeThongRap">Chọn mã hệ thống rạp: </label>
          <select
            id="c_maHeThongRap"
            name="maHeThongRap"
            onClick={handleChange}
          >
            {cinemaList.map((c) => (
              <option key={c.maHeThongRap} value={c.maHeThongRap}>
                {c.tenHeThongRap}
              </option>
            ))}
          </select>
        </div>
        <div>{roomList ? <>{renderCumRap()}</> : <></>}</div>
      </>
    );
  };

  const handleCumRap = () => {
    const dom = document.getElementById("r_cumRap").value;
    const index = roomList.findIndex((v) => v.maCumRap === dom);
    if (index > -1) setState(index);
  };

  const renderCumRap = () => {
    return (
      <>
        <div className={classes.optionBox}>
          <label htmlFor="r_cumRap">Chọn mã cụm rạp: </label>
          <select id="r_cumRap" name="cumRap" onClick={handleCumRap}>
            {roomList.map((r) => (
              <option key={r.maCumRap} value={r.maCumRap}>
                {r.tenCumRap}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.optionBox}>
          {state > -1 ? (
            <>
              <label htmlFor="r_maRap">Chọn mã rạp: </label>
              <select
                id="r_maRap"
                name="maRap"
                onClick={(event) => setValue("maRap", event.target.value)}
              >
                {roomList[state].danhSachRap.map((r) => (
                  <option key={r.maRap} value={r.maRap}>
                    {r.tenRap}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };

  if (loading) <LoadingComponent />;
  return (
    <>
      <FormProvider {...methods}>
        <div className={classes.root}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <div className={classes.formInput}>
              <CreateFormInput arrayInput={arrayInput} />
            </div>
            <div>
              <div className={classes.optionBox}>{renderMaPhim()}</div>
              {renderHeThongRap()}
            </div>
            <div className={classes.formBtnSubmit}>
              <button type="submit" className={classes.button}>
                <span>Tạo mới</span>
              </button>
            </div>
          </form>
        </div>
      </FormProvider>
    </>
  );
}

export default memo(ShowTime);
