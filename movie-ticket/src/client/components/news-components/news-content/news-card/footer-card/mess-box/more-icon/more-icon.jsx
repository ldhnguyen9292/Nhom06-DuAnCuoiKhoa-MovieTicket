import React, { useState } from "react";
import { useStyles } from "./more-icon-styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popper from "@material-ui/core/Popper";

function MoreIcon(props) {
  const classes = useStyles();
  const { index } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleEdit = () => {
    setAnchorEl(null);
    props.handleEdit(index);
  };

  const handleDelete = () => {
    setAnchorEl(null);
    props.handleDelete(index);
  };

  return (
    <>
      <MoreVertIcon
        className={classes.moreIcon}
        aria-describedby={`moreIcon-${index}`}
        onClick={handleClick}
      />
      <Popper
        id={`moreIcon-${index}`}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
      >
        <div className={classes.paper}>
          <p onClick={() => handleEdit(index)}>Chỉnh sửa</p>
          <p onClick={() => handleDelete(index)}>Xóa</p>
        </div>
      </Popper>
    </>
  );
}

export default MoreIcon;
