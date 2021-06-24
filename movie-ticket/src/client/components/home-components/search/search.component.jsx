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

const initialSearchList = { name: "", city: "", date: "", cinema: "" };

function SearchHome() {
  const classes = useStyles();
  const [searchList, setSearchList] = useState(initialSearchList);
  const history = useHistory();
  const moreArray = [
    {
      id: "city",
      name: "Thành phố",
      imgUrl: "http://pixner.net/boleto/demo/assets/images/ticket/city.png",
      helper: { id: "cityHelper", text: "Chọn thành phố" },
      option: [
        { value: "hcm", text: "Hồ Chí Minh" },
        { value: "hn", text: "Hà Nội" },
        { value: "hcm", text: "Hồ Chí Minh" },
        { value: "hn", text: "Hà Nội" },
        { value: "hcm", text: "Hồ Chí Minh" },
        { value: "hn", text: "Hà Nội" },
        { value: "hcm", text: "Hồ Chí Minh" },
        { value: "hn", text: "Hà Nội" },
        { value: "hcm", text: "Hồ Chí Minh" },
        { value: "hn", text: "Hà Nội" },
      ],
    },
    {
      id: "date",
      name: "Date",
      imgUrl: "http://pixner.net/boleto/demo/assets/images/ticket/date.png",
      helper: { id: "dateHelper", text: "Chọn ngày" },
      option: [
        { value: "24062021", text: "24/06/2021" },
        { value: "25062021", text: "25/06/2021" },
      ],
    },
    {
      id: "cinema",
      name: "Cinema",
      imgUrl: "http://pixner.net/boleto/demo/assets/images/ticket/cinema.png",
      helper: { id: "cinemaHelper", text: "Chọn rạp" },
      option: [
        { value: "galaxy", text: "Galaxy" },
        { value: "cgv", text: "CGV" },
        { value: "cine", text: "Cinebox" },
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
    history.push("/movie");
  };

  const renderMore = (array) => {
    return (
      <Grid item xs={12} sm={6} md={4} xl={3} className={classes.moreSetting}>
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
            sm={6}
            md={12}
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
          {moreArray?.map((value) => renderMore(value))}
        </Grid>
      </form>
    );
  };

  return (
    <div className={classes.root}>
      <CardMedia
        component="image"
        image="http://pixner.net/boleto/demo/assets/images/ticket/ticket-bg01.jpg"
        className={classes.content}
      >
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
