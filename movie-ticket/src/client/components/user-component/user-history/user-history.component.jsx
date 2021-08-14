import React from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./user-history-styles.component";

function UserHistory() {
  const classes = useStyles();
  const mongoUserInfo = JSON.parse(localStorage.getItem("mongoUserInfo"));
  let lichSuDatVe = [];
  lichSuDatVe = mongoUserInfo.lichSuDatVe;

  const renderBody = () => {
    return lichSuDatVe.map((h, index) => {
      const { maDatVe, ticket, userBooking } = h;
      const { tenPhim, ngayChieuGioChieu, thongTinRap } = userBooking;
      const time = new Date(ngayChieuGioChieu);
      const rap = thongTinRap.tenCumRap + " - " + thongTinRap.tenRap;
      return (
        <tr
          key={maDatVe + index}
          className={index % 2===0 ? classes.trEven : classes.trOdd}
        >
          <td className={classes.td}>{maDatVe}</td>
          <td className={classes.td}>{tenPhim}</td>
          <td className={classes.td}>
            {time.toLocaleString("vi-VN", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </td>
          <td className={classes.td}>{rap}</td>
          <td className={classes.td}>
            {ticket.map((t) => (
              <span key={t.stt}>{t.stt + " "}</span>
            ))}
          </td>
          <td className={classes.td}>{ticket.length}</td>
        </tr>
      );
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.title}>Lịch sử mua hàng</div>
      <hr />
      <Paper className={classes.paper}>
        <table className={classes.table}>
          <thead className={classes.head}>
            <tr>
              {[
                "Mã Đặt Vé",
                "Tên Phim",
                "Ngày Chiếu",
                "Rạp",
                "Ghế đã đặt",
                "Số vé",
              ].map((text) => (
                <th key={text} className={classes.th}>
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </Paper>
    </div>
  );
}

export default UserHistory;
