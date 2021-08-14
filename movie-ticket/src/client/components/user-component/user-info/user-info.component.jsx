import React, { memo, useState } from "react";
import { useStyles } from "./user-info-styles.component";
import { TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core";
import Select from "@material-ui/core/Select";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import zaloIcon from "./../../../../assets/images/zalo.png";
import fb from "./../../../../assets/images/fb.png";
import gplus from "./../../../../assets/images/g+.png";
import { getImage, postImage } from "../../../../store/actions/image.action";
import { putClientUpdateUserInfoAction } from "../../../../store/actions/user.action";

const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}

const months = [];
for (let i = 1; i <= 12; i++) {
  months.push(i);
}

const years = [];

for (let i = 1900; i <= 2021; i++) {
  years.push(i);
}

function UserInfoComponent() {
  const classes = useStyles();
  const imageUpload = JSON.parse(localStorage.getItem("imageUpload"));
  const avatarUser = JSON.parse(localStorage.getItem("avatar"));
  const mongoUserInfo = JSON.parse(localStorage.getItem("mongoUserInfo"));
  const {
    taiKhoan,
    hoTen,
    email,
    soDt,
    gioiTinh,
    ngaySinh,
    thangSinh,
    namSinh,
  } = mongoUserInfo;
  const [value, setValue] = useState(gioiTinh || "Nam");
  const [day, setDay] = useState(ngaySinh || 1);

  const handleChangeDays = (event) => {
    setDay(event.target.value);
  };

  const [month, setMonth] = useState(thangSinh || 1);

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const [year, setYear] = useState(namSinh || 1900);

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [image, setImage] = useState();

  const temp = imageUpload ? imageUpload.data : avatarUser.data;
  const [avatar, setAvatar] = useState(temp);
  const handleUploadImage = async (e) => {
    e.preventDefault();
    const file = document.getElementById("file").files;
    try {
      if (file) {
        if (imageUpload && file[0].name === imageUpload.name) {
          setAvatar(imageUpload.avatar);
        } else {
          const formData = new FormData();
          formData.append("image", file[0], file[0].name);
          await postImage(formData);
          const res = await getImage(file[0].name);
          localStorage.setItem("imageUpload", JSON.stringify(res.data));
          setAvatar(res.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = () => {
    return (
      <>
        <div style={{ display: "flex" }}>
          <label htmlFor="file" className={classes.fileButton}>
            {image ? image : "Chọn hình đại diện"}
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            style={{ display: "inline-block", width: 0 }}
            onChange={(event) => {
              let value = event.target.value;
              value = value.slice(12, value.length);
              setImage(value);
            }}
          />
        </div>
        <button onClick={handleUploadImage} disabled={!image}>
          Upload
        </button>
      </>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const anhDaiDien = imageUpload ? imageUpload.filename : avatarUser.filename;
    const { lichSuDatVe } = mongoUserInfo;
    formData.append("anhDaiDien", anhDaiDien);
    let data = JSON.stringify(Object.fromEntries(formData));
    data = JSON.parse(data);
    data = { ...data, lichSuDatVe };
    console.log(data);
    await putClientUpdateUserInfoAction(data, taiKhoan);
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>Thông tin tài khoản</div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className={classes.item}>
          <p className={classes.nameItem}>Tên đăng nhập</p>
          <p>{taiKhoan}</p>
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Hình đại diện</p>
          <img
            src={`data:image/png;base64,${avatar}`}
            style={{ maxWidth: 100, maxHeight: 100, marginRight: 10 }}
            alt=""
          />
          {uploadImage()}
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Họ và tên</p>
          <TextField
            className={classes.field}
            value={hoTen}
            name="hoTen"
            variant="outlined"
          />
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Số điện thoại</p>
          <TextField
            className={classes.field}
            value={soDt}
            name="soDt"
            variant="outlined"
          />
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Email</p>
          <TextField
            className={classes.field}
            value={email}
            name="email"
            variant="outlined"
          />
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Giới tính</p>
          <RadioGroup
            aria-label="gender"
            value={value}
            name="gioiTinh"
            onChange={handleChange}
          >
            <div className={classes.radio}>
              <FormControlLabel value="nam" control={<Radio />} label="Nam" />
              <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
            </div>
          </RadioGroup>
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}>Ngày sinh</p>
          <FormControl className={classes.date}>
            <Select value={day} name="ngaySinh" onChange={handleChangeDays}>
              {days.map((day, index) => {
                return (
                  <MenuItem value={day} key={index}>
                    Ngày {day}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.date}>
            <Select value={month} name="thangSinh" onChange={handleChangeMonth}>
              {months.map((m, index) => {
                return (
                  <MenuItem value={m} key={index}>
                    Tháng {m}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl className={classes.date}>
            <Select value={year} name="namSinh" onChange={handleChangeYear}>
              {years.map((year, index) => {
                return (
                  <MenuItem value={year} key={index}>
                    Năm {year}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className={classes.item}>
          <p className={classes.nameItem}></p>
          <Button
            type="submit"
            // className={classes.button}
            variant="contained"
            color="primary"
          >
            Cập Nhật
          </Button>
        </div>
      </form>
      <div className={classes.title2}>Liên kết tài khoản mạng xã hội</div>
      <hr />
      <div className={classes.box}>
        <div className={classes.itemBox}>
          <div className={classes.iright}>
            <img src={zaloIcon} alt="hình Zalo" />
            <p>Zalo</p>
          </div>
          <Button variant="outlined" color="primary" className={classes.btn}>
            Liên kết
          </Button>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iright}>
            <img src={fb} alt="hình fb" />
            <p>Facebook</p>
          </div>
          <Button variant="outlined" color="primary" className={classes.btn}>
            Liên kết
          </Button>
        </div>
        <div className={classes.itemBox}>
          <div className={classes.iright}>
            <img src={gplus} alt="hình google" />
            <p>Google</p>
          </div>
          <Button variant="outlined" color="primary" className={classes.btn}>
            Liên kết
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(UserInfoComponent);
