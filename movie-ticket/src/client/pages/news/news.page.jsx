import React from "react";
import TopHeader from "../../components/movie-components/booking-confirmation-components/bc-top-header/bc-top-header";
import { Grid } from "@material-ui/core";
import NewsContent from "../../components/news-components/news-content/news-content";
import NewsSidebar from "../../components/news-components/news-sidebar/news-sidebar";

function News() {
  return (
    <div>
      <TopHeader title="Tin tức" />
      <Grid container style={{ padding: "5%", maxWidth: 1200, margin:"0 auto" }}>
        <Grid item xs={12} md={8}>
          <NewsContent />
        </Grid>
        <Grid item xs={12} md={4}>
          <NewsSidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default News;
