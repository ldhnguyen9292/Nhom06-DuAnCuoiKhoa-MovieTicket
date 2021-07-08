import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./table-bottom-styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { putCarouselKeyAction } from "./../../../../../store/actions/carousel.actions";

function TableBottom(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { array } = props;
  const keys = useSelector((state) => state.carousel.carouselKeys);
  const { arrayLength, pageSize, page, sort, order } = keys;
  const pageNum = Math.round(arrayLength / pageSize);

  const handleSortAsc = (title) => {
    dispatch(putCarouselKeyAction({ sort: title, order: "asc" }));
  };
  const handleSortDesc = (title) => {
    dispatch(putCarouselKeyAction({ sort: title, order: "desc" }));
  };

  const handleChangePagi = (event, value) => {
    dispatch(putCarouselKeyAction({ page: value }));
  };

  const renderBottom = () => {
    return (
      <>
        <div className={classes.setScrollbar}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.title}>
                  <Typography className={classes.textTitle}>
                    Tuy chon
                  </Typography>
                </TableCell>
                {Object.entries(array[0]).map((title) => (
                  <TableCell key={title[0]} className={classes.title}>
                    <Typography className={classes.textTitle}>
                      {title[0].split(/(?=[A-Z])/).join(" ")}
                      <Typography className={classes.sortIcon}>
                        <ExpandLessIcon
                          className={
                            title[0] === sort && order === "asc"
                              ? classes.sortIconActive
                              : null
                          }
                          onClick={() => handleSortAsc(title[0])}
                        />
                        <ExpandMoreIcon
                          className={
                            title[0] === sort && order === "desc"
                              ? classes.sortIconActive
                              : null
                          }
                          onClick={() => handleSortDesc(title[0])}
                        />
                      </Typography>
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {array.map((row) => (
                <TableRow key={row.name}>
                  <TableCell className={classes.textBody}>
                    <EditIcon className={classes.iconButton} />
                    <DeleteIcon className={classes.iconButton} />
                  </TableCell>
                  {Object.entries(row).map((element) => {
                    return (
                      <TableCell key={element[1]} className={classes.textBody}>
                        {element[1]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className={classes.pagiBox}>
          <Pagination
            count={pageNum}
            page={page}
            color="primary"
            className={classes.pagination}
            onChange={handleChangePagi}
          />
        </div>
      </>
    );
  };

  return (
    <>{array.length > 0 ? renderBottom() : <p>Không tìm thấy kết quả</p>}</>
  );
}

export default memo(TableBottom);
