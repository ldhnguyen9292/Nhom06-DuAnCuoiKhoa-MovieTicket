import React, { useState } from "react";
import { Grid, CardMedia } from "@material-ui/core";
import format from "date-format";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popper from "@material-ui/core/Popper";
import { useStyles } from "./mess-box-styles";

function MessBox(props) {
  const classes = useStyles();
  const { messList } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEdit, setEdit] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleEdit = (index) => {
    setAnchorEl(null);
    setEdit({ [index]: !isEdit[index] });
  };

  const handleUpdate = (index, e) => {
    if (e.key === "Enter") {
      setEdit({ [index]: !isEdit[index] });
      messList[index].binhLuan = e.target.value;
      props.handleMess(messList);
    }
  };

  const handleDelete = async (index) => {
    messList.splice(index, 1);
    setAnchorEl(null);
    props.handleMess(messList);
  };

  return (
    <div>
      <>
        {messList.map((item, index) => (
          <div className={classes.messBox} key={index}>
            <Grid container alignItems="center" wrap="nowrap">
              <Grid item className={classes.avatarBox}>
                <CardMedia
                  component="img"
                  src={item.hinhDaiDien}
                  className={classes.messAvatar}
                />
              </Grid>
              <Grid item className={classes.messTextBox}>
                <div className={classes.messText}>
                  <p className={classes.name}>{item.ten}</p>
                  <p className={classes.titleRed}>
                    {format("dd/MM/yyyy hh:mm", new Date(item.ngayBinhLuan))}
                  </p>
                  {isEdit[index] ? (
                    <input
                      type="text"
                      defaultValue={item.binhLuan}
                      onKeyPress={(event) => handleUpdate(index, event)}
                      className={classes.input}
                    />
                  ) : (
                    <p> {item.binhLuan} </p>
                  )}
                </div>
              </Grid>
              <Grid item>
                <MoreVertIcon
                  className={classes.moreIcon}
                  aria-describedby="simple-popper"
                  onClick={handleClick}
                />
                <Popper
                  id="simple-popper"
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                >
                  <div className={classes.paper}>
                    <p onClick={() => handleEdit(index)}>Chỉnh sửa</p>
                    <p onClick={() => handleDelete(index)}>Xóa</p>
                  </div>
                </Popper>
              </Grid>
            </Grid>
          </div>
        ))}
      </>
    </div>
  );
}

export default MessBox;
