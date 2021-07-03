import React from "react";
import { Paper } from "@material-ui/core";
import MovieName from "../../movie-components/search-movie/movie-name/movie-name";
import NewsTitle from "./news-title/news-title";
import { useStyles } from "./news-sidebar-styles";
import NewsType from "./news-type/news-type";
import BoGia from "./../../../../assets/images/bo-gia-icon.jpg";
import RecentNews from "./recent-news/recent-news";
import Subscribe from "./subscribe/subscribe";

const arrayType = [
  { name: "tất cả", type: "all", num: 10 },
  { name: "khuyến mãi", type: "km", num: 5 },
  { name: "phim bom tấn", type: "bt", num: 5 },
];

const arrayArchives = [
  { name: "2021", type: "2021", num: 20 },
  { name: "2020", type: "2020", num: 2 },
  { name: "2019", type: "2019", num: 1 },
];

const arrayNewest = [
  { imgURL: BoGia, title: "Bố già phần 1", date: "2/7/2021" },
  { imgURL: BoGia, title: "Phía sau hậu trường", date: "2/7/2021" },
  { imgURL: BoGia, title: "Những điều chưa kể", date: "2/7/2021" },
];

function NewsSidebar() {
  const classes = useStyles();

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className={classes.sideBar}>
      <Paper className={classes.paper}>
        <MovieName
          placeHolder={"Tìm tên tin tức"}
          handleSubmit={handleSubmit}
        />

        <NewsTitle title="Thể loại" />
        <NewsType array={arrayType} />

        <NewsTitle title="Tin mới nhất" />
        <RecentNews array={arrayNewest} />

        <NewsTitle title="Mục lục" />
        <NewsType array={arrayArchives} />

        <NewsTitle title="Đăng ký" />
        <Subscribe />
      </Paper>
    </div>
  );
}

export default NewsSidebar;
