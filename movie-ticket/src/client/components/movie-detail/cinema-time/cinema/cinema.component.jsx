import React from "react";
import { useStyles } from "./cinema-styles.component";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ticket from "./../../../../../assets/images/ticket.png";
import fastFood from "./../../../../../assets/images/fast-food.png";
import bill from "./../../../../../assets/images/bill.png";
import Hour from "./../Hour/Hour.component";

function CinemaBox(props) {
  const classes = useStyles();
  const { array } = props;
  let index = 0;

  const renderCinemaTime = () => {
    if (!array) return;
    const result = [];
    do {
      result.push(<Hour key={index} cinema={array[index]} />);
      index++;
    } while (
      index < array.length &&
      array[index].maRap === array[index - 1].maRap
    );
    return result;
  };

  const renderCinema = () => {
    if (!array) return;
    const result = [];
    while (index < array.length) {
      const { tenCumRap, tenRap } = array[index].thongTinRap;
      if (index === 0 || array[index].maRap !== array[index - 1].maRap) {
        result.push(
          <div className={classes.root} key={index}>
            <div className={classes.left}>
              <FavoriteIcon className={classes.btn} />
              <div>
                <h3>
                  {tenCumRap}- {tenRap}
                </h3>
                <div>
                  <img src={ticket} alt={"Hình đại diện"} />
                  <img src={fastFood} alt={"Hình đại diện"} />
                  <img src={bill} alt={"Hình đại diện"} />
                </div>
              </div>
            </div>
            <div className={classes.right}>{renderCinemaTime()}</div>
          </div>
        );
      }
      index++;
    }

    return result;
  };

  return <>{renderCinema()}</>;
}

export default CinemaBox;
