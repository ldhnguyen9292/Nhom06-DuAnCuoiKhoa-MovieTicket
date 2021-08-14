import React from "react";
import { useStyles } from "./cinema-styles.component";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ticket from "./../../../../../assets/images/ticket.png";
import fastFood from "./../../../../../assets/images/fast-food.png";
import bill from "./../../../../../assets/images/bill.png";
import Hour from "./../Hour/Hour.component";
import format from "date-format";
import { useSelector } from "react-redux";

function CinemaBox(props) {
  const classes = useStyles();
  const { array } = props;
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  let index = 0;

  const renderCinemaTime = () => {
    if (!array) return;

    const result = [];
    do {
      result.push(<Hour key={index} cinema={array[index]} />);
      index++;
    } while (
      index < array.length &&
      array[index].maRap === array[index - 1].maRap &&
      format("dd/MM/yyyy", new Date(array[index].ngayChieuGioChieu)) ===
        format("dd/MM/yyyy", new Date(array[index - 1].ngayChieuGioChieu))
    );
    return result;
  };

  const renderCinema = () => {
    if (!array) return;
    const result = [];

    //Sort theo maRap và ngayChieu
    array.sort((a, b) => {
      const timeA = new Date(a.ngayChieuGioChieu).getTime();
      const timeB = new Date(b.ngayChieuGioChieu).getTime();
      const maRapA = a.maRap;
      const maRapB = b.maRap;
      if (maRapA > maRapB) return 1;
      if (maRapA < maRapB) return -1;
      if (timeA > timeB) return -1;
      if (timeA < timeB) return 1;
      return 0;
    });

    //Render
    while (index < array.length) {
      const { tenCumRap, tenRap, maHeThongRap } = array[index].thongTinRap;
      const timeA = format(
        "dd/MM/yyyy",
        new Date(array[index].ngayChieuGioChieu)
      );
      const prev = index > 0 ? array[index - 1].ngayChieuGioChieu : "";
      const timeB = format("dd/MM/yyyy", new Date(prev));
      if (
        index === 0 ||
        array[index].maRap !== array[index - 1].maRap ||
        timeA !== timeB
      ) {
        const i = cinemaList.findIndex(
          (cine) => cine.maHeThongRap === maHeThongRap
        );
        result.push(
          <div className={classes.root} key={index}>
            <div className={classes.left}>
              {i > -1 ? (
                <img
                  src={cinemaList[i].logo?.replace("http", "https")}
                  alt="hình logo"
                  className={classes.logo}
                />
              ) : (
                <FavoriteIcon className={classes.btn} />
              )}
              <div>
                <h3>
                  {tenCumRap}- {tenRap}
                </h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={ticket} alt={"Hình đại diện"} />
                  <img src={fastFood} alt={"Hình đại diện"} />
                  <img src={bill} alt={"Hình đại diện"} />
                </div>
                <span style={{ padding: "10px 0 0 5px" }}> Ngày: {timeA}</span>
              </div>
            </div>
            <div className={classes.right}>{renderCinemaTime()}</div>
          </div>
        );
      } else index++;
    }

    return result;
  };

  return <>{renderCinema()}</>;
}

export default CinemaBox;
