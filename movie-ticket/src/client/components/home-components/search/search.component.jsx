import React, { memo, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  CardMedia,
  Typography,
  InputBase,
  IconButton,
} from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./search-styles.component";
import Grid from "@material-ui/core/Grid";
import OptionSearch from "./option/option.component";
import { useHistory } from "react-router-dom";
import cityIcon from "./../../../../assets/images/city.png";
import dateIcon from "./../../../../assets/images/date.png";
import cinemaIcon from "./../../../../assets/images/cinema.png";
import searchBG from "./../../../../assets/images/searchBG.jpg";
import format from "date-format";

const initialSearchList = {
  name: "",
  city: "",
  date: "",
  cinema: "",
  maPhim: 0,
};
const today = new Date();

function SearchHome() {
  const classes = useStyles();
  const [searchList, setSearchList] = useState(initialSearchList);
  const history = useHistory();
  const movieList = useSelector((state) => state.movie.movieList);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const moreArray = [
    {
      id: "city",
      name: "Thành phố",
      imgUrl: cityIcon,
      helper: { id: "cityHelper", text: "Chọn thành phố" },
      option: [
        { text: "Chọn thành phố" },
        { text: "Hồ Chí Minh" },
        { text: "Hà Nội" },
      ],
    },
    {
      id: "date",
      name: "Ngày",
      imgUrl: dateIcon,
      helper: { id: "dateHelper", text: "Chọn ngày" },
      option: [
        { text: format("dd/MM/yyyy", today) },
        { text: format("dd/MM/yyyy", new Date(today.getTime() + 86400000)) },
        {
          text: format("dd/MM/yyyy", new Date(today.getTime() + 2 * 86400000)),
        },
        {
          text: format("dd/MM/yyyy", new Date(today.getTime() + 3 * 86400000)),
        },
        {
          text: format("dd/MM/yyyy", new Date(today.getTime() + 4 * 86400000)),
        },
      ],
    },
    {
      id: "cinema",
      name: "Rạp",
      imgUrl: cinemaIcon,
      helper: { id: "cinemaHelper", text: "Chọn rạp" },
      option: cinemaList.map((v) => ({
        text: v.tenHeThongRap,
      })),
    },
  ];

  const handleMoreChange = (id, value) => {
    const temp = { [id]: value };
    setSearchList({ ...searchList, ...temp });
  };

  const handleChange = (id, event) => {
    const value = event.target.value;
    if (value) setOpen(true);
    setSearchList({ ...searchList, [id]: value });
  };

  const handlePopperClick = (tenPhim, maPhim) => {
    setSearchList({ ...searchList, name: tenPhim, maPhim });
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchList(initialSearchList);
    const { city, date, cinema, maPhim } = searchList;
    if (!maPhim || maPhim === 0) {
      alert("Vui lòng chọn phim");
      return;
    }
    history.push({
      pathname: `/movie/movie-detail/${maPhim}`,
      search: `?city=${city}&date=${date}&cinema=${cinema}`,
    });
  };

  const renderMore = (array, index) => {
    return (
      <Grid
        key={index}
        item
        xs={12}
        md={6}
        lg={4}
        xl={3}
        className={classes.moreSetting}
      >
        <CardMedia
          component="img"
          src={array.imgUrl}
          className={classes.icon}
        />
        <span>{array.name}</span>
        {array ? (
          <OptionSearch array={array} handleMoreChange={handleMoreChange} />
        ) : (
          <></>
        )}
      </Grid>
    );
  };

  const renderPopper = () => {
    if (!searchList.name || !isNaN(searchList.name)) return;
    let body = [];
    body = movieList.filter((v) => {
      const index = v.tenPhim
        .toLowerCase()
        .indexOf(searchList.name.toLowerCase());
      return index > -1;
    });

    return (
      <Popper
        anchorEl={ref.current}
        open={open}
        className={classes.paper}
        placement="bottom-start"
      >
        <ul className={classes.ul}>
          {body.map((v) => (
            <li
              key={v.tenphim}
              className={classes.li}
              onClick={() => handlePopperClick(v.tenPhim, v.maPhim)}
            >
              {v.tenPhim}
            </li>
          ))}
        </ul>
      </Popper>
    );
  };

  const renderSearch = () => {
    return (
      <form className={classes.searchField} onSubmit={handleSubmit}>
        <div className={classes.searchBG}></div>
        <Grid container className={classes.search}>
          <Grid
            item
            xs={12}
            md={6}
            lg={12}
            xl={3}
            className={classes.inputSetting}
          >
            <InputBase
              placeholder="Chọn hoặc điền tên phim..."
              className={classes.inputInput}
              type="search"
              ref={ref}
              value={searchList.name || ""}
              onChange={(event) => handleChange("name", event)}
            />
            {renderPopper()}
            <IconButton type="submit" className={classes.btnSearch}>
              <SearchIcon />
            </IconButton>
          </Grid>
          {moreArray?.map((id, index) => renderMore(id, index))}
        </Grid>
      </form>
    );
  };

  return (
    <div className={classes.root}>
      <CardMedia image={searchBG} className={classes.content}>
        <div className={classes.top}>
          <div className={classes.contentLeft}>
            <Typography className={classes.text}>
              Chào mừng bạn đến với trang đặt vé online
            </Typography>
            <Typography className={classes.h1}>
              Bạn đang tìm kiếm phim gì?
            </Typography>
          </div>
          <div className={classes.contentRight}>
            <CardMedia
              component="img"
              src="http://pixner.net/boleto/demo/assets/images/ticket/ticket-tab01.png"
            />
            <Typography className={classes.h2}>Phim</Typography>
          </div>
        </div>
        {renderSearch()}
      </CardMedia>
      <div className={classes.backgroudWhite}></div>
      <div className={classes.backgroudBlack}></div>
    </div>
  );
}

export default memo(SearchHome);
