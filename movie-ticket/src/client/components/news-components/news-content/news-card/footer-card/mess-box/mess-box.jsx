import React, { useCallback, useState } from "react";
import { Grid, CardMedia } from "@material-ui/core";
import format from "date-format";
import { useStyles } from "./mess-box-styles";
import MoreIcon from "./more-icon/more-icon";
import { getImage } from "../../../../../../../store/actions/image.action";

function MessBox(props) {
  const classes = useStyles();
  const { messList, handleMess } = props;
  const [isEdit, setEdit] = useState(false);
  const [avatar, setAvatar] = useState();

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

  const getAva = async (hinhDaiDien) => {
    const res = await getImage(hinhDaiDien);
    setAvatar(res.data.data);
  };

  const renderAvatar = useCallback(
    (item) => {
      if (item.hinhDaiDien.indexOf("http") > -1) {
        return (
          <CardMedia
            component="img"
            src={item.hinhDaiDien}
            className={classes.messAvatar}
          />
        );
      }
      if (!avatar) {
        getAva(item.hinhDaiDien);
        return <></>;
      }
      return (
        <>
          <img
            src={`data:image/png;base64,${avatar}`}
            alt="avatar"
            style={{ width: 25, height: 25, borderRadius: "50%" }}
          />
        </>
      );
    },
    [avatar]
  );

  return (
    <>
      {messList.map((item, index) => (
        <div className={classes.messBox} key={index}>
          <Grid container alignItems="center" wrap="nowrap">
            <Grid item className={classes.avatarBox}>
              {renderAvatar(item)}
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
