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
  const { array, arrayTableHead } = props;
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

  const handleDelete = (id) => {
    props.handleDelete(id);
  };

  const handleEdit = (id) => {
    props.handleEdit(id);
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
                {arrayTableHead.map((title) => (
                  <TableCell key={title} className={classes.title}>
                    <Typography className={classes.textTitle}>
                      {title.split(/(?=[A-Z])/).join(" ")}
                      <Typography className={classes.sortIcon}>
                        <ExpandLessIcon
                          className={
                            title === sort && order === "asc"
                              ? classes.sortIconActive
                              : null
                          }
                          onClick={() => handleSortAsc(title)}
                        />
                        <ExpandMoreIcon
                          className={
                            title === sort && order === "desc"
                              ? classes.sortIconActive
                              : null
                          }
                          onClick={() => handleSortDesc(title)}
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
                    <EditIcon
                      className={classes.iconButton}
                      onClick={() => handleEdit(row.id)}
                    />
                    <DeleteIcon
                      className={classes.iconButton}
                      onClick={() => handleDelete(row.id)}
                    />
                  </TableCell>
                  {arrayTableHead.map((element, index) => {
                    return (
                      <TableCell key={index} className={classes.textBody}>
                        {row[element]}
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
