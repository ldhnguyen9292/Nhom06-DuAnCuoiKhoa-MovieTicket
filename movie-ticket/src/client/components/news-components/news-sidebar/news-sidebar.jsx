import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@material-ui/core";
import MovieName from "../../movie-components/search-movie/movie-name/movie-name";
import NewsTitle from "./news-title/news-title";
import { useStyles } from "./news-sidebar-styles";
import NewsType from "./news-type/news-type";
import RecentNews from "./recent-news/recent-news";
import Subscribe from "./subscribe/subscribe";
import { PUT_NEWS_KEY } from "../../../../store/constants/news.contants";
import axios from "axios";
import NewsArchives from "./news-archives/news-archives";
import LoadingComponent from "../../loading/loading.component";

let arrayType = [
  { name: "tất cả", type: "", num: 0 },
  { name: "khuyến mãi", type: "khuyenMai", num: 0 },
  { name: "tin tức", type: "tinTuc", num: 0 },
];

let arrayArchives = [];

let arrayNewest = [];

function NewsSidebar() {
  const classes = useStyles();
  const type = PUT_NEWS_KEY;
  const [loading, setLoading] = useState();
  const history = useHistory();
  let itemNumberOfMonth = [
    { name: "Tháng 1", type: "1", num: 0 },
    { name: "Tháng 2", type: "2", num: 0 },
    { name: "Tháng 3", type: "3", num: 0 },
    { name: "Tháng 4", type: "4", num: 0 },
    { name: "Tháng 5", type: "5", num: 0 },
    { name: "Tháng 6", type: "6", num: 0 },
    { name: "Tháng 7", type: "7", num: 0 },
    { name: "Tháng 8", type: "8", num: 0 },
    { name: "Tháng 9", type: "9", num: 0 },
    { name: "Tháng 10", type: "10", num: 0 },
    { name: "Tháng 11", type: "11", num: 0 },
    { name: "Tháng 12", type: "12", num: 0 },
  ];

  const setArrayValue = (data) => {
    arrayType.map((item) => {
      const keyFilter = item.type;
      const filter = data.filter((news) => {
        return news.loai === keyFilter || keyFilter === "";
      });
      item.num = filter.length;
      return null;
    });

    arrayNewest = data
      .sort((first, second) => {
        if (first.ngayDang > second.ngayDang) {
          return -1;
        }
        if (first.ngayDang < second.ngayDang) {
          return 1;
        }
        return 0;
      })
      .slice(0, 3);

    data.map((item) => {
      const date = new Date(item.ngayDang);
      const month = date.getMonth();
      if (month) {
        itemNumberOfMonth[month].num += 1;
      }
      return null;
    });

    arrayArchives = itemNumberOfMonth.filter((month) => {
      return month.num > 0;
    });
    arrayArchives = arrayArchives.reverse();
  };

  const callAPI = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "GET",
        url: "https://moveticket-mongodb.herokuapp.com/news",
      });
      setArrayValue(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callAPI();
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (value) => {
    history.push(`/news?key=tenBai&value=${value}`);
  };

  if (loading) return <LoadingComponent />;
  return (
    <div className={classes.sideBar}>
      <Paper className={classes.paper}>
        <MovieName
          placeHolder={"Tìm tên tin tức"}
          keyName="tenBai"
          type={type}
          handleSubmit={handleSubmit}
        />

        <NewsTitle title={"Thể loại"} />
        <NewsType array={arrayType} keyName="loai" />

        <NewsTitle title="Tin mới nhất" />
        <RecentNews array={arrayNewest} />

        <NewsTitle title="Mục lục" />
        <NewsArchives array={arrayArchives} />

        <NewsTitle title="Đăng ký" />
        <Subscribe />
      </Paper>
    </div>
  );
}

export default memo(NewsSidebar);
