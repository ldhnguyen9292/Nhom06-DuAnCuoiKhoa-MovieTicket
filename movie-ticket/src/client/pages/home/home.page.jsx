import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CarouselComponent from "../../components/home-components/carousel/carousel.component";
import SearchHome from "../../components/home-components/search/search.component";
import LoadingComponent from "../../components/loading/loading.component";
import MovieComponent from "./../../components/home-components/movie/movie.component";
import NewsComponent from "./../../components/home-components/news/news.component";
import { callAPIactions } from "./../../../store/actions/mock-api-main.actions";
import { GET_CAROUSEL_LIST } from "../../../store/constants/carousel.constants";
import { GET_NEWS_LIST } from "../../../store/constants/news.contants";
import { getCinemaListAction } from "../../../store/actions/cinema.action";

function Home() {
  const dispatch = useDispatch();
  const { getListAction } = callAPIactions;
  const [loading, setLoading] = useState(true);

  const callAPI = async () => {
    await dispatch(
      callAPIactions.getListAction(
        "carousels",
        GET_CAROUSEL_LIST,
        "?sort=_id&order=desc"
      )
    );
    await dispatch(
      getListAction(
        "news",
        GET_NEWS_LIST,
        `?page=${1}&limit=${3}&sort=${"ngayDang"}&order=desc`
      )
    );
    await dispatch(getCinemaListAction());
    setLoading(false);
  };

  useEffect(() => {
    callAPI();
    return () => setLoading({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LoadingComponent />;
  return (
    <div>
      <CarouselComponent />
      <SearchHome />
      <MovieComponent />
      <NewsComponent />
    </div>
  );
}

export default memo(Home);
