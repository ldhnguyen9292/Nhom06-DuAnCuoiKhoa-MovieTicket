import React, { useState } from "react";
import {
  CardMedia,
  Typography,
  InputBase,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./search-styles.component";
import Grid from "@material-ui/core/Grid";
import OptionSearch from "./option/option.component";
import { useHistory } from "react-router-dom";
import cityIcon from "./../../../../assets/images/city.png";
import dateIcon from "./../../../../assets/images/date.png";
import cinemaIcon from "./../../../../assets/images/cinema.png";
import searchBG from "./../../../../assets/images/searchBG.jpg";

const initialSearchList = { name: "", city: "", date: "", cinema: "" };

function SearchHome() {
  const classes = useStyles();
  const [searchList, setSearchList] = useState(initialSearchList);
  const history = useHistory();
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
        { text: "Hồ Chí Minh" },
        { text: "Hà Nội" },
        { text: "Hồ Chí Minh" },
        { text: "Hà Nội" },
        { text: "Hồ Chí Minh" },
        { text: "Hà Nội" },
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
        { text: "Chọn ngày" },
        { text: "24/06/2021" },
        { text: "25/06/2021" },
      ],
    },
    {
      id: "cinema",
      name: "Rạp",
      imgUrl: cinemaIcon,
      helper: { id: "cinemaHelper", text: "Chọn rạp" },
      option: [
        { text: "Chọn rạp" },
        { text: "Galaxy" },
        { text: "CGV" },
        { text: "Cinebox" },
      ],
    },
  ];

  const handleChange = (name, event) => {
    const value = event.target.value;
    setSearchList({ ...searchList, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchList(initialSearchList);
    const { name, city, date, cinema } = searchList;
    history.push({
      pathname: `/movie/movie-detail:${name}`,
      search: `?city=${city}?date=${date}?cinema=${cinema}`,
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
          <OptionSearch array={array} handleChange={handleChange} />
        ) : (
          <></>
        )}
      </Grid>
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
              onChange={(event) => handleChange("name", event)}
            />
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

export default SearchHome;
