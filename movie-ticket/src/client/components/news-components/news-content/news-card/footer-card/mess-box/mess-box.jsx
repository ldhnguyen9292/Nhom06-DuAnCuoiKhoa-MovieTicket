import React, { useState } from "react";
import { Grid, CardMedia } from "@material-ui/core";
import format from "date-format";
import { useStyles } from "./mess-box-styles";
import MoreIcon from "./more-icon/more-icon";

function MessBox(props) {
  const classes = useStyles();
  const { messList, handleMess } = props;
  const [isEdit, setEdit] = useState(false);

  const handleEdit = (index) => {
    setEdit({ ...isEdit, [index]: !isEdit[index] });
  };

  const handleUpdate = (index, e) => {
    if (e.key === "Enter") {
      setEdit({ ...isEdit, [index]: !isEdit[index] });
      messList[index].binhLuan = e.target.value;
      handleMess(messList);
    }
  };

  const handleDelete = async (index) => {
    messList.splice(index, 1);
    props.handleMess(messList);
  };

  return (
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
              <MoreIcon
                index={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </Grid>
          </Grid>
        </div>
      ))}
    </>
  );
}

export default MessBox;
